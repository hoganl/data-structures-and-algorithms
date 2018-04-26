'use strict';

const LinkedList = require('../../ll_insertions/ll_insertions');
const mergeLists = require('../ll-merge');

describe('ll-merge.js', () => {
  it('#mergeLists', () => {
    const L1 = new LinkedList();
    L1.append(1);
    L1.append(3);
    L1.append(5);   

    const L2 = new LinkedList();
    L2.append(2);
    L2.append(4);
    L2.append(6);
    L2.append(7);

    const L3 = new LinkedList();
    L3.append(1);
    L3.append(2);
    L3.append(3);
    L3.append(4);
    L3.append(5);
    L3.append(6);
    L3.append(7);
    
    expect(mergeLists(L1, L2)).toMatchObject(L3);
    
    const L4 = new LinkedList();
    L4.append(1);
    L4.append(3);
    L4.append(5);   
    L4.append(7);

    const L5 = new LinkedList();
    L5.append(2);
    L5.append(4);
    L5.append(6);

    const L6 = new LinkedList();
    L6.append(1);
    L6.append(2);
    L6.append(3);
    L6.append(4);
    L6.append(5);
    L6.append(6);
    L6.append(7);
    
    expect(mergeLists(L4, L5)).toMatchObject(L6);

    const L7 = new LinkedList();
    L7.append(1);
    L7.append(3);
    L7.append(5);   

    const L8 = new LinkedList();
    L8.append(2);
    L8.append(4);
    L8.append(6);

    const L9 = new LinkedList();
    L9.append(1);
    L9.append(2);
    L9.append(3);
    L9.append(4);
    L9.append(5);
    L9.append(6);
    
    expect(mergeLists(L7, L8)).toEqual(L9);
  });
});
