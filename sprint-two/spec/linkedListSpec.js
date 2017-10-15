describe('linkedList', function() {
  var linkedList;

  beforeEach(function() {
    linkedList = LinkedList();
  });

  it('should have a head and tail', function() {
    expect(linkedList).to.have.property('head');
    expect(linkedList).to.have.property('tail');
  });

  it('should have methods named "addToTail", "removeHead", and "contains"', function() {
    expect(linkedList.addToTail).to.be.a('function');
    expect(linkedList.removeHead).to.be.a('function');
    expect(linkedList.contains).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added', function() {
    linkedList.addToTail(4);
    expect(linkedList.tail.value).to.equal(4);
    linkedList.addToTail(5);
    expect(linkedList.tail.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.head.value).to.equal(4);
    linkedList.removeHead();
    expect(linkedList.head.value).to.equal(5);
  });

  it('should return the value of the former head when removeHead is called', function() {
    linkedList.addToTail(4);
    expect(linkedList.removeHead()).to.equal(4);
  });

  it('should contain a value that was added', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.contains(4)).to.equal(true);
    expect(linkedList.contains(5)).to.equal(true);
    expect(linkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.removeHead();
    expect(linkedList.contains(4)).to.equal(false);
  });
  
  it('should reference the same node when checking head and tail', function() {
    linkedList.addToTail(5);
    expect(linkedList.tail.value).to.equal(5);
    expect(linkedList.head.value).to.equal(5);
  });
  
  // add more tests here to test the functionality of linkedList
});


describe('doubly-linkedList', function() {
  var linkedList;

  beforeEach(function() {
    linkedList = LinkedList();
  });

  it('should add a previous property to the tail', function () {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.tail.previous.value).to.equal(4);
  });

  it('should designate a new head when new nodes are added and a head already exists', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.addToHead(3);
    linkedList.addToHead(2);
    expect(linkedList.head.value).to.equal(2);
    expect(linkedList.head.next.value).to.equal(3);
    expect(linkedList.head.previous).to.equal(null);
  });

  it('should designate a new head when there\'s only one node', function() {
    linkedList.addToTail(4);
    linkedList.addToHead(3);
    expect(linkedList.head.value).to.equal(3);
    expect(linkedList.head.next.value).to.equal(4);
    expect(linkedList.head.previous).to.equal(null);
  });

  it('should remove the tail from the list when removeTail is called', function() {
    linkedList.addToHead(5);
    linkedList.addToHead(4);
    expect(linkedList.tail.value).to.equal(5);
    linkedList.removeTail();
    expect(linkedList.tail.value).to.equal(4);
  });
});
