let LinkedList = require('../linked-list/linked-list');


class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

  hash(key) {// the is a string
    let hash = 0;
    hash = key.split('').reduce((result, n) => {
      return result + n.charCodeAt(0);
    }, 0) * 599 % this.size;
    return hash;
  }

  set(key, value) {
    let hash = this.hash(key);
    if (!this.table[hash]) {
      this.table[hash] = new LinkedList();
    }
    let keyValuePair = { [key]: value };
    this.table[hash].add(keyValuePair);
  }

  get(key) {
  }

  contains(key) {
    return true;
  }
}


module.exports =HashTable;
