'use strict';

import quicksort from '../quicksort';

describe('#quicksort', () => {
  test('should return undefined for an empty array', () => {
    expect(quicksort([])).toEqual(undefined);
  });

  test('should return array with only one value', () => {
    expect(quicksort([5])).toEqual([5]);
  });

  test('should return a sort array', () => {
    expect(quicksort([5, 3, 8, 12, 2], 0, 4)).toEqual([2, 3, 5, 8, 12]);
  });
});
