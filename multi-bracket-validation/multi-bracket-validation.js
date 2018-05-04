'use strict';

const multiBracketValidation = (input) => {
  const brackets = [];

  for (let i = 0; i < input.length; i++) {
    if (input[i] === '(' || input[i] === '[' || input[i] === '{') {
      brackets.push(input[i]);
    }

    if (input[i] === ')') {
      if (brackets[brackets.length - 1] === '(') {
        brackets.pop();
      } else {
        return false;
      }
    }

    if (input[i] === ']') {
      if (brackets[brackets.length - 1] === '[') {
        brackets.pop();
      } else {
        return false;
      } 
    }

    if (input[i] === '}') {
      if (brackets[brackets.length - 1] === '{') {
        brackets.pop();
      } else {
        return false; 
      } 
    }
  }

  if (brackets.length === 0) {
    return true;
  } return false;
};

module.exports = multiBracketValidation;
