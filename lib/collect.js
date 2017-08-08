#!/usr/bin/env node
/*jshint node: true */
'use strict';

const repos = require('./repos')

/**
 * TBD.
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
