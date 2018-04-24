'use strict';

const Node = require('../node');

describe('node.js', () => {
  it('default constructor', () => {
    const node = new Node(0);

    expect(node.value).toEqual(0);
    expect(node.next).toBeNull();
  });
});
