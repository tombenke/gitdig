var file = require('./file.js');
var _ = require('lodash')

const defaultOptions = {
    configFileName: '.gitdig_config.yml',
    offline: false,
    debug: false,
    snapshotFile: '.gitdig_snapshot.json',
    find: {
        owners: []
    },
    ignore: {
        repositories: []
    },
    export: {
        externals: true
    }
}

var envOptions = {
    // Set values from environment variables if there is any needed
}

var config = {
    getDefaults: () => defaultOptions,
    load: function(configFile, cliOptions) {

        var cliConfigFileOptions = {}
        if (configFile) cliConfigFileOptions = file.read(configFile, true);
        _.extend(config, defaultOptions, defaultConfigFileOptions, envOptions, cliConfigFileOptions, cliOptions)
        // If no owners defined in config files, set the gitUser as the only item in order to have one
        if (config.find.owners.length === 0) {
            config.find.owners.push(config.gitUser)
        }
    }
}

let defaultConfigFileContent = file.read(defaultOptions.configFileName, false)
const defaultConfigFileOptions = defaultConfigFileContent !== null ? defaultConfigFileContent : {}

_.assign(config, defaultOptions, defaultConfigFileOptions, envOptions)

module.exports = config
