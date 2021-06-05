'use strict';

const Node = require('../node.js');
const BinaryTree = require('../tree.js');
let tree = null;

describe('Binary Tree', () => {
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

  // root - left - right
  it('should traverse tree using pre-order', () => {
    // arrange
    let expected = [1, 2, 6, 7, 8, 9, 3, 4, 5];
    // act
    let preOrderResult = tree.preOrder();
    // assert
    expect(preOrderResult).toEqual(expected);
  });

  // left - root -right
  it('should traverse tree using in-order', () => {
    // arrange
    let expected = [6, 8, 7, 9, 2, 1, 4, 3, 5];
    // act
    let inOrderResult = tree.inOrder();
    // assert
    expect(inOrderResult).toEqual(expected);
  });

  // left - right - root
  it('should traverse tree using post-order', () => {
    // arrange
    let expected = [8, 9, 7, 6, 2, 4, 5, 3, 1];
    // act
    let postOrderResult = tree.postOrder();
    // assert
    expect(postOrderResult).toEqual(expected);
  });
});


describe('add and contains', () => {
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


    six.right = ten;
    six.left = five;
    five.left=one;
    one.right = three;
    ten.right=eleven;
    ten.left=eight;
    //            6
    //     5               10
    // 1        -       8      11
    //     3

    tree = new BinaryTree(six);
  });

  it('Can successfully instantiate an empty tree', () => {
    let tree2 = new BinaryTree();

    // assert
    expect(tree2.root).toEqual(null);
    expect(tree2.inOrder()).toEqual([]);
  });

});
