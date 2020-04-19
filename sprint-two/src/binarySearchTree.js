var BinarySearchTree = function(value) {
  var bstTree = Object.create(bstPrototype);
  bstTree.value = value;
  bstTree.left = null;
  bstTree.right = null;
  return bstTree;
};

var bstPrototype = {};

bstPrototype.insert = function(value) {
  var newNode = BinarySearchTree(value);
  if (value <= this.value) {
    //edge case of 0
    if (!this.left) {
      this.left = newNode;
    } else {
      this.left.insert(value);
    }
  } else if (value >= this.value) {
    if (!this.right) {
      this.right = newNode;
    } else {
      this.right.insert(value);
    }
  }
};

bstPrototype.contains = function(target) {
  if (this.value === target) {
    return true;
  } else if (target <= this.value) {
    return !this.left ? false : this.left.contains(target);
  } else if (target >= this.value) {
    return !this.right ? false : this.right.contains(target);
  }
};

bstPrototype.depthFirstLog = function(func) {
  func(this.value);
  if (this.left) {
    this.left.depthFirstLog(func);
  }
  if (this.right) {
    this.right.depthFirstLog(func);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
  insert: Log(N) --> you only need to run the check on 1/2 nodes per layer.
  contains: Log(N) --> you only run contains on 1/2 nodes recursively
  depthFirstLog: Linear
 */