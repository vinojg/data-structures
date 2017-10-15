var Tree = function(value) {
  var newTree = {};
  newTree.value = value || 'root';
  
  // your code here
  newTree.children = []; 
  newTree.parent = null;
  extend(newTree, treeMethods);
  return newTree;
};

var extend = function (object, method) {
  for (var key in method) {
    object[key] = method[key];
  }
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(new Tree(value));
  // this.children.forEach(function(each) {
  //   each.parent = this;
  //   //console.log(JSON.stringify(each.parent));
  // });
  if (this.children.length > 0) {
    for (var i = 0; i < this.children.length; i++) {
      this.children[i].parent = this;
      //console.log(JSON.stringify(this.children));
    }
  }
};

treeMethods.contains = function(target) {
  var boolean = false;
  
  if (this.value === target) {
    boolean = true;
  }
  var lookup = function(node) {
    node.forEach(function(each) {
      if (each.value === target) {
        boolean = true;
      } else if (each.children.length > 0) {
        lookup(each.children);
      }
    }); 
  };

  lookup(this.children);
  return boolean;
};

/*
 * Complexity: What is the time complexity of the above functions?
extend = linear
addChild = constant
contains = linear
lookup = linear
 */
