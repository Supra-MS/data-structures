var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var size = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[++size] = value;
  };

  someInstance.pop = function() {
    if (size === 0) {
      return -1;
    }
    var poppedItem = storage[size];
    delete storage[size--];
    return poppedItem;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};

