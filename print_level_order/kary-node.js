'use strict';

export default class KAryNode {
  constructor(value, level) {
    this.value = value;
    this.children = [];
    this.level = level;
  }

  appendChild(value) {
    const nodeToAppend = new KAryNode(value, this.level + 1);
    this.children.push(nodeToAppend);
  }
}

