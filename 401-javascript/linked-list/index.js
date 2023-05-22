
'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}


insertBefore(value, newValue) {
  if (nodeToInsertBefore === this.head) {
    nodeToInsert.next = this.head;
    this.head = nodeToInsert;
  } else {
    let currentNode = this.head;

    while (currentNode !== null && currentNode.next !== nodeToInsertBefore) {
      currentNode = currentNode.next;
    }

    if (currentNode !== null) {
      // If the node to insert before is found, update the current node to point to the new node
      nodeToInsert.next = currentNode.next;
      currentNode.next = nodeToInsert;
    }
  }
}
