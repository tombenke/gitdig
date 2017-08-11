const repos = require('./repos')
const graph = require('./graph')

/**
 * Collect and aggregate graph data on repos, dependencies, etc.
 * and exports the results to the standard output.
 *
 * @param {String} content  The type of the content to export.
 *                          One of: 'graph', 'nodes', 'roots', 'orphans'.
 * @param {Object} config   Configuration parameters
 */
exports.execute = function(content, config) {
    repos.getRepos(config, (err, repos) => {
            if (err) {
                console.log('ERROR: ', err)
            } else {

                switch(content) {
                    case 'graph':
                        console.log(JSON.stringify(graph.getGraph(repos, config.export.externals), null, '  '))
                        break;

                    case 'tree':
                        console.log(JSON.stringify(graph.getTree(repos, config.export.externals), null, '  '))
                        break;

                    case 'nodes':
                        console.log(JSON.stringify(graph.getNodes(repos, config.export.externals), null, '  '))
                        break;

                    case 'roots':
                        console.log('roots: ', graph.getNodes(repos, config.export.externals).roots)
                        break;

                    case 'orphans':
                        console.log('orphans: ', graph.getNodes(repos, config.export.externals).orphans)
                        break;
                }
            }
        })
}
