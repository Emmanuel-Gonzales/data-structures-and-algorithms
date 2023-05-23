'use strict';

const LinkedList = require('../index');

describe('Linked List', () => {
  test('works', () => {
    expect(true).toBeTruthy();
  });

  test('Can successfully instantiate an empty linked list', () => {
    const list = new LinkedList();

    expect(list.head).toBeNull();
  });

  test('Can properly insert into the linked list', () => {
    const list = new LinkedList();
    list.insert(1);

    expect(list.head.value).toEqual(1);
    expect(list.head.next).toBeNull();
  });

  test('The head property will properly point to the first node in the linked list', () => {
    const list = new LinkedList();

    list.insert(2);
    expect(list.head.value).toEqual(2);
    expect(list.head.next).toBeNull();

    list.insert(1);
    expect(list.head.value).toEqual(1);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next).toBeNull();

    list.append('a');
    expect(list.head.next.next.value).toEqual('a');
  });

  test('Will return true if a specific value is found within the linked list', () => {
    const list = new LinkedList();
    list.append('a');
    list.append('b');
    list.append('c');

    expect(list.includes('a')).toEqual(true);
  });

  test('Will return false if a specific value is NOT found within the linked list', () => {
    const list = new LinkedList();
    list.append('a');
    list.append('b');
    list.append('c');

    expect(list.includes('f')).toEqual(false);
  });

  test('Can properly return a collection of all values in the linked list', () =>{
    const list = new LinkedList();
    list.append('a');
    list.append('b');
    list.append('c');

    expect(list.toString()).toEqual('a -> b -> c -> NULL');
  });
});

