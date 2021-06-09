'use strict';



module.exports= function findFiles(treeArr){

  let countArr = [];
  let filesCount;
  for(let tree of treeArr ){
    filesCount = 0;
    if (tree.root){
      let traverse = (node) => {
        // read left
        if(node.left) traverse(node.left);
        // read the root
        if(node.value==='file')
          filesCount++;

        // read right
        if(node.right) traverse(node.right);
      };
      traverse(tree.root);
    }
    countArr.push(filesCount);
  }

  return countArr[0]===countArr[1];
};
