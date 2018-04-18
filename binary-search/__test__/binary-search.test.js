'use strict';

const search = require('../binary-search');

describe('binary-search.test.js', () => {
  describe('binary-search', () => {
    test('Should return the index of the element in a long array that matches the key', () => {
      expect(search.binarySearch([4, 8, 15, 16, 23, 42, 12, 46, 38, 63, 79], 15)).toEqual(2);
    });
    test('Should return the index of the element in a short array that matches the key', () => {
      expect(search.binarySearch([1, 2, 3, 4, 5], 3)).toEqual(2);
    });
    test('Should return -1 if no elements match the key', () => {
      expect(search.binarySearch([11, 22, 33, 44, 55, 66, 77], 90)).toEqual(-1);
    });
  });
});
