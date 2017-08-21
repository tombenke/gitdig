#!/usr/bin/env node

/**
 * The main entry point of the gitdig command-line utility
 */
(function() {
    const _ = require('lodash')
    const config = require('../lib/config.js')
    const program = require('commander')
    const thisPackage = require(__dirname + '/../package.json')
    program._name = thisPackage.name
    const app = require('../index')

    const getGenericArgs = (options) => {
        let cliConfig = {}
        if (options.gitUser) cliConfig.gitUser = options.gitUser;
        if (options.snapshot) cliConfig.snapshotFile = options.snapshot;
        if (options.offline) cliConfig.offline = options.offline;
        if (options.config) cliConfig.configFileName = options.config;
        return cliConfig
    }

    // Setup the commands of the program
    program
        .version(thisPackage.version)
        .command('init')
        .description('Create initial config file with default values')
        .option("-c, --config [config file name]", "The name of the config file to use", String, null)
        .option("-u, --git-user [user name]", "The git account", String, null)
        .option("-s, --snapshot [snapshot file name]", "Define the file name for the local snapshot repo summaries", String, null)
        .action(function(options) {
                var cliConfig = getGenericArgs(options)
                app.init.execute(config, cliConfig)
            })

    program
        .command('collect')
        .description('Collect data about repositories, through a selected user account, and make a local snapshot file.')
        .option("-c, --config [config file name]", "The name of the config file to use", String, null)
        .option("-u, --git-user [user name]", "The git account", String, null)
        .option("-s, --snapshot [snapshot file name]", "Define the file name for the local snapshot repo summaries", String, null)
        .action(function(options) {
                var cliConfig = getGenericArgs(options)
                config.load(options.config, cliConfig)
                app.collect.execute(config)
            })

    program
        .command('ls')
        .description('List the repositories')
        .option("-l, --long", "Long format, including some details", Boolean, false)
        .option("-c, --config [config file name]", "The name of the config file to use", String, null)
        .option("-u, --git-user [user name]", "The git account", String, null)
        .option("-s, --snapshot [snapshot file name]", "Define the file name for the local snapshot repo summaries", String, null)
        .option("-o, --offline", "Use the local snapshot (offline mode)")
        .action(function(options) {
                var cliConfig = getGenericArgs(options)
                if (options.long) cliConfig.long = options.long
                config.load(options.config, cliConfig)
                app.ls.execute(config)
            })

    program
        .command('check')
        .description('Check the repositories')
        .option("-c, --config [config file name]", "The name of the config file to use", String, null)
        .option("-u, --git-user [user name]", "The git account", String, null)
        .option("-s, --snapshot [snapshot file name]", "Define the file name for the local snapshot repo summaries", String, null)
        .option("-o, --offline", "Use the local snapshot (offline mode)")
        .action(function(options) {
                var cliConfig = getGenericArgs(options)
                config.load(options.config, cliConfig)
                app.check.execute(config)
            })

    program
        .command('dependencies')
        .description('Check the dependencies')
        .option("-c, --config [config file name]", "The name of the config file to use", String, null)
        .option("-u, --git-user [user name]", "The git account", String, null)
        .option("-s, --snapshot [snapshot file name]", "Define the file name for the local snapshot repo summaries", String, null)
        .option("-o, --offline", "Use the local snapshot (offline mode)")
        .action(function(options) {
                var cliConfig = getGenericArgs(options)
                config.load(options.config, cliConfig)
                app.dependencies.execute(config)
            })

    program
        .command('export <content>')
        .description('Export aggregations from repo data')
        .option("-c, --config [config file name]", "The name of the config file to use", String, null)
        .option("-u, --git-user [user name]", "The git account", String, null)
        .option("-s, --snapshot [snapshot file name]", "Define the file name for the local snapshot repo summaries", String, null)
        .option("-o, --offline", "Use the local snapshot (offline mode)")
        .option("-x, --no-externals", "No external nodes and links will be exported", Boolean, false)
        .action(function(content, options) {
                var cliConfig = getGenericArgs(options)
                if (_.has(options, 'externals') && _.isBoolean(options.externals)) {
                    cliConfig.export = {
                        externals: options.externals
                    }
                }
                config.load(options.config, cliConfig)
                app.export.execute(content, config)
            })

    program.parse(process.argv)
})()
