var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.count = 0;
  return someInstance;
};

var queueMethods = {};

queueMethods.size = function() {
  return this.count;
};

queueMethods.enqueue = function(value) {
  this.count++;
  this[this.count] = value;
};

queueMethods.dequeue = function() {
  var temp = this[1];
  delete this[1];
  for (var key in this) {
    this[key - 1] = this[key];
  }
  if (this.count > 0) {
    this.count--;
  }
  return temp;
};

