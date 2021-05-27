'use strict';

let Node = require('./node.js');


class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length=0;
  }
  //methods
  insert(data) {
    try {
      let node = new Node(data);
      if (!this.head) {
        this.head = node;
        this.tail = node;
        this.length++;
      }
      else {
        node.next = this.head;
        this.head = node;
        this.length++;
      }
    } catch (error) {
      console.log('error' + error);

    }

  }

  includes(value){
    if(this.head){
      let testNode = this.head;
      while (testNode.next){
        if(testNode.value === value) return true;
        testNode=testNode.next;
      }

      if(testNode.value === value) return true;
    } return false;
  }

  toString() {
    let list;
    if (this.head){
      list = `(head)-->`;
      let testNode = this.head;
      while (testNode){
        list = list + `[${testNode.value}]-->`;
        testNode=testNode.next;
      }
      list = list + ` Null`;
    } else { list = `(head)--> NULL`; }

    return list;
  }


}





module.exports = LinkedList;
