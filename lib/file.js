#!/usr/bin/env node
/*jshint node: true */
'use strict';

// var fs = require('fs');
var fs = require('fs');
var path = require('path');

// Load the YAML parser module
var jsyaml = require( 'js-yaml' );

const read = function(fileName) {
	var content = null;

    try {
        content = jsyaml.load(fs.readFileSync(path.resolve(fileName), 'utf-8'));
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
    return content;
}

const write = function(fileName, content) {

    try {
        fs.writeFileSync(path.resolve(fileName), content, 'utf-8');
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
    return content;
}

const writeYaml = function(fileName, content) {
    write(fileName, jsyaml.safeDump(content));
}

const writeJson = function(fileName, content) {
    write(fileName, JSON.stringify(content, null, '    '));
}

const writeToFile = function(fileName, content) {
    if (fileName.match(/\.y[a]?ml$/)) {
        writeYaml(fileName, content)
    } else {
        writeJson(fileName, content)
    }
}

module.exports = {
    read: read,
    write: write,
    writeYaml: writeYaml,
    writeJson: writeJson,
    writeToFile: writeToFile
}
