#!/usr/bin/env node
/*jshint node: true */
'use strict';

var _ = require('lodash')
var async = require('async')
var base64 = require('base64-coder-node')()
var readlineSync = require('readline-sync')
var file = require('./file.js')

var GitHubApi = require("github");
 
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
        allRepos = allRepos.concat(_.map(res.data, function(repo) {
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
        }, function(err, res) {
            getRepos(err, res)
        });
}

const loadFromSnapshot = (config) => {
    return (cb) => {
        cb(null, file.read(config.snapshotFile))
    }
}

const getAllRepos = (config) => (config.offline) ? loadFromSnapshot(config) : loadFromGit

const filterReposByOwner = function(owners) {
    return function(repos, cb) {
        cb(null, _.filter(repos, repo => _.includes(owners, repo.owner)))
    }
}

const skipIgnoredRepos = function(ignored) {
    return function(repos, cb) {
        cb(null, _.filter(repos, repo => ! _.includes(ignored, `${repo.owner}/${repo.name}`)))
    }
}

const extendByPackageJson = function(results, repo, cb) {
    console.log(`get package.json from ${repo.owner}/${repo.name}...`)
    github.repos.getContent({
        owner: repo.owner,
        repo: repo.name,
        path: 'package.json'
    }, function(err, res) {
        if (err === null) {
            const packageInfo = JSON.parse(base64.decode(res.data.content))
            repo.package = packageInfo
        }
        results.push(repo)
        cb(null, results)
    });
}

const extendReposBy = function(options, extenderFunc) {
    if (options.offline) {
        return function(repos, cb) { cb(null, repos) }
    } else {
        return function(repos, cb) {
            async.reduce(repos, [], extenderFunc, (err, result) => cb(err, result))
        }
    }
}

const mergeTags = function(repos, cb) {
    cb(null, _.map(repos, repo => {
            let tags = []
            if (_.has(repo, "package") && _.has(repo.package, "keywords")) {
                tags = _.union(tags, repo.package.keywords)
            }
            repo.tags = _.union(repo.tags, tags)
            return repo
        }))
}

const mergeDependencies = function(repos, cb) {
    cb(null, _.map(repos, repo => {
            if (_.has(repo, "package") && _.has(repo.package, "dependencies")) {
                repo.dependencies = _.reduce(_.keys(repo.package.dependencies), (results, dep) => {
                        // console.log(results, dep)
                        if (! _.has(results, dep)) {
                            results[dep] = repo.package.dependencies[dep]
                        }
                        return results
                    }, {})
            }
            if (_.has(repo, "package") && _.has(repo.package, "devDependencies")) {
                repo.dependencies = _.reduce(_.keys(repo.package.devDependencies), (results, dep) => {
                        // console.log(results, dep)
                        if (! _.has(results, dep)) {
                            results[dep] = repo.package.devDependencies[dep]
                        }
                        return results
                    }, repo.dependencies)
            }
            return repo
        }))
}

const saveSnapshot = function(snapshotFile) {
    return function(repos, cb) {
        file.writeToFile(snapshotFile, repos)
        cb(null, repos)
    }
}

const printSummary = repo => (console.log(`${repo.owner}/${repo.name}`))

const debug = function(config, text, debugFun) {
    return function(repos, cb) {
        if (config.debug) {
            console.log(text)
            _.map(repos, debugFun)
        }
        cb(null, repos)
    }
}


/**
 * Get all repositories.
 * If config.offline === true, then use the local snapshot file,
 * otherwise connect to GitHub API, and use the online data.
 *
 * @param  {Object} config   Configuration parameters
 */
exports.getRepos = function(config, cb) {
    if (! config.offline) {
        let password = readlineSync.question('password: ', {
            hideEchoBack: true
        });

        github.authenticate({
            type: "basic",
            username: config.gitUser,
            password: password
        });
    }

    async.waterfall([
        getAllRepos(config),
        filterReposByOwner(config.find.owners),
        skipIgnoredRepos(config.ignore.repositories),
        extendReposBy(config, extendByPackageJson),
//        extendReposBy(config, extendByPomXml),
        mergeTags,
        mergeDependencies,
        debug(config, "mergeDependencies >>", printSummary),
        saveSnapshot(config.snapshotFile)
    ], cb)
};
