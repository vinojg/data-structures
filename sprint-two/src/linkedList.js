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
      this.tail.previous = this.head;
    } else {
      this.tail.next = current;
      current.previous = this.tail;
      this.tail = current;
    }
  };

  list.addToHead = function(value) {
    var current = new Node(value);
    if (this.head === null) {
      this.head = current;
      this.tail = current;
    } else if (this.tail === this.head) {
      this.head = current;
      this.head.next = this.tail;
      this.tail.previous = this.head;
    } else {
      this.head.previous = current;
      current.next = this.head;
      this.head = current;
    }
  };

  list.removeHead = function() {
    var temp = this.head.value;
    if (this.head !== this.tail) {
      this.head.next.previous = null;
    }
    this.head = this.head.next;
    return temp;
  };

  list.removeTail = function() {
    var temp = this.tail.value;
    if (this.head !== this.tail) {
      this.tail.previous.next = null;
    }
    this.tail = this.tail.previous;
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
    'next': null,
    'previous': null
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