var myExtend = function(toObject, fromObject) {
  for (var key in fromObject) {
    toObject[key] = fromObject[key];
  }
};

var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  myExtend(newTree, treeMethods);

  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }

  //this iterates through the array to see if any child returns true
  return this.children.some(function(child) {
    return child.contains(target);
  });
};

var oak = Tree('oak');
oak.addChild('seed');
console.log(oak);
/*
 * Complexity: What is the time complexity of the above functions?
  addChild = constant
  contains = linear
 */