'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class KaryNode {
  constructor(value, k){
    this.value = value;
    this.children = new Array(k).fill(null);
  }
}

class Tree {
  constructor(){
    this.root = null;
  }

  preOrder(){
    const results = [];

    const transverse = (node) => {
      results.push(node.value);

      if(node.left){
        transverse(node.left);
      }

      if(node.right){
        transverse(node.right);
      }

    };
    transverse(this.root);
    return results;
  }

  inOrder(){
    const results = [];

    const transverse = (node) => {

      if(node.left){
        transverse(node.left);
      }
      results.push(node.value);

      if(node.right){
        transverse(node.right);
      }

    };
    transverse(this.root);
    return results;
  }

  postOrder(){
    const results = [];

    const traverse = (node) => {
      if(node.left){
        traverse(node.left);
      }
      if(node.right){
        traverse(node.right);
      }
      results.push(node.value);
    };
    traverse(this.root);
    return results;
  }

  maxOrder() {
    let max;

    const transverse = (node) => {
      if (node.left || node.right) {
        if (node.left.value > node.right.value) {
          console.log(node.left);
          transverse(node.left);
        }
        if (node.left.value > node.right.value) {
          console.log(node.left);
          transverse(node.right);
        }
        if (node.left === null && node.right === null) {
          return max = node.value;
        }
      }
    };
    transverse(this.root);
    return max;
  }
}

class BinarySearchTree extends Tree {
  constructor() {
    super();
  }

  add(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    const add = (node) => {
      if (value < node.value) {
        if (node.left === null) {
          node.left = newNode;
          return this;
        } else if (node.left !== null) {
          return add(node.left);
        }
      } else if (value > node.value) {
        if (node.right === null) {
          node.right = newNode;
          return this;
        } else if (node.right !== null) {
          return add(node.right);
        }
      } else {
        return null;
      }
    };
    add(this.root);
  }

  containsValue(value) {
    if (this.root === null) {
      return false;
    }

    let current = this.root;
    let found = false;

    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) {
      return false;
    }
    return true;
  }

}

let tree = new Tree();
tree.root = new Node(10);
tree.root.left = new Node(5);
tree.root.right = new Node(15);
tree.root.left.left = new Node(1);
tree.root.left.right = new Node(8);
tree.root.right.right = new Node(17);

let preResults = tree.preOrder();
console.log('PreOrder',preResults);

let inResults = tree.inOrder();
console.log('InOrder',inResults);

let postResults = tree.postOrder();
console.log('PostOrder',postResults);

module.exports = { Node, KaryNode, Tree, BinarySearchTree };
