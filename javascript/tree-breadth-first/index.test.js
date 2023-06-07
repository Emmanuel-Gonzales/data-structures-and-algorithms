'use strict';

'use strict';

const { breadthFirst } = require('./index');
const { Tree, Node } = require('../trees/index');

describe(`Tree`, () => {
  let tree;

  beforeEach(() => {
    tree = new Tree();
  });

  test('Breadth First', () => {
    let tree = new Tree();
    tree.root = new Node(10);
    tree.root.left = new Node(5);
    tree.root.right = new Node(15);
    tree.root.left.left = new Node(1);
    tree.root.left.right = new Node(8);
    tree.root.right.right = new Node(17);

    expect(breadthFirst(tree)).toEqual([10, 5, 15, 1, 8, 17]);
  });
});
