class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  push(value) {
    this.storage[this.size()] = value;
  }

  pop() {
    var poppedItem = this.storage[this.size() - 1];
    delete this.storage[this.size() - 1];
    return poppedItem;
  }

  size() {
    var size = Object.keys(this.storage).length;
    return size;
  }

}