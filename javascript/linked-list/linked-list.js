'use strict';

let Node = require('./node.js');


class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(data) {
    try {
      let node = new Node(data);
      if (!this.head) {
        this.head = node;
      }
      else {
        node.next = this.head;
        this.head = node;
      }
    } catch (error) {
      console.log('error' + error);

    }

  }

  includes(value){
    if(this.head){
      let testNode = this.head;
      if(testNode.value === value) return true;
      if (testNode.next){
        testNode= testNode.next;
        if(testNode === value) return true;
      }
    } return false;
  }

  toString() {
    let temp = '';
    if (!this.head) temp = 'Empty Linked List ';
    else {
      let stringed = this.head;
      temp = `{ ${stringed.value} } -> `;
      while (stringed.next) {
        stringed = stringed.next;
        temp += `{ ${stringed.value} } -> `;
      }
      temp += `NULL`;
    }
    return temp;
  }

}

module.exports = LinkedList;
