'use strict';

let Node = require('./node.js');


class LinkedList {
  constructor() {
    this.head = null; //()-->null //head
    this.tail = null;
    this.length=0;
  }

  insert(data) { //TASK:: ------> insert node at the start of list
    try {
      let node = new Node(data); //[a1]--> null
      if (!this.head) { //is head pointing to null? (empty list?)
        this.head = node; // let head points to new node
        this.tail = node;
        this.length++;
      } //()-->[a1]-->null
      else { //is head pointing to another node? // ()-->[a3]-->null
        node.next = this.head; //let node points to first node // [a5]-->[a3]-->null
        this.head = node;// let head points to new node // ()-->[a5]-->[a3]-->null
        this.length++;
      }
    } catch (error) {
      console.log('error' + error);

    }

  }

  includes(value){ // TASK:: search for a value in list
    if(this.head){// does list have nodes? ()-->[a1]-->[a2]-->[a3]-->null
      let testNode = this.head; //(testNode)-->[a1]-->[]
      while (testNode.next){// is this the last node?
        if(testNode.value === value) return true; //return true; //is node1 value === search value?
        testNode=testNode.next; //(testNode)-->[a1]-->[] ==>>>> (testNode)-->[a2]-->[] ==>
      }

      if(testNode.value === value) return true; // checks last node value
    } return false;
  }

  toString() {
    let list;
    if (this.head){
      list = `(head)-->`;
      let testNode = this.head; //(testNode)-->[a1]-->[]
      while (testNode){// is this the last node?
        list = list + `[${testNode.value}]-->`;
        testNode=testNode.next;
      }
      list = list + ` Null`;
    } else { list = `(head)--> NULL`; }

    return list;
  }

  append(value) {
    let node = new Node(value);
    if (this.head){
      let cursor = this.head;
      while(cursor.next){ //is this the last node?
        cursor=cursor.next;
      }
      cursor.next=node;//let last node points to the new node
      this.tail = node;
      this.length++;

    } else { this.head = node;
      this.tail = node;
      this.length++;

    }// let head points to new node
  }

  insertBefore(value,newValue){
    let node = new Node(newValue);
    if(this.head){
      let cursor = this.head;
      if (cursor.value ===value){
        node.next = cursor;
        this.head = node;
        this.length++;

        return;
      }
      while(cursor){
        if (cursor.next.value===value){
          node.next = cursor.next;
          cursor.next = node;
          this.length++;

          break;
        }
        cursor=cursor.next;
      }
    } else { this.head = node; // let head points to new node
      this.tail = node;
      this.length++;
    }
  }

  insertAfter(value, newValue) {
    let node = new Node(newValue);
    if(this.head){

      let cursor = this.head;
      while(cursor){
        if (cursor.value===value){
          node.next = cursor.next;
          cursor.next = node;
          this.tail = node;
          this.length++;
          break;
        }
        cursor=cursor.next;}
    } else { this.head = node; // let head points to new node
      this.tail = node;
      this.length++;
    }
  }


  kthFromEnd(k){
    if (this.head){
      if (k < this.length && k >=0 ){
        let counter = this.length-1;

        let cursor = this.head;
        while(counter!== k){
          console.log(cursor.value);
          cursor=cursor.next;
          counter--;
        }
        return cursor.value;

      } else { return 'k is invalid'; }
    } else { return 'Empty list.';}
  }
}





module.exports = LinkedList;

