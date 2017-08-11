const _ = require('lodash')
const file = require('./file')

/**
 * Create initial config file with default values
 *
 * @param  {Object} config   Configuration parameters
 */
const execute = (config, cliOptions) => {
    const newConfig = _.extend({}, config.getDefaults(), cliOptions)
    file.writeToFile(newConfig.configFileName, newConfig)
}

module.exports = {
    execute: execute
}
