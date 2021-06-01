'use strict';

let Stack = require('../javascript/stack-and-queue/stack.js');

module.exports =function multiBracketValidation (input){

  let stringArr = [];
  let i=0;
  for (let string of input) {
    stringArr[i]=string;
    i++;}

  if(!stringArr.length)
    return 'Error:: Empty Input';

  let stringStack = new Stack();
  for (let string of stringArr) {

    if(string ==='{' || string ==='(' || string ==='[')
      stringStack.push(string);

    if (string === '}' && stringStack.top.value === '{')
      console.log(stringStack.pop());
    else if (string === ']' && stringStack.top.value === '[')
      console.log(stringStack.pop());
    else if (string === ')' && stringStack.top.value === '(')
      console.log(stringStack.pop());
  }

  return !stringStack.isEmpty();

};













