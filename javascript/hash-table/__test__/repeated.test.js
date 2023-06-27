'use strict';

const { HashTable } = require('../hash');

describe('Reapeated Words in hash table', () => {
  test('detect repeated words in an string', () => {
    const table = new HashTable;
    table.set('princess', 'Once upon a time, there was a brave princess who');
    expect(table.repeatedWords('princess')).toStrictEqual('a');
  });

  test('no repeating words', () => {
    const table = new HashTable;
    table.set('no', 'there are no repeated words in this sentence');
    expect(table.repeatedWords('no')).toStrictEqual(null);
  });
});
