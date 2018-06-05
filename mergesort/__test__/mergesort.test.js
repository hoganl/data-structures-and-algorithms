'use strict';

import mergeSort from '../mergesort';

describe('#mergeSort', () => {
  test('should return error if something other than an array is passed', () => {
    expect(() => mergeSort('')).toThrowError('Invalid input');
  });

  test('should return array when only length of one', () => {
    expect(mergeSort([1])).toEqual([1]);
  });

  test('should return a sorted array', () => {
    expect(mergeSort([5, 3, 6, 8, 12])).toEqual([3, 5, 6, 8, 12]);
  });
});
