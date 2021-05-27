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

<<<<<<< HEAD

  it('should successfully add a node to the end of the linked list',() => {
    let list = new LinkedList;
    list.insert(1);
    list.insert(2);
    list.append(3);


    expect(list.toString()).toEqual('(head)-->[2]-->[1]-->[3]--> Null');
  });

  it('should successfully add multiple nodes to the end of a linked list', () => {

    let list = new LinkedList();

    list.insert(1);
    list.insert(2);
    list.append(3);
    list.append(4);

    expect(list.toString()).toEqual('(head)-->[2]-->[1]-->[3]-->[4]--> Null');
  });


  it('should successfully insert a node before a node located in the middle of a linked list', () => {

    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);
    list.insert(5);
    list.insertBefore(3,5);

    expect(list.toString()).toEqual('(head)-->[5]-->[4]-->[5]-->[3]-->[2]-->[1]--> Null');
  });


  it('should successfully insert a node before the first node of a linked list', () =>{

    let list = new LinkedList;
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);
    list.insert(5);

    list.insertBefore(5,5);

    expect(list.toString()).toEqual('(head)-->[5]-->[5]-->[4]-->[3]-->[2]-->[1]--> Null');
  });


  it('should successfully insert after a node in the middle of the linked list', () => {

    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);
    list.insert(5);

    list.insertAfter(3,5);

    expect(list.toString()).toEqual('(head)-->[5]-->[4]-->[3]-->[5]-->[2]-->[1]--> Null');
  });


  it('should successfully insert a node after the last node of the linked list', () => {

    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);
    list.insert(5);

    list.insertAfter(1,5);

    expect(list.toString()).toEqual('(head)-->[5]-->[4]-->[3]-->[2]-->[1]-->[5]--> Null');

  });

  it ('should return "k is invalid" when k is greater than the length of the linked list' ,()=> {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);
    list.insert(5);
    list.insert(6);

    let k = 7;

    expect(list.kthFromEnd(k)).toEqual('k is invalid');
  });

  it ('should return "k is invalid" when k equals the length of the linked list' ,()=> {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);
    list.insert(5);
    list.insert(6);

    let k = 6;

    expect(list.kthFromEnd(k)).toEqual('k is invalid');
  });

  it ('should return "k is invalid" when k is a negative number' ,()=> {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);
    list.insert(5);
    list.insert(6);

    let k = -1;

    expect(list.kthFromEnd(k)).toEqual('k is invalid');
  });

  it ('should successfully return the value that matches k from linked list is of a size 1' ,()=> {
    let list = new LinkedList();
    list.insert(5);
    let k = 0;

    expect(list.kthFromEnd(k)).toBe(5);
  });

  it ('should successfully return the value that matches k from middle of linked list (HAPPY PATH)' ,()=> {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    list.insert(3);
    list.insert(4);
    list.insert(5);
    list.insert(6);

    console.log (list.toString());
    let k = 2;

    expect(list.kthFromEnd(k)).toBe(3);
  });


  it ('should return "Empty list." messege when linked list is empty' ,()=> {
    let list = new LinkedList();

    console.log (list.toString());

    let k = 2;

    expect(list.kthFromEnd(k)).toBe('Empty list.');
  });

=======
>>>>>>> cd3792092f7339e719e8caaaefce298b22748406
});
