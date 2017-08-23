const _ = require('lodash')
const repos = require('./repos')
const graph = require('./graph')

/**
 * Prints dependants
 *
 * @param {Object} config   Configuration parameters
 */
exports.execute = function(dependency, config) {
    repos.getRepos(config, (err, repos) => {
            if (err) {
                console.log('ERROR: ', err)
            } else {
                const allDependencies = graph.getDependencies(repos, config.export.externals)
                if (_.has(allDependencies, dependency)) {
                    console.log(graph.getDependants(repos, dependency))
                } else {
                    console.log('There is no such dependency used in any repository: ', dependency)
                }
            }
        })
}
