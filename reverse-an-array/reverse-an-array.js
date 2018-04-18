const array = [1, 6, 5, 3];
function reverseArray(arr) {
  const arrayTwo = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    const element = arr.pop();
    arrayTwo.push(element);
  }
  return arrayTwo;
}

reverseArray(array);
