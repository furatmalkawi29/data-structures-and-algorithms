'use strict';

let LinkedList = require('../../linked-list/linked-list.js');
let palindromeList = require('../palindrome.js');

describe('Linked List palindrome check', () => {

  it('it should return true when list has palindrome and its odd', () => {
    let list1 = new LinkedList();
    list1.append(1);
    list1.append(2);
    list1.append(5);
    list1.append(2);
    list1.append(1);

    expect(palindromeList(list1)).toBeTruthy();
  });

  it('it should return true when list has palindrome and its even', () => {
    let list1 = new LinkedList();
    list1.append(1);
    list1.append(2);
    list1.append(2);
    list1.append(1);

    expect(palindromeList(list1)).toBeTruthy();
  });

  it('it should return false when list isnt palindrome', () => {
    let list1 = new LinkedList();
    list1.append(1);
    list1.append(2);
    list1.append(5);
    list1.append(1);

    expect(palindromeList(list1)).toBeFalsy();
  });


  it('it should return false when lists is empty', () => {
    let list1 = new LinkedList();

    expect(palindromeList(list1)).toBeFalsy();

  });

  it('it should return false when lists size is one', () => {
    let list1 = new LinkedList();

    expect(palindromeList(list1)).toBeFalsy();

  });

});
