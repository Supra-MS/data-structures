var Queue = function() {
  var someInstance = {};
  someInstance.storage = {};
  someInstance.front = 0;
  someInstance.rear = 0;
  extend(someInstance, queueMethods);
  return someInstance;
};

var extend = function(toObj, fromObj) {
  for (var key in fromObj) {
    toObj[key] = fromObj[key];
  }
}

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.rear++] = value;
  },
  dequeue: function() {
    if (this.rear > this.front) {
      var deletedValue = this.storage[this.front];
      delete this.storage[this.front++];
      return deletedValue;
    }
  },
  size: function() {
    return this.rear - this.front;
  }
};


