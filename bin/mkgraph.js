#!/usr/bin/env node
/*jshint node: true */
'use strict';

const _ = require('lodash')
const repos = require('../tmp/data/out_ext.json')

const repoNames = _.map(repos, repo => repo.name)

const relations = _.map(repos, repo => ({
        name: repo.name,
        description: repo.description,
        tags: _.isArray(repo.package.keywords) ? repo.package.keywords : [],
        dependencies: _.isObject(repo.package.dependencies) ?
            _.intersection(repoNames, _.keys(repo.package.dependencies)) : []
    }))

const dependants = _.reduce(relations, (results, dependant) => _.union(results, dependant.dependencies), [])

const orphans = _.map(_.filter(relations, repo => ! _.includes(dependants, repo.name)), repo => repo.name)

const orphanNodes = _.reduce(orphans, (results, node) => _.union(results, [{ id: node, group: 1 }]), [])
const dependantNodes = _.reduce(dependants, (results, node) => _.union(results, [{ id: node, group: 2 }]), [])

const links = _.reduce(_.map(relations, relation => _.map(relation.dependencies, dep => ({
                        source: relation.name, target: dep, value: 10
                    }))), (results, rel) => _.union(results, rel), [])
const graph = {
    nodes: _.union(orphanNodes, dependantNodes),
    links: links
}

const printRelations = function() {
    _.map(relations, repo => {
            const dependencies = JSON.stringify(repo.dependencies, null, '')
            const tags = JSON.stringify(repo.tags, null, '')
            console.log(`${repo.name}\n  ${repo.description}\n  dependencies: ${dependencies}\n  tags: ${tags}`)

        })
}

//console.log(JSON.stringify(graph, null, '  '))
//console.log(JSON.stringify(relations, null, '  '))
//console.log(JSON.stringify(orphans, null, '  '))
//console.log(JSON.stringify(dependants, null, '  '))
printRelations()
