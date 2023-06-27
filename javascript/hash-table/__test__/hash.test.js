'use strict';

const { HashTable } = require('../hash');

describe('HashTable Tests', () => {
  test('proof of life', () => {
    expect(true).toBe(true);
  });

  test('Setting a key/value to your hashtable results in the value being in the data structure', () => {
    const table = new HashTable;
    table.hash('Emmanuel');
    table.set('Emmanuel', 'this is me');
    expect(table.has('Emmanuel')).toBe(true);
  });

  test('Retrieving based on a key returns the value stored', () => {
    const table = new HashTable;
    table.hash('Emmanuel');
    table.set('Emmanuel', 'this is me');
    expect(table.get('Emmanuel')).toBe('this is me');
  });

  test('Successfully returns null for a key that does not exist in the hashtable', () => {
    const table = new HashTable;
    expect(table.get('Emmanuel')).toBe(undefined);
  });

  test('Successfully returns a list of all unique keys that exist in the hashtable', () => {
    const table = new HashTable(1024);
    table.hash('Emmanuel');
    table.set('Emmanuel', 'this is me');
    table.hash('Manny');
    table.set('Manny', 'this is also me');
    table.hash('Pablo');
    table.set('Pablo', 'this is not me');
    let keys = table.keys();
    console.log('testKeys:', keys);
    expect(keys).toEqual(['Manny', 'Emmanuel','Pablo']);
  });

  test('Successfully handle a collision within the hashtable', () => {
    const table = new HashTable(1024);
    table.set('Emmanuel', 'this is me');
    let result = table.get('Emmanuel');
    expect(result).toEqual('this is me');
    table.set('Emmanuel', 'exact copy');
    result = table.get('Emmanuel');
    expect(result).toEqual('exact copy');
  });

  test('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    const table = new HashTable(1024);
    table.set('Emmanuel', 'this is me');
    table.set('Emmanuel', 'a change');
    table.set('Emmanuel', 'another change');
    table.set('Emmanuel', 'more changes');
    table.set('Emmanuel', 'the final change');
    let result = table.get('Emmanuel');
    expect(result).toEqual('the final change');
  });

  test('Successfully hash a key to an in-range value', () => {
    const table = new HashTable(1024);
    let hashNumber = table.hash('Emmanuel');
    expect(hashNumber).toEqual(684);
  });
});
