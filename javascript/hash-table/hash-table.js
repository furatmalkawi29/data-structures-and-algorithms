

//>>>>>>>> Begin Linked List >>>>>>>>>>>>>>>>>>>>>
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  add(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

  values() {
    let values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }
}
//>>>>>>>> End Linked List >>>>>>>>>>>>>>>>>>>>>>>>
//>>>>>>>> Begin Hash Table >>>>>>>>>>>>>>>>>>>>>>>

module.exports = class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

  hash(key) {
    let hash = 0;

    hash = key.split('').reduce((result, n) => {
      return result + n.charCodeAt(0);
    }, 0) * 599 % this.size;

    return hash;//number that will be used as an index
  }

  set(key, value) {
    //claculated the hash number
    let hash = this.hash(key);
    //check if the cell in array does not have value
    //then we need to initiate with an empty linked list.
    if (!this.table[hash]) {
      this.table[hash] = new LinkedList();
    }
    // create new key value pair
    let keyValuePair = { [key]: value };
    // save the key value into linked list
    this.table[hash].add(keyValuePair);
  }

  get(key) {
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
    let hash = this.hash(key);

    return this.table[hash]?true:false;
  }
};

//>>>>>>>> End Hash Table >>>>>>>>>>>>>>>>>>>>>>>>>
