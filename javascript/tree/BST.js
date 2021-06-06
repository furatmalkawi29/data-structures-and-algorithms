'use strict';

let Node = require('./node');

module.exports = class BinarySearchTree {

  constructor(root=null) {
    this.root = root;
  }



  add (value){
    //            6
    //     5               10
    // 1        -       8      11
    //     3
    let newNode= new Node(value);
    if (this.root){
      let traverse = (node) => {
        if(value>node.value){
          if(node.right) traverse(node.right);
          else
            node.right = newNode;
          return;
        }
        else if(value<node.value){
          if(node.left) traverse(node.left);
          else
            node.left = newNode;
          return;
        }
      };
      traverse(this.root);
    }
    else {
      this.root = newNode;
    }

  }



  contains(value){
    if (this.root){

      let result = false;
      let traverse = (node) => {
        if(value===node.value)
          result = true;
        else if (value<node.value){
          if(node.left) traverse(node.left);
        } else if(value>node.value){
          if(node.right) traverse(node.right);
        } };
      traverse(this.root);
      return result;

    }
    else
      return 'Error:: Empty Tree.';
  }


  inOrder() {
    let result = [];

    if (this.root){
      let traverse = (node) => {
      // read left
        if(node.left) traverse(node.left);
        // read the root
        result.push(node.value);
        // read right
        if(node.right) traverse(node.right);
      };
      traverse(this.root);
    }
    return result;
  }

};
