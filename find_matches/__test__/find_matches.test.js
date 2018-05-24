'use strict';

import KAryNode from '../kary-node';
import KAryTree from '../kary-tree';
import findMatches from '../find_matches';

const one = new KAryNode(1);
one.appendChild(1);
one.appendChild(3);
one.appendChild(4);

one.children[1].appendChild(1);
one.children[1].appendChild(1);
one.children[1].appendChild(7);

one.children[1].children[1].appendChild(1);

const kAryTree = new KAryTree(one);

describe('#findMatches', () => {
  test('should return a queue with all of the matches', () => {
    expect(findMatches(kAryTree)).toEqual();
  });
});
