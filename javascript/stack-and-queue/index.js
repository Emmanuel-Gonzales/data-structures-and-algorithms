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
class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(value) {
    let newNode = new Node(value);
    if (this.front) {
      this.back.next = newNode,
    } else {
      this.front = newNode
    }


    this.back = newNode
  }
  dequeue() {
    let removedValue = null;
    if (this.front) {
      removedValue = this.front.value;
      if (this.front === this.back) {
        this.back = null;
      }
      this.front = this.front.next
    }
    return removedValue;
  }

  peek() {
    return this.front.value;
  }

  isEmpty() {
    return this.front === null;
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

class AnimalShelter {
  constructor() {
    this.cats = new Queue();
    this.dogs = new Queue();
  }

  // Define a method called enqueue which takes animal as an argument. Animal can be either a dog or a cat object.
  enqueue(animal) {
    let newAnimal = new Animal(animal.name, animal.species);
    if (newAnimal.species === 'cat') {
      this.cats.enqueue(newAnimal);
    } else if (newAnimal.species === 'dog') {
      this.dogs.enqueue(newAnimal);
    } else {
      return 'Animal must be a cat or a dog';
    }
  }

  // Define a method called dequeue that takes pref as an argument. pref can be either 'dog' or 'cat'.
  dequeue(pref) {
    if (pref === 'cat') {
      return this.cats.dequeue();
    } else if (pref === 'dog') {
      return this.dogs.dequeue();
    } else {
      return null;
    }
  }
}

module.exports = {
  Stack,
  Queue,
  PseudoQueue,
  AnimalShelter,
};

