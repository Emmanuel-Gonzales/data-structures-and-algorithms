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

module.exports = { Stack };
