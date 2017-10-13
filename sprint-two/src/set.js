var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage.push(item);
  
};

setPrototype.contains = function(item) {
  if (this._storage.indexOf(item) > -1) {
    return true;
  } else {
    return false;
  }
};

setPrototype.remove = function(item) {
  var temp = this._storage.indexOf(item);
  if (temp > -1) {
    this._storage.splice(temp, 1);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
    add = constant
    contains = linear
    remove = linear
 */
