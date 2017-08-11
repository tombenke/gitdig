const repos = require('./repos')
const _ = require('lodash')

/**
 * Execute the `ls` command, that lists the repositories found
 *
 * @param  {Object} config   Configuration parameters
 */
exports.execute = function(config) {
    repos.getRepos(config, (err, repos) => {
            if (err) {
                console.log('ERROR: ', err)
            } else {
                if (config.long) {
                    _.map(repos, (repo) => {
                            const scope = repo.private ? "(private)" : "(public)"
                            console.log(`${repo.owner}/${repo.name} - ${scope}`)
                            console.log(repo.description)
                            console.log(JSON.stringify(repo.tags))
                            console.log('')
                        })
                } else {
                    _.map(repos, (repo) => console.log(`${repo.owner}/${repo.name} `))
                }
            }
        })
}
