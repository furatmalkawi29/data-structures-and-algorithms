'use strict';

const Queue = require('../stack-and-queue/queue.js');


module.exports = function fizzBuzzTree (tree) {
  //with Object.assign it will be cloned as an obj not KaryTree obj
  //to clone class object with class methods:
  let newTree = Object.assign(Object.create(Object.getPrototypeOf(tree)), tree);
  let queue = new Queue();

  if (newTree.root)
  {let traverse = node=>{
    let currentNode = node;

    if(currentNode.children.length)
    {
      for(let item of currentNode.children)
        queue.enqueue(item);
    }

    let nodeVlaue =currentNode.value;
    if(!(nodeVlaue %3) && !(nodeVlaue %5))
      currentNode['value']='fizzbuzz';
    else if(!(nodeVlaue %3))
      currentNode['value']='fizz';
    else if(!(nodeVlaue %5))
      currentNode['value']='buzz';
    else currentNode['value']= nodeVlaue.toString();


    let dequeueNode = queue.dequeue();
    if (dequeueNode !=='ERROR:: Queue Is Empty')
      traverse(dequeueNode);
  };

  traverse(newTree.root);

  return newTree;
  } else return 'ERROR:: Tree Is Empty';
};