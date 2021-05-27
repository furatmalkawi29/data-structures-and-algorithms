'use strict';

let LinkedList = require('../../../linked-list/linked-list.js');
let zipLists = require('../ll-zip.js');

describe('Linked List zip', () => {

  it('it should successfully return null when both lists are empty', () => {
    let list1 = new LinkedList();
    let list2 = new LinkedList();

    expect(zipLists(list1,list2)).toBeNull();
  });

  it('it should successfully return null when one of lists is empty', () => {
    let list1 = new LinkedList();
    let list2 = new LinkedList();

    list2.append('(a1)');
    list2.append('(a2)');
    list2.append('(a3)');
    list2.append('(a4)');

    expect(zipLists(list1,list2)).toEqual({"next": {"next": {"next": {"next": null, "value": "(a4)"}, "value": "(a3)"}, "value": "(a2)"}, "value": "(a1)"});

  });



  it('it should successfully return value when first list is shorter than second list ', () => {
    let list1 = new LinkedList();
    let list2 = new LinkedList();

    list1.append('(x1)');

    list2.append('(a1)');
    list2.append('(a2)');
    list2.append('(a3)');

    expect(zipLists(list1,list2)).toEqual({"next": {"next": {"next": null, "value": "(a2)"}, "value": "(a1)"}, "value": "(x1)"});
  });


  it('it should successfully return value when second list is shorter than first list ', () => {
    let list1 = new LinkedList();
    let list2 = new LinkedList();

    list1.append('(x1)');
    list1.append('(x2)');
    list1.append('(x3)');

    list2.append('(a1)');


    expect(zipLists(list1,list2)).toEqual({"next": {"next": {"next": {"next": null, "value": "(x3)"}, "value": "(x2)"}, "value": "(a1)"}, "value": "(x1)"});
  });



  it('it should successfully return value when lists are same size ', () => {
    let list1 = new LinkedList();
    let list2 = new LinkedList();

    list1.append('(x1)');
    list1.append('(x2)');
    list1.append('(x3)');
    list1.append('(x4)');

    list2.append('(a1)');
    list2.append('(a2)');
    list2.append('(a3)');
    list2.append('(a4)');


    expect(zipLists(list1,list2)).toEqual({"next": {"next": {"next": {"next": {"next": {"next": {"next": {"next": null, "value": "(a4)"}, "value": "(x4)"}, "value": "(a3)"}, "value": "(x3)"}, "value": "(a2)"}, "value": "(x2)"}, "value": "(a1)"}, "value": "(x1)"});
  });
});
