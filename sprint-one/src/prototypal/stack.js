var Stack = function() {
  // To create a prototypal chain
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  return someInstance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.size()] = value;
  },
  pop: function() {
    var poppedItem = this.storage[this.size() - 1];
    delete this.storage[this.size() - 1];
    return poppedItem;
  },
  size: function() {
    var size = Object.keys(this.storage).length;
    return size;
  }
};


