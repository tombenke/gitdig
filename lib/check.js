const repos = require('./repos')
const _ = require('lodash')
const chalk = require('chalk')

const checkNames = (repo, results) => {
    if (_.has(repo, "package")) {
        if (repo.name != repo.package.name) {
            results.warnings.push(`Name mismatch repo/name: '${repo.name}' vs. package.json/name: '${repo.package.name}'!`)
        }
    }
    return results
}

const checkDescriptions = (repo, results) => {
    if (_.has(repo, "package")) {
        if (repo.description != repo.package.description) {
            results.warnings.push(`Description mismatch repo/description: '${repo.description}' vs. package.json/description: '${repo.package.description}'!`)
        }
    }
    return results
}

const checkIfReadmeExists = (repo, results) => {
    if (! (_.has(repo, "hasReadme") && repo.hasReadme)) {
        results.warnings.push("No README found!")
    }
    return results
}

const checkIfPackageJsonExists = (repo, results) => {
    if (! _.has(repo, "package")) {
        results.warnings.push("No package.json info found!")
    }
    return results
}

const checkMissingFieldsInPackageJson = (repo, results) => {
    if (_.has(repo, "package")) {
        const fieldsToCheck = ["name", "version", "description", "author", "contributors", "keywords", "repository"]
        _.map(fieldsToCheck, (fieldName) => {
                if (! _.has(repo.package, fieldName)) {
                    results.warnings.push(`Missing "${fieldName}" field from package.json!`)
                }
            })
    }
    return results
}

const checkEmptyFieldsInPackageJson = (repo, results) => {
    if (_.has(repo, "package")) {
        const fieldsToCheck = ["name", "version", "description", "author"]
        _.map(fieldsToCheck, (fieldName) => {
                if (_.has(repo.package, fieldName) && repo.package[fieldName] === "") {
                    results.warnings.push(`Empty "${fieldName}" field in package.json!`)
                }
            })
    }
    return results
}

const checkPrePushCommandsInPackageJson = (repo, results) => {
    if (_.has(repo, "package")) {
        // Check if pre-push field exists, and the minimum commands are configured
        if (_.has(repo.package, "pre-push")) {
            const commandsToCheck = ["test", "lint"]
            _.map(commandsToCheck, (commandName) => {
                    if (! _.includes(repo.package["pre-push"], commandName)) {
                        results.warnings.push(`Missing "pre-push/${commandName}" command from package.json!`)
                    }
                })
        } else {
            results.errors.push(`Missing "pre-push" field from package.json!`)
        }

        // Check if pre-push module is configured as a dependency
        if (_.has(repo.package, "devDependencies") && _.has(repo.package.devDependencies, "pre-push")) {
            // Everything is fine
        } else {
            if (_.has(repo.package, "dependencies") && _.has(repo.package.dependencies, "pre-push")) {
                results.warnings.push(`The "pre-push" package should be under "devDependencies", instead of "dependencies" in package.json!`)
            } else {
                results.errors.push(`Missing "pre-push" package from "devDependencies" in package.json!`)
            }
        }
    }
    return results
}

const checkScriptsInPackageJson = (repo, results) => {
    if (_.has(repo, "package")) {
        // Check if scripts field exists, and the minimum commands are configured
        if (_.has(repo.package, "scripts")) {
            const scriptsToCheck = ["test", "lint", "coverage"]
            _.map(scriptsToCheck, (scriptName) => {
                    if (! _.has(repo.package.scripts, scriptName)) {
                        results.errors.push(`Missing "scripts/${scriptName}" script from package.json!`)
                    }
                })
        } else {
            results.errors.push(`Missing "scripts" field from package.json!`)
        }

        // Check if pre-push module is configured as a dependency
        if (_.has(repo.package, "devDependencies") && _.has(repo.package.devDependencies, "pre-push")) {
            // Everything is fine
        } else {
            if (_.has(repo.package, "dependencies") && _.has(repo.package.dependencies, "pre-push")) {
                results.warnings.push(`The "pre-push" package should be under "devDependencies", instead of "dependencies" in package.json!`)
            } else {
                results.errors.push(`Missing "pre-push" package from "devDependencies" in package.json!`)
            }
        }
    }
    return results
}

const checks = [
    checkNames,
    checkDescriptions,
    checkIfReadmeExists,
    checkIfPackageJsonExists,
    checkMissingFieldsInPackageJson,
    checkEmptyFieldsInPackageJson,
    checkPrePushCommandsInPackageJson,
    checkScriptsInPackageJson
]

const execChecks = (repo, results, config) => _.reduce(checks, (results, checkFun) => checkFun(repo, results), results)

const checkRepo = (config) => {
    return (repo) => {
        let results = {
            id: `${repo.owner}/${repo.name}`,
            warnings: [],
            errors: []
        }
        return execChecks(repo, results, config)
    }
}

const error = chalk.bold.red
const warning = chalk.keyword('orange')

const printCheckResult = (result) => {
    console.log(chalk.underline(`\n${result.id}`))
    _.map(result.errors, (message) => { console.log( '  ' + error('error    ') + message) })
    _.map(result.warnings, (message) => { console.log( '  ' + warning('warning  ') + message) })
}

const printCheckResults = (checkResults) => {
    const problemsSummary = _.reduce(checkResults, (sums, checkResult) => {
            return {
                numWarnings: sums.numWarnings + checkResult.warnings.length,
                numErrors: sums.numErrors + checkResult.errors.length
            }
        }, { numWarnings: 0, numErrors: 0 })
    const numProblems = problemsSummary.numWarnings + problemsSummary.numErrors
    const summaryMessage = `\n${numProblems} problems (${problemsSummary.numErrors} errors, ${problemsSummary.numWarnings} warnings)\n`

    _.map(checkResults, printCheckResult)
    console.log(error(summaryMessage))
    process.exitCode = numProblems > 0 ? 1 : 0
}

/**
 * Executes the `check` command, that scans through the whole list of repositories,
 * Run the checkRepo function against each repository, then print the results of checking.
 *
 * @param  {Object} config   Configuration parameters
 */
exports.execute = function(config) {
    repos.getRepos(config, (err, repos) => {
            if (err) {
                console.log('ERROR: ', err)
            } else {
                printCheckResults(_.map(repos, checkRepo(config)))
            }
        })
}
