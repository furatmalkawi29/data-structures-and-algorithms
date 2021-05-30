'use strict';

let PseudoQueue = require('../queue-with-stacks.js');

describe ('',()=> {



  it('It should successfully enqueue into a queue', () => {
    let queue = new PseudoQueue();
    queue.enqueue('a1');
    expect(queue.print()).toEqual('(top)-->[a1]--> Null');
  });

  it('It should successfully enqueue multiple values onto a queue', () => {
    let queue = new PseudoQueue();
    queue.enqueue('a1');
    queue.enqueue('a2');
    queue.enqueue('a3');

    expect(queue.print()).toEqual('(top)-->[a3]-->[a2]-->[a1]--> Null');
  });

  it('It should successfully dequeue off the queue', () => {
    let queue = new PseudoQueue();
    queue.enqueue('a1');
    queue.enqueue('a2');
    queue.enqueue('a3');

    expect(queue.dequeue()).toEqual('a1');
    expect(queue.print()).toEqual('(top)-->[a3]-->[a2]--> Null');
  });

  it('It should successfully empty a queue after multiple dequeues', () => {
    let queue = new PseudoQueue();
    queue.enqueue('a1');
    queue.enqueue('a2');
    queue.enqueue('a3');
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.dequeue()).toEqual('ERROR:: Stack Is Empty');
    expect(queue.print()).toEqual('(top)--> Null');

  });

  it('It should successfully instantiate an empty queue', () => {
    let queue = new PseudoQueue();

    expect(queue.stack1.top).toBeNull();
  });

});
