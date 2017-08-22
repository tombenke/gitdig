const _ = require('lodash')
const async = require('async')
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

const printResults = (modules) => {
    console.log('These modules have newer versions:', JSON.stringify(modules, null, '  '))
    _.map(_.filter(modules, (module) => module.hasNew), (module) => console.log(`Upgrade ${module.name} from v${module.version} to v${module.latest}`))
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
                const moduleVersions = checkVersions(nodeModuleDependenciesList, (err, results) => {
                        if (err) {
                            console.log('ERROR: ', err)
                        } else {
                            printResults(results)
                        }
                    })
            }
        })
}
