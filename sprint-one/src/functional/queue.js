var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var front = 0;
  var rear = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[rear++] = value;
  };

  someInstance.dequeue = function() {
    if (rear > front) {
      var value = storage[front];
      delete storage[front++];
      return value;
    }
  };

  someInstance.size = function() {
    return rear - front;
  };

  return someInstance;
};

/*
  int enqueue (item) {
  rear = (rear + 1) mod n;
    if (rear === front) { // overflow
      log("Q is full");
      if (rear == 0) {
        rear = n - 1; // pointing and setting back to earlier index
      } else {
        rear = rear - 1;
        return;
      }
    } else { // not overflow
      q [rear] = item;
      return;
    }
  }
  !! Important
  Overflow condition: (rear + 1 ) mod n === front
  Underflow condition: rear  === front

  int Dequeue () {
    if (rear === front) { // no elements
      log("Q is Empty");
      return  - 1;
    } else { // if there is elements
      front = (front + 1)mod n;
      item = q[front];
      return true;
    }
  }
  */


