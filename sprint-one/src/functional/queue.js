var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    count++;
    storage[count] = value;
  };

  someInstance.dequeue = function() {
    var temp = storage[1];
    for (var i = 2; i <= count; i++) {
      storage[i - 1] = storage[i];
    }
    if (count > 0) {
      count--;
    }
    return temp;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
