'use strict';

module.exports = function reverseArray (arr){

  let resultArr = [];

  let length = arr.length;
  for (let i=length-1; i>=0 ; i--)
  {
    resultArr[length-1-i] = arr[i];
  }

  return resultArr ;
};


