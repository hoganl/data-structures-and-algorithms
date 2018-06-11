'use strict';

const printLevelOrder = (tree) => {
  if (!tree.root) {
    return undefined;
  }

  let printTree = '';
  const treeQueue = [];
  treeQueue.push(tree.root);

  let prevLevel = -1;
  let currentNode = null;
  
  while (treeQueue.length > 0) {
    currentNode = treeQueue.shift();
    
    if (currentNode.level > prevLevel) {
      printTree += `\n${currentNode.value}`;
      prevLevel = currentNode.level;
    } else {
      printTree += currentNode.value;
    }
  
    for (let i = 0; i < currentNode.children.length; i++) {
      treeQueue.push(currentNode.children[i]);
    }
  }

  return printTree;
};

export default printLevelOrder;
