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


 it('should successfully add a node to the end of the linked list',() => {
    //arrange
    let test = new LinkedList;
    //act
    test.append(2);
    test.append(3);
    //assert
    expect(test).toEqual({"head": {"next": {"next": null, "value": 3}, "value": 2}});
  });
  it('should successfully add multiple nodes to the end of a linked list', () => {
    //arrange
    let test = new LinkedList();
    //act
    test.append(11);
    test.append(22);
    test.append(33);
    test.append(44);
    test.append(55);
    //assert
    expect(test).toEqual({"head": {"next": {"next": {"next": {"next": {"next": null, "value": 55}, "value": 44}, "value": 33}, "value": 22}, "value": 11}});
  });
  it('should successfully insert a node before a node lo22ed i the middle of a linked list', () => {
    //arrange
    let test = new LinkedList();
    test.append(17);
    test.append(28);
    test.append(35);
    test.append(42);
    //act
    test.insertBefore(35,51);
    //assert
    expect(test).toEqual({"head": {"next": {"next": {"next": {"next": {"next": null, "value": 42}, "value": 35}, "value": 51}, "value": 28}, "value": 17}});
  });
  it('should successfully insert a node before the first node of a linked list', () =>{
    //arrange
    let test = new LinkedList;
    test.append(15);
    test.append(25);
    test.append(36);
    test.append(47);
    //act
    test.insertBefore(15,58);
    //assert
    expect(test).toEqual({"head": {"next": {"next": {"next": {"next": {"next": null, "value": 47}, "value": 36}, "value": 25}, "value": 15}, "value": 58}});
  });
  it('should successfully insert after a node in the middle of the linked list', () => {
    //arrange
    let test = new LinkedList();
    test.append('a1');
    test.append('a2');
    test.append('a3');
    test.append('a4');
    //act
    test.insertAfter('a3','a5');
    //assert
    expect(test).toEqual({"head": {"next": {"next": {"next": {"next": {"next": null, "value": 'a4'}, "value": 'a5'}, "value": 'a3'}, "value": 'a2'}, "value": 'a1'}}
    );
  });
  it('should successfully insert a node after the last node of the linked list', () => {
    //arrange
    let test = new LinkedList();
    test.append('11');
    test.append('22');
    test.append('33');
    test.append('44');
    //act
    test.insertAfter('44','55');
    //assert
    expect(test).toEqual({"head": {"next": {"next": {"next": {"next": {"next": null, "value": '55'}, "value": '44'}, "value": '33'}, "value": '22'}, "value": '11'}
    });

});

});
