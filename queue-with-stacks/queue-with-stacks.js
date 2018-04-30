'use strict';

class Queue {
  constructor() {
    this.stackA = [];
    this.stackB = [];
  }

  enqueue(value) {
    this.stackA.push(value);
  }
  
  dequeue() {
    for (let i = 0; i < this.stackA.length + 1; i++) {
      const temp = this.stackA.pop();
      this.stackB.push(temp);
    }
    console.log(this.stackB);
    const popped = this.stackB.pop();
    console.log(popped);
    for (let i = 0; i < this.stackB.length; i++) {
      const temp2 = this.stackB.pop();
      this.stackA.push(temp2);
    }
    return popped;
  }
}

module.exports = Queue;
