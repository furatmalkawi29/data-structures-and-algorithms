'use strict';

const sumMatrix = require('../sum-matrix.js');

describe('Sum Matrix', () => {
  it('should return the sum of each row', () => {
    expect(sumMatrix([ [1, 2, 3], [3, 5, 7], [1, 7, 10] ])).toEqual([6, 15, 18]);
  });

  it('should return the sum of each row incluing negarive values ', () => {
    expect(sumMatrix([ [0, 1, 5], [-4, 7, 2], [-3, 12, 11] ])).toEqual([6, 5, 20]);
  });

  it('should return the sum of each row incluing null ', () => {
    expect(sumMatrix([ [1, 2, 3], [3, 5, 7], [null, 7, 10] ])).toEqual([6, 15, 17]);
  });


});
