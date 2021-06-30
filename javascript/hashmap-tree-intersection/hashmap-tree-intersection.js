let HashTable = require('../hash-table/hash-table');


function hashmapTreeIntersection (tree1,tree2)
{
  let myhash = new HashTable (1024);
  let arr = [...tree1.inOrder(),...tree2.inOrder()];
  let resultArr =[];

  arr.forEach(item => {
  //[362] --> '3':3
  //[443] --> '5':5
    myhash.set(item, item);
    resultArr.push(myhash.get(item));
  });

  console.log(resultArr);
  //remove reapted values in array
  let finalArr = resultArr.filter( (item, index) => {
    return resultArr.indexOf(item) === index;
  });

  return finalArr;
}

module.exports = hashmapTreeIntersection;
