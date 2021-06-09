'use strict';

const Queue = require('../stack-and-queue/queue.js');


module.exports= class KaryTree {
  constructor (root=null){
    this.root = root;
  }

  karyBreadthFisrt(){
    let result =[];
    let queue = new Queue();

    let traverse = node=>{
      let currentNode = node;

      if(currentNode.children.length)
      {
        for(let item of currentNode.children)
          queue.enqueue(item);
      }

      result.push(currentNode.value);

      let dequeueNode = queue.dequeue();
      if (dequeueNode !=='ERROR:: Queue Is Empty')
        traverse(dequeueNode);
    };

    traverse(this.root);
    return result;
  }

};
