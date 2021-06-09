'use strict';

module.exports= class Node {
  constructor(value){
    this.value = value;
    this.parent = null;
    this.children = [];
  }
};

