'use strict';

const { Queue } = require('../index');

describe('Queue Test', () => {

  test('Can successfully enqueue into a queue', () => {
    let queue = new Queue();
    queue.enqueue(1);

    expect(queue.peek()).toEqual(1);
  });

  test('Can successfully enqueue multiple values into a queue', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.isEmpty()).toEqual(false);
    expect(queue.peek()).toEqual(1);
  });

  test('Can successfully dequeue out of a queue the expected value', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.peek()).toEqual(2);
  });

  test('Can successfully peek into a queue, seeing the expected value', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.peek()).toEqual(1);
  });

  test('Can successfully empty a queue after multiple dequeues', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    queue.dequeue();
    queue.dequeue();
    queue.dequeue();

    expect(queue.isEmpty()).toEqual(true);
  });

  test('Can successfully instantiate an empty queue', () => {
    let queue = new Queue();

    expect(queue.isEmpty()).toEqual(true);
  });

  test('Calling dequeue or peek on empty queue raises exception',() => {
    let queue = new Queue();

    expect(queue.dequeue).toEqual(Error);
  });
});
