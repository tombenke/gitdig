#!/usr/bin/env node
/*jshint node: true */
'use strict';

var verbose = false;
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
        "user-agent": "gitd"
    },
    Promise: require('bluebird'),
    followRedirects: false,
    timeout: 5000
});

const getAllRepos = (config) => {
    return function(cb) {
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
                console.log('getAllRepos ========================')
                getRepos(err, res)
            });
    }
}

const filterReposByOwner = function(owners) {
    return function(repos, cb) {
        console.log('filterReposByOwner ===========================')
        cb(null, _.filter(repos, repo => _.includes(owners, repo.owner)))
    }
}

const skipIgnoredRepos = function(ignored) {
    return function(repos, cb) {
        console.log('skipIgnoredRepos =============================')
        cb(null, _.filter(repos, repo => ! _.includes(ignored, `${repo.owner}/${repo.name}`)))
    }
}

const extendByPackageJson = function(results, repo, cb) {
    console.log('getContent:', repo.owner, repo.name)
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

const extendReposBy = function(extenderFunc) {
    return function(repos, cb) {
        async.reduce(repos, [], extenderFunc, (err, result) => cb(err, result))
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

const saveSnapshot = function(snapshotFile) {
    return function(repos, cb) {
        file.writeYaml(snapshotFile, repos)
//        file.writeJson(snapshotFile, repos)
        cb(null, repos)
    }
}

const printSummary = repo => (console.log(`${repo.owner}/${repo.name}`))

const debug = function(debugFun) {
    return function(repos, cb) {
        _.map(repos, debugFun)
        cb(null, repos)
    }
}


/**
 * TBD.
 * @param  {Object} config   Configuration parameters
 */
exports.getRepos = function(config, cb) {
    let password = readlineSync.question('password: ', {
        hideEchoBack: true
    });

    github.authenticate({
        type: "basic",
        username: config.gitUser,
        password: password
    });

    async.waterfall([
        getAllRepos(config),
        filterReposByOwner(config.find.owners),
        skipIgnoredRepos(config.ignore.repositories),
        extendReposBy(extendByPackageJson),
//        extendReposBy(extendByPomXml),
        mergeTags,
//        debug(printSummary),
        saveSnapshot(config.snapshotFile)
    ], cb)
};
