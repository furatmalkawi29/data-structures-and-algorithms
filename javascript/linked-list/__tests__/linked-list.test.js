'use strict';
const LinkedList = require('../linked-list');

describe('Linked List', () => {
  it('Test instantiating an empty linked list', () => {
    let list = new LinkedList();
    expect(list.head).toEqual(null);
  });
  it('Test adding new node to empty list', () => {
    let list = new LinkedList();
    list.insert(1);
    expect(list.head.value).toBe(1);
    expect(list.head.next).toBeNull();
  });
  it('Test if the first node is the head', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    expect(list.head.value).toEqual(2);
  });
  it('Test inserting multiple nodes into the linked list', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(10);
    list.insert(100);
    let length = list.length;
    expect(list.length).toEqual(length);
  });

  it('Test returning true if the value exists in the linked list', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);
    let exists = list.includes(4);
    expect(exists).toEqual(true);
  });

  it(`Test returning false if the value doesn't exist in the linked list`, () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);
    let exists = list.includes(10);
    expect(exists).toBeFalsy();
  });

  it('should find a value anywhere in the linked list', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);
    expect(list.includes(1)).toBeTruthy();
    expect(list.includes(3)).toBeTruthy();
    expect(list.includes(4)).toBeTruthy();
  });
  it('should return a string of all the values in the list,', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);
    list.insert(5);

    let result = list.toString();

    expect(result).toEqual(
      '(head)-->[5]-->[4]-->[3]-->[2]-->[1]--> Null');
  });

});
