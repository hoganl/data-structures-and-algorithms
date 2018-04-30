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

// Result
// const test = [1, 2, 3, 4];

// const inPlaceMiddleInsertion = (arr, newValue) => {
//   const len = arr.length;// 4
//   const mid = Math.floor(len/2);// 3
//   let temp = arr[mid];
//   arr[mid] = newValue;

//   for (let i = mid + 1; i <= len; i++) {
//     // i = 3, arr[3] = 4
//     let otherTemp = arr[i];// = 4
//     arr[i] = temp;// arr[3] = 4 = 3
//     temp = otherTemp; // temp is still 3, but gets reset to 4
//   }
//   return arr;
// };

// console.log(inPlaceMiddleInsertion(test, 'IN THE MIDDLE'));
