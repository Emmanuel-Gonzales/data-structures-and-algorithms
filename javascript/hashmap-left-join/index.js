'use strict';

const { HashTable } = require('../hash-table/hash');

function leftJoin(map1, map2) {
  let result = [];

  for (let key in map1) {
    let row = [key, map1[key], null];

    if (map2[key]) {
      row[2] = map2[key];
    }

    result.push(row);
  }
}

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

console.log(leftJoin(table1, table2));

module.exports = { leftJoin };
