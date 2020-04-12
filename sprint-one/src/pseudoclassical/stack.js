var Stack = function() {
  this.storage = {};
};

Stack.prototype.push = function(value) {
  this.storage[this.size()] = value;
};

Stack.prototype.pop = function() {
  var poppedItem = this.storage[this.size() - 1];
  delete this.storage[this.size() - 1];
  return poppedItem;
};

Stack.prototype.size = function() {
  var size = Object.keys(this.storage).length;
  return size;
};

