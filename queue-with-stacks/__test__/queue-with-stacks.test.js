'use strict';

const Queue = require('../queue-with-stacks');

describe('queue-with-stacks.js', () => {
  it('#constructor', () => {
    const testQueue = new Queue();
    
    expect(testQueue.stackA).toEqual([]);
  });

  it('#enqueue', () => {
    const testQueue = new Queue();
    testQueue.enqueue(1);
    testQueue.enqueue(2);
    testQueue.enqueue(3);

    expect(testQueue.stackA[0]).toEqual(1);
    expect(testQueue.stackA[1]).toEqual(2);
    expect(testQueue.stackA[2]).toEqual(3);
  });

  it('#dequeue', () => {
    const testQueue = new Queue();
    testQueue.enqueue(7);
    testQueue.enqueue(9);
    testQueue.enqueue(11);
    expect(testQueue.stackA).toEqual([7, 9, 11]);
    expect(testQueue.dequeue()).toEqual(7);
    expect(testQueue.stackA).toEqual([9, 11]);
  });
});
