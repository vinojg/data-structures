var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  let count = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    count++;
    someInstance[count] = value;
  };

  someInstance.pop = function() {
    var temp = someInstance[count];
    delete someInstance[count];
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
