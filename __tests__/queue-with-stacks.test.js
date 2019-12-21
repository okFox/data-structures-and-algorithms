const { PseudoQueue } = require('../challenges/data structures/queue-with-stacks');

let pseudoQueue;

beforeEach(() => {
  pseudoQueue = new PseudoQueue(5);
});

describe('PseudoQueue operation', () => {
  it('can instantiate a PseudoQueue.', () => {
    expect(pseudoQueue.pushStack.top.value).toEqual(5);
    expect(pseudoQueue.pullStack.top).toEqual(null);
  });
  it('can enqueue a value', () => {
    pseudoQueue.enqueue(6);
    expect(pseudoQueue.pushStack.top.value).toEqual(6);
  });
  it('can dequeue a value and reorder if needed', () => {
    pseudoQueue.enqueue(3);
    pseudoQueue.enqueue(9);
    expect(pseudoQueue.pushStack.top.value).toEqual(9);
    expect(pseudoQueue.dequeue()).toEqual(5);
    expect(pseudoQueue.dequeue()).toEqual(3);
  });
});
