

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.tupleCount = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (this._storage[index] === undefined) {
    this._storage[index] = [[k, v]];
  } else {
    for (var i = 0; i < this._storage[index].length; i++) {
      if (this._storage[index][i][0] === k) {
        var old = this._storage[index][i][1];
        this._storage[index][i][1] = v;
        return old;
      } 
    }
    this._storage[index].push([k, v]);
  }

  this.tupleCount++;
  this.reHash();
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (this._storage[index] !== undefined) {
    for (var i = 0; i < this._storage[index].length; i++) {
      if (this._storage[index][i][0] === k) {
        return this._storage[index][i][1];
      }
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  for (var i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][i][0] === k) {
      this._storage[index].splice(i, 1);
    }
  }

  this.tupleCount--;
  this.smallReHash();
};

HashTable.prototype.smallReHash = function() {
  var arr = [];

  if ((this.tupleCount / this._limit) < 0.25) {
    for (var i = 0; i < this._limit; i++) {
      if (typeof this._storage[i] !== 'undefined') {
        for (var j = 0; j < this._storage[i].length; j++) {
          arr.push(this._storage[i][j]);
        }
      }
    }

    this._limit = Math.floor(this._limit / 2);
    this.tupleCount = 0;
    this._storage = LimitedArray(this._limit);
    for (var k = 0; k < arr.length; k++) {
      this.insert(arr[k][0], arr[k][1]);
    }
  }
};

HashTable.prototype.reHash = function() {
  var arr = [];

  if ((this.tupleCount / this._limit) > 0.75) {
    for (var i = 0; i < this._limit; i++) {
      if (typeof this._storage[i] !== 'undefined') {
        for (var j = 0; j < this._storage[i].length; j++) {
          arr.push(this._storage[i][j]);
        }
      }
    }

    this._limit *= 2;
    this.tupleCount = 0;
    this._storage = LimitedArray(this._limit);
    for (var k = 0; k < arr.length; k++) {
      this.insert(arr[k][0], arr[k][1]);
    }
  }
};


// HashTable.prototype.reHash = function() {
//   // Count amount of tuples in hashTable
//   // Compare # of tuples to length of array
//   // if tuple # > 75% of array.length
//   //   double the length of array // resizing(2)
//   // if tuple # < 25% of array.length
//   //   half the length of array // resizing (.5)
//   //
//   // resizing function(value)
//   // Grab all tuples
//   // var arr = [all tuples]
//   // this._limit *= value;
//   // this._storage = LimitedArray(this._limit);
//   // this._insert(everything in arr)
// };


/*
 * Complexity: What is the time complexity of the above functions?
    insert = constant
    retrieve = linear/constant
    remove = linear/constant
 */

