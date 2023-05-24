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


  // kth from the end
  it('should return the value of the node that is k places from the tail', () => {
    // Create a linked list with known values
    const linkedList = new LinkedList();
    const node1 = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(3);
    const node4 = new Node(4);
    const node5 = new Node(5);
    linkedList.head = node1;
    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node5;
    linkedList.tail = node5;
    linkedList.length = 5;

    // Test different values of k
    expect(linkedList.kthFromEnd(1)).toBe(5);
    expect(linkedList.kthFromEnd(3)).toBe(3);
    expect(linkedList.kthFromEnd(5)).toBe(1);
  });

  it('should return null for invalid values of k', () => {
    // Create a linked list with known values
    const linkedList = new LinkedList();
    const node1 = new Node(1);
    const node2 = new Node(2);
    linkedList.head = node1;
    node1.next = node2;
    linkedList.tail = node2;
    linkedList.length = 2;

    // Test invalid values of k
    expect(linkedList.kthFromEnd(0)).toBeNull();
    expect(linkedList.kthFromEnd(3)).toBeNull();
    expect(linkedList.kthFromEnd(-1)).toBeNull();
  });

  // zip tests
  test('Check if the two lists are combinded', () => {
    const listOne = new LinkedList();
    const listTwo = new LinkedList();

    listOne.append('a');
    listOne.append('b');
    listOne.append('c');

    listTwo.append('1');
    listTwo.append('2');
    listTwo.append('3');

    const zipList = zippedList(listOne, listTwo);

    expect(zipList.toString()).toEqual('a -> 1 -> b -> 2 -> c -> 3 -> NULL');
  });
});

