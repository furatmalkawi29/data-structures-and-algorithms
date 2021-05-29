'use strict';

let Node = require('../linked-list/node');


class Stack {
  constructor() {
    this.top= null;
  }

  push(value){

    let node = new Node(value);
    if (!this.top)
      this.top = node;
    else {
      node.next = this.top;
      this.top = node;
    }
  }

  pop(){
    let top;

    if (!this.top)
      return 'ERROR:: Stack Is Empty';
    else {
      top = this.top.value;
      this.top = this.top.next;
    }

    return top;
  }

  peek(){
    let top;
    if (!this.top)
      return 'ERROR:: Stack Is Empty';
    else
      top = this.top.value;

    return top;
  }

  isEmpty(){
    if (this.top)
      return true;
    else
      return false;
  }

  print(){
    let list;
    if (this.top){
      list = `(top)-->`;
      let testNode = this.top; //(testNode)-->[a1]-->[]
      while (testNode){// is this the last node?
        list = list + `[${testNode.value}]-->`;
        testNode=testNode.next;
      }
      list = list + ` Null`;
    } else { list = `(top)--> Null`; }

    return list;
  }

}


module.exports = Stack;
