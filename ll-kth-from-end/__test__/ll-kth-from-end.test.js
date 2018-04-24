'use strict';

const LinkedList = require('../ll-kth-from-end');
const Node = require('../node');

describe('ll-kth-from-end.js', () => {
  it('#constructor', () => {
    const testList = new LinkedList();
    expect(testList.head).toBeNull();
  });

  it('#insertAtEnd', () => {
    const testList = new LinkedList();
    testList.insertAtEnd(1);
    expect(testList.head.value).toEqual(1);

    testList.insertAtEnd(3);
    expect(testList.head.value).toEqual(1);
    expect(testList.head.next.value).toEqual(3);

    testList.insertAtEnd(8);
    expect(testList.head.value).toEqual(1);
    expect(testList.head.next.value).toEqual(3);
    expect(testList.head.next.next.value).toEqual(8);

    testList.insertAtEnd(2);
    expect(testList.head.value).toEqual(1);
    expect(testList.head.next.value).toEqual(3);
    expect(testList.head.next.next.value).toEqual(8);
    expect(testList.head.next.next.next.value).toEqual(2);
  });

  it('#kthFromEnd', () => {
    const testList = new LinkedList();
    testList.insertAtEnd(1);
    testList.insertAtEnd(3);
    testList.insertAtEnd(8);
    testList.insertAtEnd(2);    

    expect(testList.kthFromEnd()).toBe(null);
    expect(testList.kthFromEnd(0).value).toEqual(2);
    expect(testList.kthFromEnd(2).value).toEqual(3);
  });
});
