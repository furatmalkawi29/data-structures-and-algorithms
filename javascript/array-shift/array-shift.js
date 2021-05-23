'use strict';

module.exports = function shiftArray (arr,value){
  let middle;

  //find middle index // rounding number
  if (arr.length%2)
    middle = (arr.length/2)+.5;
  else middle = (arr.length/2);

  //shift elements
  for (let i=arr.length; i>=middle; i--){
    arr[i]=arr[i-1];
  }

  //insert value
  arr[middle]=value;

  return arr;
};
