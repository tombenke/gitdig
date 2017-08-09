#!/usr/bin/env node
/*jshint node: true */
'use strict';

const repos = require('./repos')
const _ = require('lodash')
const chalk = require('chalk')

const checkNames = (repo, results) => {
    if (_.has(repo, "package")) {
        if (repo.name != repo.package.name) {
            results.warnings.push(`Name mismatch repo/name: '${repo.name}' vs. package.json/name: '${repo.package.name}'!`)
        }
    }
    return results
}

const checkIfPackageJsonExists = (repo, results) => {
    if (! _.has(repo, "package")) {
        results.warnings.push("No package.json info found!")
    }
    return results
}

const checks = [
    checkNames,
    checkIfPackageJsonExists
]

const execChecks = (repo, results) => _.reduce(checks, (results, checkFun) => checkFun(repo, results), results)

const checkRepo = (repo) => {
    let results = {
        id: `${repo.owner}/${repo.name}`,
        warnings: [],
        errors: []
    }
    return execChecks(repo, results)
}

const error = chalk.bold.red
const warning = chalk.keyword('orange')

const printCheckResult = (result) => {
    console.log(chalk.underline(`\n${result.id}`))
    _.map(result.errors, (message) => { console.log( '  ' + error('error  ') + message) })
    _.map(result.warnings, (message) => { console.log( '  ' + warning('warning  ') + message) })
}

const printCheckResults = (checkResults) => {
    const problemsSummary = _.reduce(checkResults, (sums, checkResult) => {
            return {
                numWarnings: sums.numWarnings + checkResult.warnings.length,
                numErrors: sums.numErrors + checkResult.errors.length
            }
        }, { numWarnings: 0, numErrors: 0 })
    const numProblems = problemsSummary.numWarnings + problemsSummary.numErrors
    const summaryMessage = `\n${numProblems} problems (${problemsSummary.numErrors} errors, ${problemsSummary.numWarnings} warnings)\n`

    _.map(checkResults, printCheckResult)
    console.log(error(summaryMessage))
}

/**
 * Executes the `check` command, that scans through the whole list of repositories,
 * Run the checkRepo function against each repository, then print the results of checking.
 *
 * @param  {Object} config   Configuration parameters
 */
exports.execute = function(config) {
    repos.getRepos(config, (err, repos) => {
            if (err) {
                console.log('ERROR: ', err)
            } else {
                printCheckResults(_.map(repos, checkRepo))
            }
        })
}
