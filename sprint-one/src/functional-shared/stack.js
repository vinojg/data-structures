var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.count = 0;
  extend(obj, stackMethods);
  return obj;
};

var extend = function(obj, method) {
  for (var key in method) {
    obj[key] = method[key];
  }

};

var stackMethods = {};


stackMethods.size = function() {
  return this.count;
};


stackMethods.push = function(value) {
  this.count++;
  this[this.count] = value;
  return this[this.count];
};

stackMethods.pop = function() {
  var temp = this[this.count];
  delete this[this.count];
  for (var key in this) {
    this[key - 1] = this[key];
  }
  if (this.count > 0) {
    this.count--;
  }
  return temp;
};