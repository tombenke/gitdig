const _ = require('lodash')
const async = require('async')
const chalk = require('chalk')
const latestVersion = require('latest-version')
const compareVersions = require('compare-versions')
const repos = require('./repos')
const graph = require('./graph')

const isRepositoryRef = (module) => {
    return _.head(_.tail(module)).match(/^http.*/)
}

const hasFixVersion = (module) => {
    return _.head(_.tail(module)).match(/^[0-9]+.*/)
}

const checkVersion = (module, cb) => {
    const name = module[0]
    const version = module[1]

    latestVersion(name).then(latest => {
        const hasNewVersion = compareVersions(latest, version)
        cb(null, {
            name: name,
            version: version,
            latest: latest,
            hasNew: hasNewVersion
        })
    });
}

const checkVersions = (modules, endCb) =>
    async.map(modules, (module, cb) => checkVersion(module, cb), endCb)

const addDependant = (repos) => (module) => {
    module.dependants = graph.getDependants(repos, module.name)
    return module
}

const addDependants = (modules, repos) => _.map(modules, addDependant(repos))

const bold = chalk.bold
const blue = chalk.bold.blue
const green = chalk.bold.green
const printResults = (modules, printAffected) => {
    _.map(_.filter(modules, (module) => module.hasNew), (module) => {
            console.log(bold(module.name) + ' ' + blue(`v${module.version}`) + ' is used. There is newer version: ' + green(`v${module.latest}`))
            if (printAffected) {
                console.log("affected: ", module.dependants)
                console.log()
            }
        })
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
                const nodeModuleDependenciesList = _.filter(_.filter(allDependenciesList, (dependency) => ! isRepositoryRef(dependency)), (dependency) => hasFixVersion(dependency))
                checkVersions(nodeModuleDependenciesList, (err, results) => {
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
