'use strict';

import Queue from 'queue-fifo';

const printLevelOrder = (tree) => {
  if (!tree.root) {
    return undefined;
  }

  let printTree = '';
  const treeQueue = new Queue();
  let levelQueue = new Queue();
  treeQueue.enqueue(tree.root);
  levelQueue.enqueue(tree.root.value);

  let prevLevel = -1;

  while (treeQueue.length > 0) {
    const temp = treeQueue.dequeue();
    
    if (temp.level > prevLevel) {
      printTree += levelQueue;
      levelQueue = new Queue();
      prevLevel = temp.level;
    }

    if (temp.left !== null) {
      temp.left.level = temp.level + 1;
      treeQueue.enqueue(temp.left);
      levelQueue.enqueue(temp.left.value);
    }

    if (temp.right !== null) {
      temp.right.level = temp.level + 1;
      treeQueue.enqueue(temp.right);
      levelQueue.enqueue(temp.right.value);
    }
  }

  if (levelQueue.length > 0) {
    printTree += levelQueue;
  }

  return printTree;
};

export default printLevelOrder;
