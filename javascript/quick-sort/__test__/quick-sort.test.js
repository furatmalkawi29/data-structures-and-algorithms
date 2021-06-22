'use strict';

const quickSort = require('../quick-sort');

describe('Insertion Sort TESTING', () => {
  it('Successfully sort an array', () => {
    let arr = [100,5,10,80,500,46];
    expect(quickSort(arr, 0, arr.length - 1)).toStrictEqual([5,10,46,80,100,500]);
  });
  it('Successfully sort an array with a few uniques', () => {
    let arr=[9,9,7,9,20,7];
    expect(quickSort(arr, 0, arr.length - 1)).toStrictEqual([7,7,9,9,9,20]);
  });

  it('Successfully sort a nearly sorted array', () => {
    let arr=[1,2,3,4,5,6];
    expect(quickSort(arr, 0, arr.length - 1)).toStrictEqual([1,2,3,4,5,6]);
  });

  it('Successfully sort reverse-sorted array', () => {
    let arr=[20,10,15,5,0,-5];
    expect(quickSort(arr, 0, arr.length - 1)).toStrictEqual([-5,0,5,10,15,20]);
  });
});
