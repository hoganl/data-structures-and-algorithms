'use strict';

const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const partition = (arr, pivot, left, right) => {
  const pivotValue = arr[pivot];
  let partitionIndex = left;

  for (let i = left; i < right; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, i, partitionIndex);
      partitionIndex += 1;
    }
  }
  swap(arr, right, partitionIndex);
  return partitionIndex;
};

const quicksort = (arr, left, right) => {
  if (arr.length === 0) {
    return undefined;
  }

  if (arr.length === 1) {
    return arr;
  }

  let pivot;
  let partitionIndex;

  if (left < right) {
    pivot = right;
    partitionIndex = partition(arr, pivot, left, right);

    quicksort(arr, left, partitionIndex - 1);
    quicksort(arr, partitionIndex + 1, right);
  }

  return arr;
};

export default quicksort;
