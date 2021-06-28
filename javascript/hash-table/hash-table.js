let LinkedList = require('../linked-list/linked-list');

class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

  hash(key) {
    let hash = 0;
    //if hash wasnt string
    key = typeof key ==='string'?key:key.toString();

    hash = key.split('').reduce((result, n) => {
      return result + n.charCodeAt(0);
    }, 0) * 599 % this.size;

    return hash;//number that will be used as an index
  }

  set(key, value) {
    //claculated the hash number
    let hash = this.hash(key);

    //check if key was string
    key = typeof key ==='string'?key:key.toString();

    // save the key value into linked list if key doesnt
    //already exist
    if (!this.contains(key)){
      //check if the cell in array does not have value
      //then we need to initiate with an empty linked list.
      if (!this.table[hash]) {
        this.table[hash] = new LinkedList();
      }
      // create new key value pair
      let keyValuePair = { [key]: value };

      this.table[hash].add(keyValuePair);
    }
  }

  get(key) {
    key = typeof key ==='string'?key:key.toString();

    let hash = this.hash(key);
    if(this.contains(key)){ //check if there's no values at index
      let bucketValues = this.table[hash].values();
      let value = bucketValues.filter(item => {
        for (const property in item) {
          return property ===key;
        }
      });
      return value[0]?value[0][key]:'Not Found';
    }
    return 'Not Found';
  }


  contains(key) {
    key = typeof key ==='string'?key:key.toString();
    let hash = this.hash(key);

    return this.table[hash]?true:false;
  }
}

module.exports =HashTable;
