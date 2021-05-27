'use strict';

module.exports= function zipLists (list1,list2){

  let cursor1 = list1.head;
  let cursor2 = list2.head;
  let value;
  let newValue;

  if (!cursor1) { //list1 empty
    list1.head=list2.head;
    return list1.head;
  }

  while(cursor1&&cursor2){
    value= cursor1.value;
    newValue =cursor2.value;

    list1.insertAfter(value,newValue);
    cursor1 = cursor1.next.next;
    cursor2 = cursor2.next;
    list2.length--;
  }

  if (list2.length){//list1 is shorter than list2
    value =list1.tail.value;
    newValue = cursor2.value;

    while(cursor2.next)
    {

      list1.insertAfter(value,newValue);

      cursor2 = cursor2.next;
      value= newValue;
      newValue = cursor2.value;
    }

  }
  console.log(list1.toString());

  return list1.head;
};
