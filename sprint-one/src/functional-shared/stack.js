var Stack = function() {
  var someInstance = {};
  someInstance.storage = {};
  // One-time copy of methods
  extend(someInstance, stackMethods);
  return someInstance;
};

var extend = function(toObj, fromObj) {
  for (var key in fromObj) {
    toObj[key] = fromObj[key];
  }
};

var stackMethods = {
  push: function(value) {
    this.storage[this.size()] = value;
  },
  pop: function() {
    // Incoming size will be the length but index is 0, so we decrement to get that item
    var poppedItem = this.storage[this.size() - 1];
    delete this.storage[this.size() - 1];
    return poppedItem;
  },
  size: function() {
    var size = Object.keys(this.storage).length;
    return size;
  }
};


