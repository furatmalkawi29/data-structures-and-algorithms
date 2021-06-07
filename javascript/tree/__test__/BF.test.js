'use strict';
const Node = require('../node.js');
const BinaryTree = require('../tree.js');
const Queue = require('../../stack-and-queue/queue');

describe('test breadth first method', () => {

  let tree;
  beforeAll(() => {
    let one = new Node(1);// tree root
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(4);
    let five = new Node(5);
    let six = new Node(6);
    let seven = new Node(7);
    let eight = new Node(8);
    let nine = new Node(9);
    let ten = new Node(10);
    let eleven = new Node(11);
    let x = new Node(100);



    six.right = ten;
    six.left = five;
    five.left=one;
    one.right = three;
    ten.right=eleven;
    ten.left=eight;
    eight.left= x;
    tree = new BinaryTree(six);
  });


  it('should return array of tree values ordered as expected', () => {

    let resultExpect = [ 6, 5, 10, 1, 8, 11, 3, 100 ];
    expect(tree.breadthFirst()).toEqual(resultExpect);
  });

  it('should return array of ordered nodes despite tree size', () => {
    let nine = new Node(9);
    let tree2 = new BinaryTree(nine);
    expect(tree2.breadthFirst()).toEqual([9]);
  });

  it('should return an empty array when tree is empty', () => {
    let tree2 = new BinaryTree();


    expect(tree2.breadthFirst()).toEqual([]);
  });
});
