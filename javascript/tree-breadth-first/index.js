'use strict';

const { Node, Tree } = require('../trees/index');
const { Queue } = require('../stack-and-queue/index');


function breadthFirst(tree){
  let queue = new Queue;
  let outputArray = [];
  let current = tree.root;
  queue.enqueue(current);
  console.log('runtest');
  while(queue.isEmpty()){
    console.log(current);
    current = queue.dequeue();
    outputArray.push(current.value);
    if(current.left){
      queue.enqueue(current.left);
    }
    if(current.right){
      queue.enqueue(current.right);
    }
  }
  return outputArray;
}

module.exports = { breadthFirst };
