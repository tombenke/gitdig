const _ = require('lodash')

const checkNameConflict = (nodes, repoId) => {
    if (_.has(nodes, repoId)) {
        console.log(`ERROR: repository name "${repoId}" conflict.`, nodes[repoId])
        process.exit(1)
    }
}

const addRepoNode = (nodes, repo) => {
    const repoVersion = _.has(repo, 'package') && _.has(repo.package, 'version') ? repo.package.version : '*'
    const repoId = `${repo.name}`

    checkNameConflict(nodes, repoId)

    nodes[repoId] = {
        id: repoId,
        owner: repo.owner,
        name: repo.name,
        version: repoVersion,
        group: 1,
        type: 'REPOSITORY'
    }
    return nodes
}

const addComponentNodes = (nodes, components) => {
    const reduceComponentNodes = (components, nodes) => {
        return _.reduce(components, (nodes, component, key) => {
            if (_.isObject(component)) {
                checkNameConflict(nodes, key)
                nodes[key] = {
                    id: key,
                    owner: '',
                    name: key,
                    group: 2,
                    type: 'VIRTUAL'
                }
                if (_.has(component, "components")) {
                    return reduceComponentNodes(component.components, nodes)
                }
            } else {
                return nodes
            }
        }, nodes)
    }

    return reduceComponentNodes(components, nodes)
}

const addDependencyNodes = (nodes, dependencies) => {
    return _.reduce(dependencies, (nodes, dependency, key) => {
            if (! _.has(nodes, key)) {
                nodes[key] = {
                    id: key,
                    owner: '',
                    name: key,
                    group: 3,
                    type: 'DEPENDENCY'
                }
            }
            return nodes
        }, nodes)
}

const collectNodes = (repos) => {
    // Add repositories to the node list
    let results = _.reduce(repos, (nodes, repo) => addRepoNode(nodes, repo), {})

    results = _.reduce(repos, (nodes, repo) => {
            // Add virtual nodes from .gitdig info, if there is any
            if( _.has(repo, 'package') && _.has(repo.package, 'gitdig') && _.has(repo.package.gitdig, 'components')) {
                nodes = addComponentNodes(nodes, repo.package.gitdig.components)
            }
            return nodes
        }, results)

    results = _.reduce(repos, (nodes, repo) => {

            if (_.has(repo, 'dependencies')) {
                nodes = addDependencyNodes(nodes, repo.dependencies)
            }
            return nodes
        }, results)

    return results
}

const addComponentLinks = (links, components, repoId) => {
    const reduceComponentLinks = (components, links, sourceId) => {
        return _.reduce(components, (links, component, key) => {
            if (_.isObject(component)) {
                links.push({
                    source: sourceId,
                    target: key,
                    value: 10,
                    type: 'COMPONENT'
                })
                if (_.has(component, "components")) {
                    return reduceComponentLinks(component.components, links, key)
                }
            } else {
                links.push({
                    source: sourceId,
                    target: key,
                    value: 10,
                    type: 'COMPONENT'
                })
                return links
            }
        }, links)
    }

    return reduceComponentLinks(components, links, repoId)
}

const collectLinks = (repos) => {
    let results = []

    results = _.reduce(repos, (links, repo) => {
            // Add virtual nodes from .gitdig info, if there is any
            if( _.has(repo, 'package') && _.has(repo.package, 'gitdig') && _.has(repo.package.gitdig, 'components')) {
                links = addComponentLinks(links, repo.package.gitdig.components, repo.name)
            }
            return links
        }, results)

    results = _.reduce(repos, (links, repo) => {

            if (_.has(repo, 'dependencies')) {
                return _.reduce(_.map(_.keys(repo.dependencies), (dependency) => ({
                        source: repo.name,
                        target: dependency,
                        value: 10,
                        type: "REQUIRED"
                    })), (links, link) => {
                        links.push(link)
                        return links
                    }, links)
            }
            return links
        }, results)

    return results
}

const getGraph = (repos, externals) => {
    const nodes = collectNodes(repos)
    const links = collectLinks(repos)
    
    const isInternalNode = (nodes, id) => (_.has(nodes, id) && nodes[id].type !== 'DEPENDENCY')
    let graph = {
        nodes: _.values(nodes),
        links: links
    }

    if (! externals) {
        // Remove external nodes and links
        graph = {
            nodes: _.values(_.filter(nodes, (node) => isInternalNode(nodes, node.id))),
            links: _.filter(links, (link) => (isInternalNode(nodes, link.source) && isInternalNode(nodes, link.target)))
        }
    }

    return graph
}

const getNodes = (repos, externals) => {
    const graph = getGraph(repos, externals)
    const nodes = graph.nodes
    const links = graph.links

    const allNodes = _.map(nodes, (node) => node.id)
    const linkSources = _.uniq(_.map(links, (link) => link.source))
    const linkTargets = _.uniq(_.map(links, (link) => link.target))
    const linkInters = _.intersection(linkSources, linkTargets)
    const connected = _.union(linkSources, linkTargets)
    const orphans = _.difference(allNodes, connected)
    const roots = _.difference(linkSources, linkTargets)

    return {
        allNodes: allNodes,
        linkSources: linkSources,
        linkTargets: linkTargets,
        linkInters: linkInters,
        connected: connected,
        orphans: orphans,
        roots: roots
    }
}

/**
 * Collect and aggregate graph data on repos, dependenciest, etc. and prints out the results
 *
 * @param  {Object} config   Configuration parameters
 */
module.exports = {
    getGraph: getGraph,
    getNodes: getNodes
}
