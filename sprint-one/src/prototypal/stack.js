var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.count = 0;
  
  return someInstance;
};

var stackMethods = {};

stackMethods.size = function() {
  return this.count; 
};

stackMethods.push = function(value) {
  this.count++;
  this[this.count] = value;
};

stackMethods.pop = function() {
  var temp = this[this.count];
  delete this[this.count];
  if (this.count > 0) {
    this.count--;
  }
  return temp;
};