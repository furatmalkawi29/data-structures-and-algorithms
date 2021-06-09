'use strict';
const Node = require('../../linked-list/node');
const BinaryTree = require('../../tree/tree.js');
const findFiles = require('../mock-up19');
describe('test breadth first method', () => {

  ///////////////////////////// Tree 1 ///////////////////////////////
  let one = new Node(1);// tree root
  let three = new Node(3);
  let five = new Node(5);
  let six = new Node(6);
  let eight = new Node(8);
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
  let tree1 = new BinaryTree(six);


///////////////////////////// Tree 2 ///////////////////////////////
  let one2 = new Node('folder');// tree root
  let three2 = new Node('file');
  let five2 = new Node('folder');
  let six2 = new Node('folder');
  let eight2 = new Node('file');
  let ten2 = new Node('folder');
  let eleven2 = new Node('file');

  six2.right = ten2;
  six2.left = five2;
  five2.left=one2;
  one2.right = three2;
  one2.left = three2;
  ten2.right=eleven2;
  ten2.left=eight2;

  let tree2 = new BinaryTree(six2);




  it('should return true when tees has same number of files', () => {

    let treeArr =[tree1,tree1];
    expect(findFiles(treeArr)).toEqual(true);
  });

  it('should return false when tees has different number of files', () => {
    let treeArr =[tree1,tree2];
    expect(findFiles(treeArr)).toEqual(false);
  });

});
