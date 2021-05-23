'use strict';

class LinkedList {
  constructor() {
    this.head = null;
  }

  add (value) {
    let node = new Node(value);
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

  insert(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }


  includes(value) {
    let cursor = this.head;
    while (!cursor) {
      if (cursor.data === value) {
        return true;
      }
      cursor = cursor.next;
    }
    return false;
  }

}

module.exports = LinkedList;
