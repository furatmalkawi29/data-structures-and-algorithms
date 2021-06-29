
let HashTable = require('../hash-table/hash-table');

function getHashObj (hashTable){
  let i =0;
  let obj;
  let arr=[];
  hashTable.table.forEach(data => {
    if(data){
      arr= [...arr,...data.values()];
      obj = {...obj, ...arr[i]};
      i++;}
  });
  return obj;
}


function hashmapLeftJoin (myhash,myhash2){
  let obj = getHashObj(myhash)?getHashObj(myhash):{};
  let obj2= getHashObj(myhash2)?getHashObj(myhash2):{};


  for (const property in obj) {
    if (obj2[property]===undefined)
      obj2[property]=null;

    obj[property]=[obj[property],obj2[property]];
  }
  return obj;

}

module.exports= hashmapLeftJoin;
