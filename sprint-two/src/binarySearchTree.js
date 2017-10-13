var BinarySearchTree = function(value) {
  var someInstance = Object.create(funcMethods);

  someInstance.value = value;
  someInstance.left = null;
  someInstance.right = null;
  
  return someInstance;
};

var funcMethods = {};

funcMethods.insert = function(value) {
  var temp = new BinarySearchTree(value);
 
  var searchTree = function(tree) {
    if (value < tree.value) {
      if (tree.left === null) {
        tree.left = temp;
      } else {
        searchTree(tree.left);
      }
    } else {
      if (tree.right === null) {
        tree.right = temp;
      } else {
        searchTree(tree.right);
      }
    }
  };

  searchTree(this);
};

funcMethods.contains = function (value) {
  var temp = false;

  var searchTree = function(tree) {
    if (tree.value === value) {
      temp = true;
    } else if (value < tree.value && tree.left !== null) {
      searchTree(tree.left);
    } else if (value > tree.value && tree.right !== null) {
      searchTree(tree.right);
    }
  };

  searchTree(this);
  return temp;
};


funcMethods.depthFirstLog = function(cb) {
  var searchTree = function (tree) {
    cb(tree.value);
    if (tree.left) {
      searchTree(tree.left);
    }
    if (tree.right) {
      searchTree(tree.right);
    }
  };

  return searchTree(this);
};
/*
 * Complexity: What is the time complexity of the above functions?
    *assuming full and balanced tree:
    insert = logarithmic 
    contains = logarithmic
    depthFirstLog = logarithmic
 */
