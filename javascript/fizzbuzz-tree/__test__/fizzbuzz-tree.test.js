'use strict';

const Node = require('../node');
const KaryTree = require('../K-ary-tree.js');
const fizzBuzzTree = require('../fizzbuzz-tree.js');


describe('test fuzzBuzzTree function', () => {


  let rootNode = new Node(1); //1

  let tree = new KaryTree(rootNode);

  tree.root.children.push(new Node(2)); //2
  tree.root.children[0].parent = tree;

  tree.root.children.push(new Node(3)); //3
  tree.root.children[1].parent = tree;

  tree.root.children.push(new Node(4)); //4
  tree.root.children[2].parent = tree;

  tree.root.children[0].children.push(new Node(5));//5
  tree.root.children[0].children[0].parent = tree.root.children[0];

  tree.root.children[1].children.push(new Node(6));//6
  tree.root.children[0].children[0].parent = tree.root.children[1];

  tree.root.children[1].children.push(new Node(7));//7
  tree.root.children[1].children[1].parent = tree.root.children[1];

  tree.root.children[1].children.push(new Node(15));//15
  tree.root.children[1].children[2].parent = tree.root.children[1];


  //         __1__
  //    /      |     \
  //   2      _3_     4
  //   |     / | \
  //   5    6  7  15



  it('should return new tree with right values replacements ', () => {

    let resultTree = fizzBuzzTree(tree);

    //print result tree traversal
    expect(resultTree.karyBreadthFisrt()).toEqual([ '1', '2', 'fizz', '4', 'buzz', 'fizz', '7', 'fizzbuzz' ]);
  });

  it('should returnan exception messege when tree is empty', () => {
    let tree2 = new KaryTree();
    expect(fizzBuzzTree(tree2)).toEqual('ERROR:: Tree Is Empty');
  });

  it('should return numbers as strings when they dont match cases', () => {

    let resultTree = fizzBuzzTree(tree);
    let resultTraversal = resultTree.karyBreadthFisrt();

    //print result tree traversal
    expect(resultTraversal[0]).toEqual('1');
  });
});



