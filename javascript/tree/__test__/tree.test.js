'use strict';

const Node = require('../node.js');
const BinaryTree = require('../tree.js');
const BinarySearchTree = require('../BST.js');

describe('Binary Tree', () => {

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

  it('Can successfully instantiate an empty tree', () => {
    let tree = new BinaryTree();

    // assert
    expect(tree.root).toEqual(null);
    expect(tree.inOrder()).toEqual([]);
  });

  it('Can successfully instantiate a tree with a single root node', () => {
    let tree = new BinarySearchTree();
    tree.add(7);
    // assert
    expect(tree.root).not.toBeNull();
    expect(tree.root.value).toEqual(7);
    expect(tree.inOrder()).toEqual([7]);
  });


  it('Can successfully add a left child and right child to a single root node', () => {
    let tree = new BinarySearchTree();
    tree.add(7);
    tree.add(5);
    tree.add(10);

    // assert
    expect(tree.root.value).toEqual(7);
    expect(tree.inOrder()).toEqual([5,7,10]);
  });

  it('Can successfully return true when value exists in tree', () => {
    let tree = new BinarySearchTree();
    tree.add(7);
    tree.add(5);
    tree.add(10);

    // assert
    expect(tree.contains(7)).toBeTruthy();
    expect(tree.contains(5)).toBeTruthy();
    expect(tree.contains(10)).toBeTruthy();
  });

  it('Can successfully return false when value doesnt exists in tree', () => {
    let tree = new BinarySearchTree();
    tree.add(7);
    tree.add(5);
    tree.add(10);

    // assert
    expect(tree.contains(4)).toBeFalsy();
    expect(tree.contains(11)).toBeFalsy();
    expect(tree.contains(0)).toBeFalsy();
  });

  it('Can return exception messege when tree is empty', () => {
    let tree = new BinarySearchTree();

    // assert
    expect(tree.contains(4)).toEqual('Error:: Empty Tree.');

  });
});
