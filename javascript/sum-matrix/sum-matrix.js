'use strict';

module.exports= function sumMatrix(matrix){

  let sum;

  for (let i in matrix){
    sum = 0;
    for (let j in matrix[i]){
      if(matrix[i][j]) //check null
        sum = sum + matrix[i][j];
      else sum = sum + 0; //consider zero
    }
    matrix[i]=sum;
  }

  return matrix;
};
