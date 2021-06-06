'use strict';
const Node = require('../node.js');
const BinaryTree = require('../tree.js');

describe('test findMax method', () => {

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

    one.left = two;//
    one.right = three;//
    two.left = six;//
    six.right = seven;
    seven.left = eight;
    seven.right = nine;
    three.left = four;
    three.right = five;

    //             1
    //     2               3
    // 6        -      4       5
    //     7
    // 8       9
    tree = new BinaryTree(one);
  });


  it('should return maximum value in a binary tree', () => {

    expect(tree.findMaximumValue()).toEqual(9);
  });

  it('should return maximum value despite tree size', () => {
    let nine = new Node(9);
    let tree2 = new BinaryTree(nine);
    expect(tree2.findMaximumValue()).toEqual(9);
  });

  it('should exception messege when tree is empty', () => {
    let tree2 = new BinaryTree();


    expect(tree2.findMaximumValue()).toEqual('ERROR:: tree is empty.');
  });
});
