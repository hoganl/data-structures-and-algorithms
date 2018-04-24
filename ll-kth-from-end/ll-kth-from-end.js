'use strict';

const Node = require('./node');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insertAtEnd(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      return this;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
    return this;
  }

  kthFromEnd(k) {
    let currentNode = this.head;

    if (!this.head) {
      return new Error('__ERROR__ The list is empty');
    }

    let length = 0;
    let count = 0;
    while (currentNode.next) {
      length += 1;
      currentNode = currentNode.next;
    }
    
    const position = length - k;
    currentNode = this.head;
    while (currentNode.next) {
      count += 1;
      currentNode = currentNode.next;
      if (count === position) {
        return currentNode;
      }
    }
    return null;
  }
};
