var Queue = function() {
  this.storage = {};
  this.front = 0;
  this.rear = 0;
};

Queue.prototype = {
  constructor: Queue,
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


