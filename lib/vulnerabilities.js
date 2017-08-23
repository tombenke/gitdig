const _ = require('lodash')
const chalk = require('chalk')
const ossindex = require('ossindexjs')
const repos = require('./repos')
const graph = require('./graph')

const isRepositoryRef = (module) => {
    return _.head(_.tail(module)).match(/^http.*/)
}

const hasIssue = (module) => (module["vulnerability-total"] > 0)

const mergeWithBlacklist = (blacklist, modules) => {
    return _.map(modules, (module) => {
            if (_.includes(blacklist, module.name)) {
            module.vulnerabilities.push({
                    title: "Blacklisted",
                    description: ""
                })
                module["vulnerability-total"]++
                console.log(module)
            }
            return module
        })
}

const filterByWhitelist = (whitelist, modules) =>
    _.filter(modules, (module) => (! _.includes(whitelist, module.name)))

const checkVulnerabilities = (dependencies, modules, endCb) => {
    const requestData = _.map(modules, (module) => ({ pm: "npm", name: module[0] }))
    ossindex.getPackageData(requestData, (err, results) => {
            let mergedResults = results
            if (! err) {
                mergedResults = filterByWhitelist(dependencies.whitelist, mergeWithBlacklist(dependencies.blacklist, results))
            }
            endCb(err, mergedResults)
        })
}

const addDependant = (repos) => (module) => {
    module.dependants = graph.getDependants(repos, module.name)
    return module
}

const addDependants = (modules, repos) => _.map(modules, addDependant(repos))

const bold = chalk.bold
const red = chalk.bold.red
const printVulnerability = (module, printAffected) => {
    console.log(bold(`\n${module.name}:`))
    _.map(module.vulnerabilities, (vulnerability) => {
            console.log('  - ' + red(`${vulnerability.title}`))
        })
    if (printAffected) {
        console.log("affected: ", module.dependants)
        console.log()
    }
}

const printResults = (modules, printDependants) => {
    _.map(_.filter(modules, (module) => hasIssue(module)), (module) => printVulnerability(module, printDependants))
}

/**
 * Check the dependencies
 *
 * @param {Object} config   Configuration parameters
 */
exports.execute = function(config) {
    repos.getRepos(config, (err, repos) => {
            if (err) {
                console.log('ERROR: ', err)
            } else {
                const allDependencies = graph.getDependencies(repos, config.export.externals)
                const allDependenciesList = _.sortBy(_.map(_.keys(allDependencies), (dependency, key) => [dependency, allDependencies[dependency]]))
                const nodeModuleDependenciesList = _.filter(allDependenciesList, (dependency) => ! isRepositoryRef(dependency))
                checkVulnerabilities(config.dependencies, nodeModuleDependenciesList, (err, results) => {
                        if (err) {
                            console.log('ERROR: ', err)
                        } else {
                           if (config.affected) {
                                printResults(addDependants(results, repos), config.affected)
                            } else {
                                printResults(results)
                            }
                        }
                    })
            }
        })
}
