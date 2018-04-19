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
