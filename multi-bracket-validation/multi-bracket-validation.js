'use strict';

const multiBracketValidation = (input) => {
  const bracArr = [];

  for (let i = 0; i < input.length; i++) {
    if (input[i] === '(' || input[i] === '[' || input[i] === '{') {
      bracArr.push(input[i]);
    }
  }

  for (let i = 0; i < input.length; i++) {    
    if (input[i] === ')' && bracArr[0] === '(') {
      bracArr.shift();
    } else {
      return false;
    }
    if (input[i] === ']' && bracArr[0] === '[') {
      bracArr.shift();
    } else {
      return false;
    }
    if (input[i] === '}' && bracArr[0] === '{') {
      bracArr.shift();
    } else {
      return false;
    }
  }

  if (bracArr === []) {
    return true;
  } return false;
};

module.exports = multiBracketValidation;
