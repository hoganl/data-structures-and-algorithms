'use strict';

const Queue = require('../queue-with-stacks');

describe('queue-with-stacks.js', () => {
  it('#constructor', () => {
    const testStack = new Queue();
    
    expect(testStack.stackA).toEqual([]);
  });

  it('#enqueue', () => {
    const testStack = new Queue();
    testStack.enqueue(1);
    testStack.enqueue(2);
    testStack.enqueue(3);

    expect(testStack.stackA[0]).toEqual(1);
    expect(testStack.stackA[1]).toEqual(2);
    expect(testStack.stackA[2]).toEqual(3);
  });

  it('#dequeue', () => {
    const testStack = new Queue();
    testStack.enqueue(1);
    testStack.enqueue(2);
    testStack.enqueue(3);
    expect(testStack.stackA).toEqual([1, 2, 3]);
    expect(testStack.dequeue()).toEqual(1);

    // const testStack2 = new Stack();
    // testStack.enqueue(2);
    // testStack.enqueue(3);    

  });
});
