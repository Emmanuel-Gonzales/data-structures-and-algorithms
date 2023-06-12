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

  insertBefore(value, valueBefore) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else if (this.head.value === valueBefore) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      return 'error'
    }
  }

  insertAfter(value, newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      throw new Error("Can't insert after in an empty list")
    }
    let current = this.head;
    while (current !== null) {
      if (current.value === value) {
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
      current = current.next;
    }
    throw new Error('Value not found');
  }
}




module.exports = {Node, LinkedList};
