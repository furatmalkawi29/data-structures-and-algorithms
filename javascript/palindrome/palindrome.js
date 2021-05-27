'use strict';

module.exports= (list) => {
  let values = [];
  let cursor=list.head;
  let i=0;
  // push all node values into an array
  if (!(list.length<=1)){ //has only one value
    while (cursor !== null) {
      values[i]=cursor.value;
      cursor = cursor.next;
      i++;
    }
    // iterate over array and compare values

    console.log(values);
    for (let i = 0; i < values.length >> 1; i++) {
      // (values.length - i - 1) is our virtual pointer
      if (values[i] !== values[values.length - i - 1]) return false;
    }
    return true;
  } else return false;
};
