'use strict';

const { HashTable } = require('../hash-table/hash');
const { Tree, Node } = require('../trees/index');

let tree1 = new Tree();
tree1.root = new Node(10);
tree1.root.left = new Node(6);
tree1.root.right = new Node(15);
tree1.root.left.left = new Node(1);
tree1.root.left.right = new Node(8);
tree1.root.right.right = new Node(17);

let tree2 = new Tree();
tree2.root = new Node(10);
tree2.root.left = new Node(5);
tree2.root.right = new Node(15);
tree2.root.left.left = new Node(19);
tree2.root.left.right = new Node(8);
tree2.root.right.right = new Node(7);


function treeIntersection(tree1, tree2) {
  let values = [];
  let table = new HashTable(1024);
  let current1 = tree1.root;
  let current2 = tree2.root;
  table.set(current1.value.toString());
  const transverse = (node) => {
    if(node.left) {
      table.set(node.left.value.toString());
      transverse(node.left);
    }
    if(node.right) {
      table.set(node.right.value.toString());
      transverse(node.right);
    }
  };
  transverse(current1);

  let keys = table.keys();
  if(keys.includes(current2.value.toString())){
    values.push(current2.value);
  }
  const transverse2 = (node) => {
    if(node.left) {
      let strNum = node.left.value.toString();
      if(keys.includes(strNum)){
        values.push(node.left.value);
      }
      transverse2(node.left);
    }
    if(node.right) {
      let strNum = node.right.value.toString();
      if(keys.includes(strNum)){
        values.push(node.right.value);
      }
      transverse2(node.right);
    }
  };
  transverse2(current2);
  return values;
}

console.log(treeIntersection(tree1, tree2));

module.exports = { treeIntersection };
