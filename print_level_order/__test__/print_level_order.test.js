'use strict';

import KAryNode from '../kary-node';
import KAryTree from '../kary-tree';
import printLevelOrder from '../print_level_order';

const A = new KAryNode('A', 0);
A.appendChild('B');
A.appendChild('C');
A.appendChild('D');
A.appendChild('E');
A.appendChild('F');
A.appendChild('G');

A.children[0].appendChild('H');
A.children[0].appendChild('I');
A.children[0].appendChild('J');

A.children[3].appendChild('K');
A.children[3].appendChild('L');

A.children[5].appendChild('M');

A.children[0].children[0].appendChild('N');
A.children[0].children[1].appendChild('O');

A.children[3].children[0].appendChild('P');
A.children[3].children[1].appendChild('Q');

const kAryTree = new KAryTree(A);

describe('#printLevelOrder', () => {
  test('should return undefined if no tree', () => {
    const emptyTree = new KAryTree(null);
    expect(printLevelOrder(emptyTree)).toEqual(undefined);
  });

  test('should return a string of each level', () => {
    console.log(kAryTree);
    expect(printLevelOrder(kAryTree)).toEqual('\nA\nBCDEFG\nHIJKLM\nNOPQ');
  });

  test('should return type of string', () => {
    expect(typeof printLevelOrder(kAryTree)).toEqual('string');
  });
});
