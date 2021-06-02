'use strict';

module.exports = function duckFunc(strings, k){
  if (strings.length){
    let counter = 0;
    while(counter < k){
  	  strings.push(strings.shift());
      counter++;
    }
    if(strings.length > 1){
  	  strings.pop();
    }
    return strings.length === 1 ? strings[0] : duckFunc(strings, k);
  }
  else return 'ERROR:: Empty String List';
};
