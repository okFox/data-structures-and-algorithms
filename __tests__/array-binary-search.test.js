const {
  arrayBinarySearch,
  
} = require('../challenges/array-binary-search');

describe('binarySearchArray', () => {
  it('returns the index of the element that matches the key', () => {
    expect(arrayBinarySearch([4, 8, 15, 16, 23, 42], 15)).toEqual(2);
    expect(arrayBinarySearch([11, 22, 33, 44, 55, 66, 77], 90)).toEqual(-1);
  });
}); 
