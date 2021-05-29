'use strict';
const Stack = require('../stack.js');
const Queue = require('../queue.js');

describe('queue and stack test', () => {

  it('It should successfully push onto a stack', () => {
    let stack = new Stack();
    stack.push('a1');
    expect(stack.print()).toEqual('(top)-->[a1]--> Null');
  });

  it('It should successfully push multiple values onto a stack', () => {
    let stack = new Stack();
    stack.push('a1');
    stack.push('a2');
    stack.push('a3');

    expect(stack.print()).toEqual('(top)-->[a3]-->[a2]-->[a1]--> Null');
  });

  it('It should successfully pop off the stack', () => {
    let stack = new Stack();
    stack.push('a1');
    stack.push('a2');
    stack.push('a3');

    expect(stack.pop()).toEqual('a3');
    expect(stack.print()).toEqual('(top)-->[a2]-->[a1]--> Null');


  });

  it('It should successfully empty a stack after multiple pops', () => {
    let stack = new Stack();
    stack.push('a1');
    stack.push('a2');
    stack.push('a3');
    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.pop()).toEqual('ERROR:: Stack Is Empty');
    expect(stack.print()).toEqual('(top)--> Null');


  });

  it('It should successfully peek the next item on the stack', () => {
    let stack = new Stack();
    stack.push('a1');
    stack.push('a2');
    stack.push('a3');
    expect(stack.peek()).toEqual('a3');
  });

  it('It should successfully instantiate an empty stack', () => {
    let stack = new Stack();

    expect(stack.top).toBeNull();
  });

  it('It should successfully Calling pop or peek on empty stack raises exception', () => {
    let stack = new Stack();

    expect(stack.peek()).toEqual('ERROR:: Stack Is Empty');
    expect(stack.pop()).toEqual('ERROR:: Stack Is Empty');

  });



  // Can successfully enqueue into a queue
  // Can successfully enqueue multiple values into a queue
  // Can successfully dequeue out of a queue the expected value
  // Can successfully peek into a queue, seeing the expected value
  // Can successfully empty a queue after multiple dequeues
  // Can successfully instantiate an empty queue
  // Calling dequeue or peek on empty queue raises exception



  it('It should successfully enqueue into a queue', () => {
    let queue = new Queue();
    queue.enqueue('a1');
    expect(queue.print()).toEqual('(front)-->[a1]--> Null');
  });

  it('It should successfully enqueue multiple values onto a queue', () => {
    let queue = new Queue();
    queue.enqueue('a1');
    queue.enqueue('a2');
    queue.enqueue('a3');

    expect(queue.print()).toEqual('(front)-->[a1]-->[a2]-->[a3]--> Null');
  });

  it('It should successfully dequeue off the queue', () => {
    let queue = new Queue();
    queue.enqueue('a1');
    queue.enqueue('a2');
    queue.enqueue('a3');

    expect(queue.dequeue()).toEqual('a1');
    expect(queue.print()).toEqual('(front)-->[a2]-->[a3]--> Null');
  });

  it('It should successfully empty a queue after multiple dequeues', () => {
    let queue = new Queue();
    queue.enqueue('a1');
    queue.enqueue('a2');
    queue.enqueue('a3');
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.dequeue()).toEqual('ERROR:: Queue Is Empty');
    expect(queue.print()).toEqual('(front)--> Null');

  });

  it('It should successfully peek the next item on the queue', () => {
    let queue = new Queue();
    queue.enqueue('a1');
    queue.enqueue('a2');
    queue.enqueue('a3');
    expect(queue.peek()).toEqual('a1');
  });

  it('It should successfully instantiate an empty queue', () => {
    let queue = new Queue();

    expect(queue.front).toBeNull();
  });

  it('It should successfully Calling dequeue or peek on empty queue raises exception', () => {
    let queue = new Queue();

    expect(queue.peek()).toEqual('ERROR:: Queue Is Empty');
    expect(queue.dequeue()).toEqual('ERROR:: Queue Is Empty');
  });

});
