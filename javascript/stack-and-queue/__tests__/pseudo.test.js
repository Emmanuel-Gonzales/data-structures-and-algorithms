const { PseudoQueue } = require('./index');

describe('PseudoQueue', () => {
  let queue;

  beforeEach(() => {
    queue = new PseudoQueue();
  });

  it('should successfully enqueue into a queue', () => {
    queue.enqueue(10);
    expect(queue.peek()).toBe(10);
  });

  it('should successfully enqueue multiple values into a queue', () => {
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
    expect(queue.peek()).toBe(10);
  });

  it('should successfully dequeue out of a queue the expected value', () => {
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
    expect(queue.dequeue()).toBe(10);
    expect(queue.peek()).toBe(20);
  });

  it('should successfully peek into a queue, seeing the expected value', () => {
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
    expect(queue.peek()).toBe(10);
  });

  it('should raise an exception when calling dequeue on an empty queue', () => {
    expect(() => {
      queue.dequeue();
    }).toThrow();
  });

  it('should raise an exception when calling peek on an empty queue', () => {
    expect(() => {
      queue.peek();
    }).toThrow();
  });

  it('should return true if the queue is empty', () => {
    expect(queue.isEmpty()).toBe(true);
  });

  it('should return false if the queue is not empty', () => {
    queue.enqueue(10);
    expect(queue.isEmpty()).toBe(false);
  });
});
