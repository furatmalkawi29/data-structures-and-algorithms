
let HashTable = require('../hash-table/hash-table');

module.exports = function hashmapRepeatedWord (paragraph){
  //remove punctuation mark from "summer,"
  let puncLess = paragraph.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,'').replace(/\s{2,}/g,' ');

  let lowerStr = puncLess.toLowerCase();
  let wordsArr = lowerStr.split(' ');
  let arr = wordsArr.filter(word =>{
    return word !== ' ' && word !== '';
  });
  if(arr.length){
    let myhash = new HashTable(1024);

    for (let word of arr)
    {
      if(!myhash.contains(word))
        myhash.set(word,word);
      else return word;
    }
    return {Warrning: 'No repeation'};
  }else return {Warrning: 'Empty String'};
};

