'use strict';

const shiftArray = require('../array-shift.js');

describe('Insert value at array middle index', () => {
  it('should return an array inserted value in middle index ', () => {
    expect(shiftArray([2,4,6,-8], 5)).toEqual([2,4,5,6,-8]);
  });

  it('should return a shiftArrayd array incluing string characters ', () => {
    expect(shiftArray([42,8,15,23,42], 16)).toEqual([42,8,15,16,23,42]);
  });

  it('should return array that has the value as only element', () => {
    expect(shiftArray([],5)).toEqual([5]);
  });

  it('should return the array with value at the end ', () => {
    expect(shiftArray([3],5)).toEqual([ 3, 5 ]);
  });
});
