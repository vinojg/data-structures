var LinkedList = function() {
  var list = {
    'head': null,
    'tail': null
  };

  // list.head = null;
  // list.tail = null;

  list.addToTail = function(value) {
    var current = new Node(value);
    if (this.tail === null) {
      this.tail = current;
    } else {
      var currentTail = this.tail;
      this.tail = current;
      this.head = currentTail;
      this.head.next = current;
    }
    
  };

  list.removeHead = function() {
    var temp = this.head.value;
    this.head = this.head.next;
    return this.head;
  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {
    'value': value,
    'next': null
  };

  // node.value = value;
  // node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
