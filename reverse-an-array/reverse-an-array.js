let array = [1,6,5,3]
function reverseArray(array) {
  let arrayTwo = [];
  for (let i = array.length - 1; i >= 0; i--) {
    let element = array.pop();
    arrayTwo.push(element);
  }
  return arrayTwo;
}

reverseArray(array);