const { AnimalShelter } = require('../challenges/data structures/fifo-animal-shelter');
const { Node }  = require('../challenges/data structures/fifo-animal-shelter');
let animalShelter;

beforeEach(() => animalShelter = new AnimalShelter());

describe('Queue where FIFO is based on preference', () => {
  const node = new Node('cat');
  it('Queue accepts node with a value of "dog" or "cat"', () => {
    expect(animalShelter.enqueue(node)).toMatchObject({ 'next': null, 'value': 'cat' });
    expect(animalShelter.enqueue(node)).not.toMatchObject({ 'next': null, 'value': 'dog' });
  });
}); 

