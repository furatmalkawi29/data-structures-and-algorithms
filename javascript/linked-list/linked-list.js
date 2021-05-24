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

    append(value) {
    let node = new Node(value);
    try {
      if (!this.head) {// empty linked list
        this.head = node;
      } else {
        let lastNode = this.head;
        while (lastNode.next) {
          lastNode = lastNode.next;
        }
        lastNode.next = node;
      }
    }
    catch (error){
      console.error('An error occured: ', error);
    }
  }
  insertBefore(value, newVal) {
    let current = this.head;
    let previous;
    while ((current) && (current.value !== value)) {
      previous = current;
      current = current.next;
    }
    if (!current) {
      throw `The value ${value}  wasn't found.`;
    } else {
      const newNode = new Node(newVal);
      newNode.next = current;
      if (current === this.head) {
        this.head = newNode;
      } else {
        previous.next = newNode;
      }
    }
  }
  insertAfter(value, newVal) {
    let current = this.head;
    while ((current) && (current.value !== value)) {
      current = current.next;
    }
    if (!current) {
      throw `The value ${value}  wasn't found.`;
    } else {
      const newNode = new Node(newVal);
      newNode.next = current.next;
      current.next = newNode;
    }
  }


}

module.exports = LinkedList;
