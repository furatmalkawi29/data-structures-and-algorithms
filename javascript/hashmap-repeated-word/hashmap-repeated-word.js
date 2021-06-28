
let HashTable = require('../hashmap-repeated-word/hashmap-repeated-word.js');

function hashmapRepeatedWord (paragraph){
  //remove punctuation mark from "summer,"
  let paraPunc = paragraph.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,'').replace(/\s{2,}/g,' ');


  //convert to lowercase "It"
  let paraLower = paraPunc.toLowerCase();

  let words = paraLower.split(' ');
  let myhash = new HashTable(1024);

  let wordArr = words.filter((word,index) => {
    if(!myhash.contains(word))
      myhash.set(word,index);
    else return myhash.contains(word);
  });

  return wordArr[0];
}




/////////////////////////////////////////
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
