'use strict';

const binarySearch = (array, key) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === key) {
      return i;
    }
    if (i === array.length - 1) {
      return -1;
    }
  }
  return undefined;
};

exports.binarySearch = binarySearch;
