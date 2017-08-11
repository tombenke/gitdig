const repos = require('./repos')

/**
 * Execute the collect command.
 *
 * @param  {Object} config   Configuration parameters
 */
exports.execute = function(config) {
    repos.getRepos(config, (err, repos) => {
            if (err) {
                console.log('ERROR: ', err)
            } else {
                console.log('The snapshot is successfully created.')
            }
        })
}
