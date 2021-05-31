'use strict';

let AnimalShelter = require('../AnimalShelter.js');

describe ('test animal shelter',()=> {



  it('It should successfully enqueue into a queue if value was cat or dog', () => {
    let queue = new AnimalShelter();
    queue.enqueue('cat');
    queue.enqueue('dog');
    expect(queue.cat.print()).toEqual('(front)-->[cat]--> Null');
    expect(queue.dog.print()).toEqual('(front)-->[dog]--> Null');
  });

  it('It should successfully enqueue multiple values onto a queue', () => {
    let queue = new AnimalShelter();
    queue.enqueue('cat');
    queue.enqueue('cat');


    expect(queue.cat.print()).toEqual('(front)-->[cat]-->[cat]--> Null');
  });

  it('It should successfully dequeue off the queue if pref was dog or cat and return pref', () => {
    let queue = new AnimalShelter();
    queue.enqueue('dog');
    queue.enqueue('dog');
    queue.enqueue('dog');

    expect(queue.dequeue('dog')).toEqual('dog');
    expect(queue.dog.print()).toEqual('(front)-->[dog]-->[dog]--> Null');
  });

  it('It should return null if pref isnt dog or cat', () => {
    let queue = new AnimalShelter();
    queue.enqueue('dog');
    queue.enqueue('dog');

    expect(queue.dequeue('bunny')).toEqual(null);
    expect(queue.dog.print()).toEqual('(front)-->[dog]-->[dog]--> Null');
  });

  it('It should successfully empty a queue after multiple dequeues', () => {
    let queue = new AnimalShelter();
    queue.enqueue('cat');
    queue.enqueue('cat');
    queue.enqueue('cat');
    queue.dequeue('cat');
    queue.dequeue('cat');
    queue.dequeue('cat');
    expect(queue.dequeue('cat')).toEqual('ERROR:: Queue Is Empty');
    expect(queue.cat.print()).toEqual('(front)--> Null');
  });

  it('It should successfully instantiate an empty queue', () => {
    let queue = new AnimalShelter();

    expect(queue.cat).toBeDefined();
    expect(queue.cat).toBeDefined();

  });

});
