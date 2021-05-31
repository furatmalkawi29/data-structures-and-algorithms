'use strict';

let Queue = require('../stack-and-queue/queue.js');

module.exports = class AnimalShelter {

  constructor (name) {
    this.dog = new Queue();
    this.cat = new Queue();
  }

  enqueue(animal){
    if (animal==='cat'||animal==='dog'){
      this[animal].enqueue(animal);
    }
  }

  dequeue(pref){
    if (pref==='cat'||pref==='dog'){
      return this[pref].dequeue();
    } else return null;
  }
};
