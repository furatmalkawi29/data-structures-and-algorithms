let LinkedList = require('../linked-list/linked-list');

class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

  hash(key) {
    let hash = 0;
    key = typeof key ==='string'?key:key.toString();

    hash = key.split('').reduce((result, n) => {
      return result + n.charCodeAt(0);
    }, 0) * 599 % this.size;

    return hash;//number that will be used as an index
  }

  set(key, value) {
    //claculated the hash number
    let hash = this.hash(key);

    if (!this.table[hash]) {
      this.table[hash] = new LinkedList();
    }
    let keyValuePair = { [key]: value };
    this.table[hash].add(keyValuePair);
  }

  get (key){

    key = typeof key ==='string'?key:key.toString();

    let hash= this.hash(key);
    if (this.contains(key)){
      let listValues = this.table[hash].values();
      console.log(listValues);
      for (let obj of listValues){
        let found = obj[key]? obj[key]:null;
        if(found)
          return found;
      }
    }
    return null;
  }


  contains(key) {
    key = typeof key ==='string'?key:key.toString();
    let hash = this.hash(key);

    return this.table[hash]?true:false;
  }
}

module.exports =HashTable;
