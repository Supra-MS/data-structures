var LinkedList = function () {
  var list = {};
  list.head = null;
  list.tail = null;

  // Time complexity: constant - O(1)
  list.addToTail = function (value) {
    var newNode = Node(value);

    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else if (list.tail === list.head) {
      list.head.next = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  // Time complexity: constant - O(1)
  list.removeHead = function () {
    var previousHead = list.head;
    list.head = list.head.next;
    return previousHead.value;
  };

  // Time complexity: constant - O(n)
  list.contains = function (target) {
    var currentNode = list.head;

    while (currentNode) {
      if (target === currentNode.value) {
        return true;
      } else {
        currentNode = currentNode.next;
      }
    }

    return false;
  };

  return list;
};

var Node = function (value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
* Complexity: What is the time complexity of the above functions?
*/