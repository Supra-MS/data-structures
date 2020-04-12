class Queue {
  constructor() {
    this.storage = {};
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.storage[this.rear++] = value;
  }

  dequeue() {
    if (this.rear > this.front) {
      var deletedValue = this.storage[this.front];
      delete this.storage[this.front++];
      return deletedValue;
    }
  }

  size() {
    return this.rear - this.front;
  }
}
