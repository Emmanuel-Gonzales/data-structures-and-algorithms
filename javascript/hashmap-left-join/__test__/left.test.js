'use strict';

const { HashTable } = require('../../hash-table/hash');
const { leftJoin } = require('../index');

describe('HashTable Tests', () => {
  test('proof of life', () => {
    expect(true).toBe(true);
  });

  test('Testing the function', () => {
    const table1 = new HashTable(1024);

    table1.set('diligent', 'employed');
    table1.set('fond', 'enamored');
    table1.set('guide', 'usher');
    table1.set('outfit', 'garb');
    table1.set('wrath', 'anger');

    const table2 = new HashTable(1024);
    table2.set('diligent', 'idle');
    table2.set('fond', 'averse');
    table2.set('guide', 'follow');
    table2.set('flow', 'jam');
    table2.set('wrath', 'delight');

    expect(leftJoin(table1, table2)).toBe([
      ['font', 'enamored', 'averse'],
      ['wrath', 'anger', 'delight'],
      ['diligent', 'employed', 'idle'],
      ['outfit', 'garb', null],
      ['guide', 'usher', 'follow']
    ]);
  });

});

