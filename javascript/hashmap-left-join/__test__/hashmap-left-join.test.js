'use strict';
let HashTable = require('../../hash-table/hash-table');
let hashmapLeftJoin = require('../../hashmap-left-join/hashmap-left-join');


describe(' Testing hashmapLeftJoin', () => {

  let myhash = new HashTable(1024);
  myhash.set('John', 'Boss');
  myhash.set('Cathy', 'Boss');
  myhash.set('Rosie', 'TA');
  myhash.set('Cat', 'TA');
  myhash.set('Justin', 'Student');
  myhash.set('Jason', 'Teacher');
  myhash.set('Ben', 'Student');

  let myhash2 = new HashTable(1024);
  myhash2.set('John', 'Dad');
  myhash2.set('Cathy', 'Mom');
  myhash2.set('Rosie', 'Daughter');
  myhash2.set('Cat', 'Son');
  myhash2.set('Justin', 'Mom');
  myhash2.set('Sarah', 'Teacher');

  it('should return an object that has values hashmap1 modified with values from hashmap2', () => {
    //action
    let result = hashmapLeftJoin(myhash,myhash2);

    expect(result).toEqual({
      Ben: [ 'Student', null ],
      John: [ 'Boss', 'Dad' ],
      Cathy: [ 'Boss', 'Mom' ],
      Jason: [ 'Teacher', null ],
      Justin: [ 'Student', 'Mom' ],
      Rosie: [ 'TA', 'Daughter' ],
      Cat: [ 'TA', 'Son' ]});
  });

  it('should return an object that has values hashmap1 modified with null values if hashmap2 was empty', () => {

    let myhash3 = new HashTable();
    //action
    let result = hashmapLeftJoin(myhash,myhash3);

    expect(result).toEqual({
      Ben: [ 'Student', null ],
      John: [ 'Boss', null ],
      Cathy: [ 'Boss', null ],
      Jason: [ 'Teacher', null ],
      Justin: [ 'Student', null ],
      Rosie: [ 'TA', null ],
      Cat: [ 'TA', null ]});
  });

  it('should return an empty object if hashmap1 and hashmap2 were empty', () => {

    let myhash3 = new HashTable();
    //action
    let result = hashmapLeftJoin(myhash3,myhash3);

    expect(result).toEqual({});
  });

});


