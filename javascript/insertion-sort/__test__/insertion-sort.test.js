'use strict';

let selectionSort = require('../insertion-sort.js');


describe('test fuzzBuzzTree function', () => {

  it('should return a sorted array ', () => {

    let arr = [8,4,23,42,16,15];
    expect(selectionSort(arr)).toEqual([ 4, 8, 15, 16, 23, 42 ]);
  });

  it('should successfully return a sorted array when array is reversed', () => {

    let arr = [20,18,12,8,5,-2];
    expect(selectionSort(arr)).toEqual([ -2, 5, 8, 12, 18, 20 ]);
  });

  it('should successfully return a sorted array when array is half sorted/ has repeated numbers', () => {

    let arr1 = [5,12,7,5,5,7];
    let arr2 = [2,3,5,7,13,11];
    expect(selectionSort(arr1)).toEqual([ 5, 5, 5, 7, 7, 12 ]);
    expect(selectionSort(arr2)).toEqual([ 2, 3, 5, 7, 11, 13 ]);
  });


  it('should return an empty array when array is empty', () => {
    let result = selectionSort([]);
    expect(result.length).toEqual(0);
  });

  it('should return an array of one value when array has one value', () => {
    let result = selectionSort([8]);
    expect(result.length).toEqual(1);
    expect(result).toEqual([8]);
  });

});



