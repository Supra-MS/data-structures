var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this.contains(item)) {
    this._storage.push(item);
  }
};

setPrototype.contains = function(item) {
  return this._storage.includes(item);
};

setPrototype.remove = function(item) {
  var index = this._storage.indexOf(item);
  if (index !== -1) {
    this._storage.splice(index, 1);
  }
};




// var cards = Set();
// cards.add('string');
// cards.add('Peter');
// cards.add('Peter');
// cards._storage[-1] = 'Something';
// console.log(cards);
// console.log(cards.contains('Something'));
// console.log(cards.contains('Peter'));

/*
 * Complexity: What is the time complexity of the above functions?
  .add = linear
  .contains = linear
  .remove = linear (2N)
 */