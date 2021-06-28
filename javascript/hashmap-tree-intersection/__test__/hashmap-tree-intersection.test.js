'use strict';
const Node = require('../../linked-list/node');
let HashTable = require('../../hash-table/hash-table');
let hashmapTreeIntersection = require('../hashmap-tree-intersection');
let BinaryTree = require('../../tree/tree');


describe(' Testing hashmapTreeIntersection', () => {

  let tree1;
  let tree2;
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
    tree1 = new BinaryTree(one);
    tree2 = new BinaryTree(two);
  });

  it('should return an array of 2 binary trees values unrepeated', () => {
    //action
    let result = hashmapTreeIntersection(tree1,tree2);

    expect(result).toEqual([6, 8, 7, 9, 2,
      1, 4, 3, 5]);
  });

  it('should return an empty array when both trees are empty', () => {

    let tree3 = new BinaryTree();
    //action
    let result = hashmapTreeIntersection(tree3,tree3);

    expect(result).toEqual([]);
  });

  it('should return an array of 2 binary trees values with one empty tree', () => {

    let tree3 = new BinaryTree();
    //action
    let result = hashmapTreeIntersection(tree3,tree1);

    expect(result).toEqual([ 6, 8, 7, 9, 2,
      1, 4, 3, 5]);
  });

});


