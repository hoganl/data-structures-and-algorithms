'use strict';
 
module.exports = function mergeLists(L1, L2) {
  let curr1 = L1.head;
  let curr2 = L2.head;

  while (curr1 && curr2) {
    const temp1 = curr1.next;
    const temp2 = curr2.next;
    curr1.next = curr2;

    if (temp1 !== null) {
      curr1.next.next = temp1;
    }

    curr1 = temp1;
    curr2 = temp2;
  }
  return L1;
};
