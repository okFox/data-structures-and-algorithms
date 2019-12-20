const { PseudoQueue } = require('../challenges/data structures/queue-with-stacks');

let pseudoQueue;

beforeEach(() => {
  pseudoQueue = new PseudoQueue(5);
});

describe('PseudoQueue operation', () => {
  it('can instantiate a PseudoQueue with a single node.', () => {

    expect(pseudoQueue.pushStack.top.value).toEqual(5);
  });
  it('can enqueue a value', () => {
    pseudoQueue.enqueue(6);
    expect(pseudoQueue.pushStack.top.value).toEqual(6);
  });
  it('can dequeue a value and manage successive operations', () => {
    pseudoQueue.enqueue(3);
    pseudoQueue.enqueue(9);
    expect(pseudoQueue.pushStack.top.value).toEqual(9);
console.log(pseudoQueue.pushStack);
console.log(pseudoQueue.pullStack);
    expect(pseudoQueue.dequeue()).toEqual(5);
    console.log(pseudoQueue.pushStack);
console.log(pseudoQueue.pullStack);


    // expect(pseudoQueue.toString()).toEqual('15 -> 10');
    // pseudoQueue.enqueue(5);
    // pseudoQueue.enqueue(4);
    // pseudoQueue.enqueue(3);
    // expect(pseudoQueue.toString()).toEqual('3 -> 4 -> 5 -> 15 -> 10');
    // pseudoQueue.dequeue();
    // pseudoQueue.dequeue();
    // expect(pseudoQueue.toString()).toEqual('3 -> 4 -> 5');
  });
});
