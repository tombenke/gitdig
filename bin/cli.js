#!/usr/bin/env node
/*jshint node: true */
'use strict';

/**
 * command-line utility
 */
(function() {
    var config = require('../lib/config.js');
    var program = require('commander');
    var thisPackage = require(__dirname + '/../package.json');
    program._name = thisPackage.name;
    var app = require('../index');

    // Setup the commands of the program
    program
        .version(thisPackage.version)
        .command('collect')
        .description('Collect data about repositories, through a selected user account, and make a local snapshot file.')
        .option("-c, --config [config file name]", "The name of the config file to use", String, null)
        .option("-u, --git-user [user name]", "The git account", String, null)
        .option("-s, --snapshot [snapshot file name]", "Define the file name for the local snapshot repo summaries", String, null)
        .action(function(options) {
                console.log(options)
                var cliConfig = {}
                if (options.gitUser) cliConfig.gitUser = options.gitUser;
                if (options.snapshot) cliConfig.snapshotFile = options.snapshot;
                config.load(options.config, cliConfig);
                console.log(JSON.stringify(config, null, '  '));
                app.collect.execute(config);
            });

    program
        .version(thisPackage.version)
        .command('ls')
        .description('List the repositories')
        .option("-l, --long", "Long format, including some details", Boolean, false)
        .option("-c, --config [config file name]", "The name of the config file to use", String, null)
        .option("-u, --git-user [user name]", "The git account", String, null)
        .option("-s, --snapshot [snapshot file name]", "Define the file name for the local snapshot repo summaries", String, null)
//        .option("-o, --offline", "Use the local snapshot (offline mode)", Boolean, false)
        .action(function(options) {
                console.log(options)
                var cliConfig = {}
                if (options.long) cliConfig.long = options.long;
                if (options.gitUser) cliConfig.gitUser = options.gitUser;
                if (options.snapshot) cliConfig.snapshotFile = options.snapshot;
                if (options.offline) cliConfig.offline = options.offline;
                config.load(options.config, cliConfig);
                console.log(JSON.stringify(config, null, '  '));
                app.ls.execute(config);
            });

    program.parse(process.argv);
})();