'use strict';

import KAryNode from '../kary-node';
import KAryTree from '../kary-tree';
import printLevelOrder from '../print_level_order';

const A = new KAryNode('A');
A.appendChild('B');
A.appendChild('C');
A.appendChild('D');
A.appendChild('E');
A.appendChild('F');
A.appendChild('G');

A.children[1].appendChild('H');
A.children[1].appendChild('I');
A.children[1].appendChild('J');

A.children[4].appendChild('K');
A.children[4].appendChild('L');

A.children[6].appendChild('M');

A.children[1].children[1].appendChild('N');
A.children[1].children[1].appendChild('O');

A.children[4].children[1].appendChild('P');

A.children[4].children[2].appendChild('Q');

const kAryTree = new KAryTree(A);

describe('#printLevelOrder', () => {
  // test('should return undefined if no tree', () => {
  //   const emptyTree = new KAryTree(null);
  //   expect(printLevelOrder(emptyTree)).toEqual(undefined);
  // });

  test('should return a string of each level', () => {
    console.log(kAryTree);
    expect(printLevelOrder(kAryTree)).toEqual('ABCDEFGHIJKLMNOPQ');
  });

  test('should return type of string', () => {
    expect(typeof printLevelOrder(kAryTree)).toEqual('string');
  });
});
