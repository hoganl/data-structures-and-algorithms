'use strict';

const shiftArray = require('../shift-array');

describe('shift-array.test.js', () => {
  describe('shiftArray.insertShiftArray', () => {
    test('Should return correctly from even number array', () => {
      expect(shiftArray.insertShiftArray([2, 4, 6, 8], 5)).toEqual([2, 4, 5, 6, 8]);
    });
    test('Should return correctly from odd number array', () => {
      expect(shiftArray.insertShiftArray([4, 8, 15, 23, 42], 16)).toEqual([4, 8, 15, 16, 23, 42]);
    });
    test('Should return correctly from an empty array', () => {
      expect(shiftArray.insertShiftArray([], 5)).toEqual([5]);
    });
  });
});
