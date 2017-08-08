#!/usr/bin/env node
/*jshint node: true */
'use strict';

var verbose = false;
var fs = require('fs');
var path = require('path');
var file = require('./file.js');
var _ = require('lodash')

var envOptions = {
    // TODO: implement loader, and default configs
}

var config = {
    load: function(configFile, cliOptions) {

        var input = file.read(configFile, cliOptions);
        // console.log(JSON.stringify(input, null, '  '));
        _.extend(config, input, envOptions, cliOptions)
    }
}


module.exports = config
