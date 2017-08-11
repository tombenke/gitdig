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

/**
 * Collect and aggregate graph data on repos, dependencies, etc. and prints out the results.
 *
 * @param  {Object} config   Configuration parameters
 *
 * @return {Object} The graph object, which has two properties: { nodes, links }.
 */
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

/**
  * Build a lookup dictionary to list items, using the `idField` value of list items as keys
  *
  * @param {List}   list    The list of items to make the lookup dictionary for
  * @param {String} idField The field name to use as key in the lookup dictionary.
  *                         This value has to be unique among the list items.
  *
  * @return {Object}  The dictionary object
  */
const getLookup = (list, idField) => _.reduce(list, (lookup, item, index) => (lookup[item[idField]] = list[index], lookup), {})

/**
  * Find target nodes of links, which origins from the `sourceId` node
  *
  * @param {List}     links     The list of link objects: { source, target }
  * @param {sourceId} String    The unique id of the source node
  *
  * @return {List}  The list of target node ids
  */
const findTargets = (links, sourceId) => _.reduce(links, (results, link) => {
        if (link.source === sourceId) {
            results.push(link.target)
        }
        return results
    }, [])

/**
  * Build a tree representation of the repos, which can be reached from the root nodes.
  *
  * @param {List}     repos     The list of repository descriptor nodes.
  * @param, {Boolean} externals If true, then external dependencies must be contained by the tree,
  *                             otherwise returns only with internal nodes and links.
  *
  * @return {Object}  A structured object, that is the root of the tree.
  *                   The object holds the whole tree in the form of branches of sub objects,
  *                   listed under the `children` property at each level.
  */
const getTree = (repos, externals) => {
    const repoLookup = getLookup(repos, "name")
    const graph = getGraph(repos, externals)
//    const nodes = graph.nodes
    const links = graph.links

    const linkSources = _.uniq(_.map(links, (link) => link.source))
    const linkTargets = _.uniq(_.map(links, (link) => link.target))
    const roots = _.difference(linkSources, linkTargets)

    const reposWithLinkSource = _.reduce(linkSources, (results, linkSource) => (results[linkSource] = { targets: findTargets(links, linkSource) }, results), {})

//    console.log(JSON.stringify(repoLookup, null, '  '))
//    console.log(JSON.stringify(reposWithLinkSource, null, '  '))

    const makeTreeNode = (nodeId) => {
        let owner = ""
        if (_.has(repoLookup, nodeId)) {
            owner = repoLookup[nodeId].owner
        }
        let result = {
            owner: owner,
            name: nodeId,
            size: 10
        }

        if (_.has(reposWithLinkSource, nodeId)) {
            result.children = makeChildrenNodes(reposWithLinkSource[nodeId].targets)
        }
        return result
    }

    const makeChildrenNodes = (targetIds) => {
        return _.map(targetIds, (targetId) => makeTreeNode(targetId))
    }

    return {
        name: "/",
        children: makeChildrenNodes(roots)
    }
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

module.exports = {
    getGraph: getGraph,
    getTree: getTree,
    getNodes: getNodes
}
