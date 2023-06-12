'use strict';

const {KaryTree, fizzBuzz } = require('./index');

describe('Kary', () => {
  test('Proof of Life', () => {
    expect(true).toBe(true);
  });

  test('FizzBuzz', () => {
    let KTree = new KaryTree();
    KTree.insert(10);
    KTree.insert(5);
    KTree.insert(15);
    KTree.insert(3);
    KTree.insert(8);
    KTree.insert(17);

    let fizzTree = fizzBuzz(KTree);
    expect(fizzTree.root.value).toBe('buzz');
  });
});
