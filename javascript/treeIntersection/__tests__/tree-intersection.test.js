'use strict';

const { treeIntersection } = require('../tree-intersection');
// const { HashTable } = require('../../hash-table/hash');
const { Tree, Node } = require('../../trees/index');

describe('treeIntersection', () => {
  test('Function works as expected', () => {
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

    expect(treeIntersection(tree1, tree2)).toEqual([ 10, 8, 15 ]);
  });

  test('No matching nodes', () => {
    let tree1 = new Tree();
    tree1.root = new Node(120);
    tree1.root.left = new Node(6);
    tree1.root.right = new Node(45);
    tree1.root.left.left = new Node(1);
    tree1.root.left.right = new Node(6);
    tree1.root.right.right = new Node(17);

    let tree2 = new Tree();
    tree2.root = new Node(10);
    tree2.root.left = new Node(5);
    tree2.root.right = new Node(15);
    tree2.root.left.left = new Node(19);
    tree2.root.left.right = new Node(8);
    tree2.root.right.right = new Node(7);

    expect(treeIntersection(tree1, tree2)).toEqual([]);
  });
});
