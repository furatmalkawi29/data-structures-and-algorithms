
function checkCharUnique(string){

  let hashTable = new HashTable(1024);
  stringArr = string.toLowerCase().split('');

  let arr = stringArr.filter(item => {
    return item!==' ';
  });
  //edge case1
  if (arr.length)
  {

    for(let item of arr){

      if(!myhash.contains(item)){
        myhash.set(item,item);
      } else return false;

    }
    return true;
  }else return 'invalid string';
}
