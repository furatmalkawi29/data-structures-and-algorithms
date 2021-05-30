'use strict';

let Node = require('../linked-list/node');
let Stack = require('../stack-and-queue/stack.js');


class PseudoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack(); }

  enqueue (value){
    this.stack1.push(value);
  }

  dequeue(){
    while(this.stack1.top)
    {
      this.stack2.push(this.stack1.pop());
    }
    let deleted =  this.stack2.pop();
    while(this.stack2.top)
    {
      this.stack1.push(this.stack2.pop());
    }
    return deleted;
  }


  print(){

    let list =this.stack1.print();

    return list;
  }
}

module.exports = PseudoQueue;
