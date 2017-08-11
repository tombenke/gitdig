var fs = require('fs');
var path = require('path');
var jsyaml = require( 'js-yaml' );

/**
  * Read contend from `fileName` file.
  * The file must be either YAML or JSON format.
  *
  * @param {String} fileName        The name of the file to read
  * @param {Boolean} exitOnError    If true then exit with process errorCode: 1 in case of error
  *                                 otherwise does nothing
  */
const read = function(fileName, exitOnError) {
	var content = null;

    try {
        content = jsyaml.load(fs.readFileSync(path.resolve(fileName), 'utf-8'));
    } catch (err) {
        if (exitOnError) {
            console.log(err)
            process.exit(1)
        }
    }
    return content
}

/**
  * Write content into the `fileName` file.
  *
  * @param {String} fileName        The name of the file to write.
  * @param {String|Buffer} content  The content to write into the file.
  */
const write = function(fileName, content) {

    try {
        fs.writeFileSync(path.resolve(fileName), content, 'utf-8')
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
    return content
}

/**
  * Write object in YAML format into the `fileName` file.
  *
  * @param {String} fileName        The name of the file to write.
  * @param {Object} content         The object to write into the file.
  */
const writeYaml = function(fileName, content) {
    write(fileName, jsyaml.safeDump(content))
}

/**
  * Write object in JSON format into the `fileName` file.
  *
  * @param {String} fileName        The name of the file to write.
  * @param {Object} content         The object to write into the file.
  */
const writeJson = function(fileName, content) {
    write(fileName, JSON.stringify(content, null, '    '))
}

/**
  * Write object into the `fileName` file. The file can be either YAML or JSON format.
  * The function decides which format the content should be written, based on the file extension.
  *
  * @param {String} fileName        The name of the file to write.
  * @param {Object} content         The object to write into the file.
  */
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
