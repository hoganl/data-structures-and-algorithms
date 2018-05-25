'use strict';

import Queue from 'queue-fifo';

const findMatches = (tree, value) => {
  if (!tree.root) {
    return undefined;
  }

  const matchesQueue = new Queue();
  matchesQueue.enqueue(tree.root);

  let currentNode = null;

  while (!matchesQueue.isEmpty()) {
    currentNode = matchesQueue.dequeue();

    for (let i = 0; i < currentNode.children.length; i++) {
      if (currentNode.value === value) {
        matchesQueue.enqueue(currentNode.children[i]);
      }
    }
  }
  return matchesQueue;
};

export default findMatches;
