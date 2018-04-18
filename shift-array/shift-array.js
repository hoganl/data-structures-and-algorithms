'use strict';

const shiftArray = module.exports = {};

shiftArray.insertShiftArray = (array, value) => {
  const newArray = [];
  const half = Math.round(array.length / 2);
  for (let i = 0; i < array.length + 1; i++) {
    if (i < half) {
      newArray[i] = array[i];
    } else if (i === half) {
      newArray[i] = value;
    } else {
      newArray[i] = array[i - 1];
    }
  }
  return newArray;
};
