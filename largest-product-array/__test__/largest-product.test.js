'use strict';

const biggest = require('../largest-product');

describe('largest-product.test.js', () => {
  describe('largest-product', () => {
    test('Should return the largest product of 2 adjacent values with 3 arrays with 2 values', () => {
      expect(biggest.largestProduct([[1, 2], [3, 4], [5, 6]])).toEqual(30);
    });
    test('Should return the largest product of 2 adjacent values with 3 arrays with 3 values', () => {
      expect(biggest.largestProduct([[1, 2, 3], [3, 4, 5], [5, 6, 7]])).toEqual(42);
    });
    test('Should return the largest product of 2 adjacent values with 4 arrays with 3 values', () => {
      expect(biggest.largestProduct([[1, 2, 3], [3, 4, 5], [5, 6, 7], [7, 8, 9]])).toEqual(72);
    });
  });
});
