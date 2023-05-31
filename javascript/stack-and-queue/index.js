'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
  }

  push(value){
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop(){
    let deletedValue = null;
    if(this.top){
      deletedValue = this.top.value;
      this.top = this.top.next;
    }
    deletedValue;
  }
}

class PseudoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }


  enqueue(value) {
    // Move all elements from stack1 to stack2
    while (!this.stack1.isEmpty()) {
      this.stack2.push(this.stack1.pop());
    }

    // Push the new value to stack1
    this.stack1.push(value);

    // Move all elements back to stack1
    while (!this.stack2.isEmpty()) {
      this.stack1.push(this.stack2.pop());
    }
  }

  dequeue() {
    if (this.stack1.isEmpty()) {
      throw new Error('PseudoQueue is empty');
    }
    return this.stack1.pop();
  }
  peek() {
    if (this.stack1.isEmpty()) {
      throw new Error('PseudoQueue is empty');
    }
    return this.stack1.peek();
  }

  isEmpty() {
    return this.stack1.isEmpty();

  }
}



module.exports = {
  Stack,
  PseudoQueue,
};
