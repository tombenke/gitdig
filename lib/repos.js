var _ = require('lodash')
var async = require('async')
var base64 = require('base64-coder-node')()
var readlineSync = require('readline-sync')
var file = require('./file.js')
var GitHubApi = require("github")
 
var github = new GitHubApi({
    debug: false,
    protocol: "https",
    host: "api.github.com",
    pathPrefix: "",
    headers: {
        "user-agent": "gitdig"
    },
    Promise: require('bluebird'),
    followRedirects: false,
    timeout: 5000
});

const loadFromGit = (cb) => {
    let allRepos = []
    const getRepos = (err, res) => {
        if (err) {
            return false
        }
        allRepos = allRepos.concat(_.map(res.data, (repo) => {
                return {
                    name: repo.name,
                    owner: repo.owner.login,
                    private: repo.private,
                    description: repo.description,
                    homepage: repo.homepage,
                    html_url: repo.html_url,
                    git_url: repo.git_url
                }
            }));
        if (github.hasNextPage(res)) {
            github.getNextPage(res, getRepos)
        } else {
            cb(null, allRepos)
        }
    }

    github.repos.getAll({
            type: "all",
            per_page: 100
        }, (err, res) => getRepos(err, res));
}

const loadFromSnapshot = (config) => {
    return (cb) => {
        cb(null, file.read(config.snapshotFile))
    }
}

const getAllRepos = (config) => (config.offline) ? loadFromSnapshot(config) : loadFromGit

const filterReposByOwner = (owners) => (repos, cb) =>
    cb(null, _.filter(repos, repo => _.includes(owners, repo.owner)))

const skipIgnoredRepos = (ignored) => (repos, cb) =>
    cb(null, _.filter(repos, repo => ! _.includes(ignored, `${repo.owner}/${repo.name}`)))

const extendByReadme = (results, repo, cb) => {
    console.log(`get README from ${repo.owner}/${repo.name}...`)
    github.repos.getReadme({
        owner: repo.owner,
        repo: repo.name
    }, (err, res) => {
        if (err === null) {
            repo.hasReadme = true
        } else {
            repo.hasReadme = false
        }
        results.push(repo)
        cb(null, results)
    });
}

const extendByPackageJson = (results, repo, cb) => {
    console.log(`get package.json from ${repo.owner}/${repo.name}...`)
    github.repos.getContent({
        owner: repo.owner,
        repo: repo.name,
        path: 'package.json'
    }, (err, res) => {
        if (err === null) {
            const packageInfo = JSON.parse(base64.decode(res.data.content))
            repo.package = packageInfo
        }
        results.push(repo)
        cb(null, results)
    });
}

const extendReposBy = (options, extenderFunc) => {
    if (options.offline) {
        return (repos, cb) => { cb(null, repos) }
    } else {
        return (repos, cb) => {
            async.reduce(repos, [], extenderFunc, (err, result) => cb(err, result))
        }
    }
}

const mergeTags = (repos, cb) => {
    cb(null, _.map(repos, repo => {
            let tags = []
            if (_.hasIn(repo, "package.peywords")) {
                tags = _.union(tags, repo.package.keywords)
            }
            repo.tags = _.union(repo.tags, tags)
            return repo
        }))
}

const reduceDictionary = (dictionary, initialContent) => {
    return _.reduce(_.keys(dictionary), (results, key) => {
            if (! _.has(results, key)) {
                results[key] = dictionary[key]
            }
            return results
        }, initialContent)
}

const mergeDependencies = (repos, cb) => {
    cb(null, _.map(repos, repo => {
        repo.dependencies = {}
        if (_.hasIn(repo, "package.dependencies")) {
            repo.dependencies = reduceDictionary(repo.package.dependencies, repo.dependencies)
        }
        if (_.hasIn(repo, "package.devDependencies")) {
            repo.dependencies = reduceDictionary(repo.package.devDependencies, repo.dependencies)
        }
        return repo
    }))
}

const saveSnapshot = (snapshotFile) => (repos, cb) => {
    file.writeToFile(snapshotFile, repos)
    cb(null, repos)
}

const printSummary = repo => (console.log(`${repo.owner}/${repo.name}`))

const debug = (config, text, debugFun) => (repos, cb) => {
    if (config.debug) {
        console.log(text)
        _.map(repos, debugFun)
    }
    cb(null, repos)
}

/**
 * Get all repositories.
 * If config.offline === true, then use the local snapshot file,
 * otherwise connect to GitHub API, and use the online data.
 *
 * @param  {Object}   config    Configuration parameters
 * @param  {Function} cb        Callback function with (err, results) arguments
 */
exports.getRepos = (config, cb) => {
    if (! config.offline) {
        let password = readlineSync.question('password: ', {
            hideEchoBack: true
        });

        try {
            github.authenticate({
                type: "basic",
                username: config.gitUser,
                password: password
            });
        } catch(err) {
            console.log("ERROR: authentication failed!")
            process.exit(1)
        }
    }

    async.waterfall([
        getAllRepos(config),
        filterReposByOwner(config.find.owners),
        skipIgnoredRepos(config.ignore.repositories),
        extendReposBy(config, extendByReadme),
        extendReposBy(config, extendByPackageJson),
//        extendReposBy(config, extendByPomXml),
        mergeTags,
        mergeDependencies,
        debug(config, "mergeDependencies >>", printSummary),
        saveSnapshot(config.snapshotFile)
    ], cb)
};
