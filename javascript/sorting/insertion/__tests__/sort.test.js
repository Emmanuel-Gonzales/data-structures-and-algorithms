'use strict';

const { insertionSort } = require('../insertion');

describe('Testing the Sorting functionality', () => {
  test('Insertion Sort', () => {
    let array = [5,3,1,2,4];
    expect(insertionSort(array)).toEqual([1,2,3,4,5]);
  });
});
