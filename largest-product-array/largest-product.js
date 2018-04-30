'use strict';

const largestProduct = (arr) => {
  const len = arr.length;
  const lenTwo = arr[0].length;
  let result = -Infinity;
  for (let x = 0; x < len; x++) {
    for (let y = 0; y < lenTwo; y++) {
      if (arr[x][y + 1] !== undefined) {
        const prod = arr[x][y] * arr[x][y + 1];
        if (prod > result) {
          result = prod;
        }
      }
      if (arr[x + 1] !== undefined) {
        const prodTwo = arr[x][y] * arr[x + 1][y];
        if (prodTwo > result) {
          result = prodTwo;
        }
      }
      if (arr[x][y - 1] !== undefined) {
        const prod = arr[x][y] * arr[x][y - 1];
        if (prod > result) {
          result = prod;
        }
      }
      if (arr[x - 1] !== undefined) {
        const prod = arr[x][y] * arr[x - 1][y];
        if (prod > result) {
          result = prod;
        }
      }
    }
  }
  return result;
};

exports.largestProduct = largestProduct;

// Result

// const findBiggestProduct = (array) => {

//   if (!Array.isArray(array)) {
//     throw new Error('input should be an array');
//   }
//   // Assuming only positive numbers
//   let biggestProductSoFar = -1;
//   for (let rows = 0; rows < array.length; rows++) {
//     for (let columns = 0; columns < array[rows].length; columns++) {
//       const currentValue = array[rows][columns];
//       if (rows - 1 >= 0) {
//         const upValue = array[rows - 1][columns];
//         biggestProductSoFar = Math.max(currentValue * upValue, biggestProductSoFar);
//       }
//       if (rows + 1 < array.length) {
//         const downValue = array[rows + 1][columns];
//         biggestProductSoFar = Math.max(currentValue * downValue, biggestProductSoFar); 
//       }
//       if (columns - 1 >= 0) {
//         const leftValue = array[rows][columns - 1];
//         biggestProductSoFar = Math.max(currentValue * leftValue, biggestProductSoFar);
//       }
//       if (columns + 1 < array[rows].length) {
//         const rightValue = array[rows][columns + 1];
//         biggestProductSoFar = Math.max(currentValue * rightValue, biggestProductSoFar);
//       }
//     }// columns
//   }// rows
//   if (biggestProductSoFar === -1) {
//     throw new Error('The input array is not big enough');
//   }
//   return biggestProductSoFar;
// };

// console.log(findBiggestProduct([[1, 3], [5, 3]]));
