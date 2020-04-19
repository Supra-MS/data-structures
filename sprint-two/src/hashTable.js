var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, value) {
  var index = getIndexBelowMaxForKey(key, this._limit);

  if (this.retrieve(key) !== undefined) {
    var tuple = [this.retrieve(key), [key, value]];
    this._storage.set(index, tuple);
  } else {
    this._storage.set(index, value);
  }
};


HashTable.prototype.retrieve = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  var temp = this._storage.get(index);
  if (Array.isArray(temp)) {
    for (var i = 1; i < temp.length; i++) {
      if (temp[i][0] === key) {
        return temp[i][1];
      } else {
        return temp[0];
      }
    }
  } else {
    return temp;
  }

};

HashTable.prototype.remove = function(key) {
  this.insert(key, undefined);
};

// var ht = new HashTable();
// ht.insert('bob', 'marley');
// ht.insert('Bill', 'Nye');
// ht.insert('Tom', 'Hanks');



// [ ['cat', ['wolf','dog']], undefined, 'blah blah']

/*
 * Complexity: What is the time complexity of the above functions?
 insert: Best O(1); Worst O(n)
 retrieve: Best O(1); Worst O(n)
 remove: Best O(1); Worst O(n)
 */