'use strict';
let HashTable = require('../../hash-table/hash-table');

describe(' Testing Hashtable', () => {

  let myhash2 = new HashTable(1024);



  it('should successfully add pair to hashmap', () => {

    let results;

    myhash2.set('Ben', 'Student');

    myhash2.table.forEach((data, i) => {
      results= data && data.values();
    });

    expect(results).toEqual([ { Ben: 'Student' } ]);
  });


  it('should return the value associated with key', () => {

    //action
    let result1 = myhash2.get('Ben');
    let result2 = myhash2.get('Be');


    expect(result1).toEqual('Student');
    expect(result2).toEqual(null);

  });

  it('should return right boolean based on key', () => {

    let result1 = myhash2.contains('Ben');
    let result2 = myhash2.contains('Be');

    expect(result1).toEqual(true);
    expect(result2).toEqual(false);
  });

  it('should return right hash based on key', () => {

    let result1 = myhash2.hash('Ben');

    expect(result1).toEqual(35);
  });

});


