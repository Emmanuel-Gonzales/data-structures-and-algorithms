'use strict';

const mergeSort = require('../merge');

describe('mergeSort', () => {
  it('sort array', () => {
    let arr = [3, 2, 6, 1, 5, 4, 5];
    mergeSort(arr);
    expect(arr).toEqual([1, 2, 3, 4, 5, 5, 6]);
  });
});
