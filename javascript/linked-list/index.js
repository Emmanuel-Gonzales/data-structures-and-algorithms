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

  insert(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  append(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  includes(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      } else {
        current = current.next;
      }
    }
    return false;
  }

  toString() {
    let current = this.head;
    let result = current.value;
    while (current.next) {
      current = current.next;
      result += ' -> ' + current.value;
    }
    result += ' -> NULL';
    return result;
  }
  kthFromEnd(k) {
    if (!this.head || k <= 0) {
      return null;
    }
    let current = this.head;
    let currentTwo = this.head;
    for (let i = 0; i < k; i++) {
      if (current) {
        current = current.next;
      } else {
        return null;
      }
    }
    while (current) {
      currentTwo = currentTwo.next;
      current = current.next;
    }
    return currentTwo.data;
  }

  zippedList(list1, list2) {
    if (!list1.head) return list2;
    if (!list2.head) return list1;
    if (!list1.head && !list2.head) return null;

    let zippedList = new LinkedList();
    let current1 = list1.head;
    let current2 = list2.head;
    let next1 = list1.next;
    let next2 = list2.next;

    while (!list1.next) {
      zippedList.append(current1);
      current1 = next1;

      while (!list2.next) {
        zippedList.append(current2);
        current2 = next2;
      }
    }
    return zippedList;
  }
}

module.exports = LinkedList;
