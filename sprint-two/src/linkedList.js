var LinkedList = function() {
  var list = {
    'head': null,
    'tail': null
  };

  list.addToTail = function(value) {
    var current = new Node(value);
    if (this.tail === null) {
      this.tail = current;
      this.head = current;
    } else if (this.tail === this.head) {
      this.tail = current;
      this.head.next = this.tail;
    } else {
      this.tail.next = current;
      this.tail = current;
    }
  };

  list.removeHead = function() {
    var temp = this.head.value;
    this.head = this.head.next;
    return temp;
  };

  list.contains = function(target) {
    var boolean = false;

    var checkNode = function(node) {
      if (node.value === target) {
        boolean = true;
      } else if (node.next === null) {
        boolean = false;
      } else {
        checkNode(node.next);
      }
    };

    checkNode(this.head);
    return boolean;
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
    addToTail = constant
    removeHead = constant
    contains = linear
    checkNode = linear
 */