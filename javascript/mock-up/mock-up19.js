'use strict';



module.exports= function findFiles(treeArr){

  let countArr = [];
  let filesCount;
  for(let tree of treeArr ){
    filesCount = 0;
    let traverse = (node) => {
      if(node.left) traverse(node.left);
      if(node.value==='file')
        filesCount++;
      if(node.right) traverse(node.right);
    };
    traverse(tree.root);
  }
  countArr.push(filesCount);

  return countArr[0]===countArr[1];
};
