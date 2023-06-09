'use strict';

const { BinarySearchTree } = require('./index');

describe (`Tree`, () => {
  let bTree;

  beforeEach(() => {
    bTree = new BinarySearchTree();
  });

  test(`Can successfully instantiate an empty tree`, () => {
    expect(bTree.root).toBeNull();
  });

  test(`Can successfully instantiate a tree with a single root node`, () => {
    bTree.add(5);
    expect(bTree.root.value).toEqual(5);
  });

  test(`For a Binary Search Tree, can successfully add a left child and right child properly to a node`, () => {
    bTree.add(3);
    bTree.add(2);
    bTree.add(1);
    bTree.add(6);

    expect(bTree.root.value).toEqual(3);
    expect(bTree.root.left.value).toEqual(2);
    expect(bTree.root.left.left.value).toEqual(1);
    expect(bTree.root.right.value).toEqual(6);
  });

  test(`Can successfully return a collection from a pre-order traversal`, () => {
    bTree.add(1);
    bTree.add(2);
    bTree.add(3);

    expect(bTree.preOrder()).toEqual([1, 2, 3]);
  });

  test(`Can successfully return a collection from an in-order traversal`, () => {
    bTree.add(3);
    bTree.add(2);
    bTree.add(1);
    bTree.add(6);


    expect(bTree.inOrder()).toEqual([1, 2, 3, 6]);
  });

  test(`Can successfully return a collection from a post-order traversal`, () => {
    bTree.add(3);
    bTree.add(2);
    bTree.add(1);
    bTree.add(6);

    expect(bTree.postOrder()).toEqual([1, 2, 6, 3]);
  });

  test(`Returns False for the contains method, given an existing or non-existing node value`, () => {
    bTree.add(1);
    bTree.add(2);
    bTree.add(3);
    expect(bTree.containsValue(4)).toBeFalsy();
  });

  test(`Returns True for the contains method, given an existing node value`, () => {
    bTree.add(1);
    bTree.add(2);
    bTree.add(3);
    expect(bTree.containsValue(2)).toBeTruthy();
  });

});
