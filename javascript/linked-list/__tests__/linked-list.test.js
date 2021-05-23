'use strict';
const LinkedList = require('../linked-list');

let list = new LinkedList();

describe('Linked List', () => {
  it('Test instantiating an empty linked list', () => {
    expect(list.head).toEqual(null);
  });
  it('Test adding new node to empty list', () => {
    list.insert(10);
    expect(list.head.value).toBe(10);
    expect(list.head.next).toBeNull();
  });
  it('Test if the first node is the head', () => {
    list.insert(5);
    list.insert(7);
    expect(list.head.value).toEqual(7);
  });
  it('Test inserting multiple nodes into the linked list', () => {
    list.insert(1);
    list.insert(10);
    list.insert(100);
    let length = list.length;
    expect(list.length).toEqual(length);
  });

  it('Test returning true if the value exists in the linked list', () => {
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);
    let exists = list.includes(4);
    expect(exists).toEqual(true);
  });

  it(`Test returning false if the value doesn't exist in the linked list`, () => {
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);
    let exists = list.includes(10);
    expect(exists).toBeFalsy;
  });

  it('should find a value anywhere in the linked list', () => {
    list.insert(25);
    expect(list.includes(25)).toBeTruthy();
    expect(list.includes(250)).toBeFalsy();
    expect(list.includes(2500)).toBeFalsy();
  });
  it('should return a string of all the values in the list,', () => {
    let list = new LinkedList();
    list.insert(5);
    list.insert(10);
    list.insert(15);
    list.insert(-5);
    list.insert(33);

    let result = list.toString();

    expect(result).toEqual(
      '{ 33 } -> { -5 } -> { 15 } -> { 10 } -> { 5 } -> NULL'
    );
  });

});
