'use strict';

const reverse = require('../array-reverse.js');

describe('Reverse array elements', () => {
  it('should return an array with reversed elements', () => {
    expect(reverse([1, 2, 3, 4, 5, 6])).toEqual([6, 5, 4, 3, 2, 1]);
  });

  it('should return empty array ', () => {
    expect(reverse([])).toEqual([]);
  });

  it('should return a reversed array incluing zero and negarive values ', () => {
    expect(reverse([0,-4])).toEqual([ -4, 0 ]);
  });

  it('should return a reversed array incluing string characters ', () => {
    expect(reverse(['a','b','c'])).toEqual([ 'c', 'b', 'a' ]);
  });


});
