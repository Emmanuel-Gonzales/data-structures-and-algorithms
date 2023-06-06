'use strict';

const { Tree, Node } = require('./index');

describe('Code Challenge', () => {
  let tree;

  beforeEach(() => {
    tree = new Tree();
  });

  test('max tree function', () => {
    tree.root = new Node(10);
    tree.root.left = new Node(5);
    tree.root.right = new Node(15);
    tree.root.left.left = new Node(1);
    tree.root.left.right = new Node(8);
    tree.root.right.right = new Node(17);

    expect(tree.maxOrder).toEqual(17);
  });
});
