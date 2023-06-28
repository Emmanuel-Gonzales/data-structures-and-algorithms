'use strict';

class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
  }

  hash(key) {
    let characters = key.split('');
    let asciSum = characters.reduce((sum, character) => {
      return sum + character.charCodeAt(0);
    }, 0);
    console.log('asciSum:', asciSum);

    let initialHash = asciSum * 599;
    return initialHash % this.size;
  }

  set(key, value) {
    let position = this.hash(key);

    let data = { [key]: value };

    //   if (this.buckets[position]){
    //     let bucket = this.buckets[position];
    //     bucket.add(data);
    //   }else{
    //     let bucket = new LinkedList();
    //     bucket.add(data);
    //     this.buckets[position] = bucket;
    //   }
    // }

    this.buckets[position] = data;
  }

  get(key) {
    let position = this.hash(key);
    if (this.buckets[position]) {
      console.log(this.buckets[position]);
      return this.buckets[position][key];
    }
  }

  has(key) {
    let position = this.hash(key);
    let result = this.buckets[position] ? true : false;
    return result;
  }

  keys() {
    let results = this.buckets.reduce((keysArr, bucket) => {
      if (bucket) {
        // keysArr.push(Object.keys(bucket)[0]);
        return [...keysArr, ...Object.keys(bucket)];
      } else {
        return keysArr;
      }
    }, []);
    return results;
  }

  // CODE CHALLANGE 13 "hashmap-repeated-word"
  repeatedWords(key) {
    let str = this.get(key);
    let arr = str.split(' ');
    let repeatedWord = null;

    for (let i = 0; i < arr.length; i++) {
      let word = arr[i];

      if (arr.indexOf(word) !== i) {
        // Found a repeated word
        repeatedWord = word;
      }
    }

    return repeatedWord;
  }
}

const table = new HashTable(1024);

console.log('table', table);

let hashOne = table.hash('Ryan');
let hashTwo = table.hash('Kati');
console.log('hashOne:', hashOne);
console.log('hashTwo:', hashTwo);

table.set('Ryan', 'this is my value');
table.set('kati', 'how do we define values');
table.set('repeatTest', 'Once upon a time, there was a brave princess who');

console.log('updated table:', table);

console.log('get works!', table.get('Ryan'));
console.log('has works!', table.has('Ryan'));
console.log('has works!', table.has('Lucky'));
let keys = table.keys();
console.log('keys:', keys);

console.log('repeated words!', table.repeatedWords('repeatTest'));

module.exports = { HashTable };
