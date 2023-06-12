const LinkedList = require('../index');

describe('Linked List', () => {
  test('works', () => {
    expect(true).toBeTruthy();
  });

  test('Append node to tist', () => {
    const list = new LinkedList();
    list.append('a');
    list.append('b');
    list.append('c');

    expect(list.head.value).toEqual('a');
    expect(list.head.next.next.value).toEqual('c');
  });

  test('InsertBefore', () => {
    const list = new LinkedList();
    list.append('a');
    list.append('b');
    list.append('c');

    list.insertBefore('b', 'q');

    expect(list.head.next.value).toEqual('q');
  });

  test('InsertAfter', () => {
    const list = new LinkedList();
    list.append('a');
    list.append('b');
    list.append('c');

    list.insertAfter('b', 'q');

    expect(list.head.next.next.value).toEqual('q');
  });
});
