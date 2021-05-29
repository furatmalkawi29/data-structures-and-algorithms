'use strict';

let Node = require('../linked-list/node');


class Queue {
  constructor() {
    this.front= null;
  }

  enqueue (value){
    let node = new Node(value);
    if (this.front){
      let cursor = this.front;
      while(cursor.next){
        cursor=cursor.next;
      }
      cursor.next=node;
    } else this.front = node;
  }

  dequeue(){
    let front;

    if (!this.front)
      return 'ERROR:: Queue Is Empty';
    else {
      front = this.front.value;
      this.front = this.front.next;
    }

    return front;
  }

  peek(){
    let front;
    if (!this.front)
      return 'ERROR:: Queue Is Empty';
    else
      front = this.front.value;

    return front;
  }

  isEmpty(){
    if (this.front)
      return true;
    else
      return false;
  }

  print(){
    let list;
    if (this.front){
      list = `(front)-->`;
      let testNode = this.front; //(testNode)-->[a1]-->[]
      while (testNode){// is this the last node?
        list = list + `[${testNode.value}]-->`;
        testNode=testNode.next;
      }
      list = list + ` Null`;
    } else { list = `(front)--> Null`; }

    return list;
  }
}

module.exports = Queue ;
