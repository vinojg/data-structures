

// Instantiate a new graph
var Graph = function() {
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this[node] = new Graph();
  this[node].edge = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this[node] !== undefined;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
// Go to all nodes inside the edge array of the node we're removing
// 
  for (var i = 0; i < this[node].edge.length; i++) {
    this.removeEdge(node, this[node].edge[i]);
  }
  delete this[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this[fromNode] === undefined || this[toNode] === undefined) {
    return false;
  } 
  var boo = this[fromNode].edge.indexOf(toNode);
  var hoo = this[toNode].edge.indexOf(fromNode);
  if (boo !== -1 && hoo !== -1) {
    return true;
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this[fromNode].edge.indexOf(parseInt(toNode)) === -1 && this[toNode].edge.indexOf(parseInt(fromNode)) === -1) {
    this[fromNode].edge.push(parseInt(toNode));
    this[toNode].edge.push(parseInt(fromNode));
  } 
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var boo = this[fromNode].edge.indexOf(toNode);
  var hoo = this[toNode].edge.indexOf(fromNode);
  if (boo !== -1 && hoo !== -1) {
    this[fromNode].edge.splice(boo, 1);
    this[toNode].edge.splice(hoo, 1);
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this) {
    if (typeof this[key] !== 'function') {
      cb(key);
    }
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
    addNode = constant
    contains = constant
    removeNode = linear
    hasEdge = linear
    addEdge = linear
    removeEdge = linear
    forEachNode = linear
 */


