const {
  insertShiftArray,

} = require('../challenges/array-shift');

describe('array-shift', () => {
  it('takes a value and inserts in the middle of an array', () => {
    expect(insertShiftArray([2, 4, 6, 8], 5)).toEqual([2, 4, 5, 6, 8]);
    expect(insertShiftArray([4, 8, 15, 23, 42], 16)).toEqual([4, 8, 15, 16, 23, 42]);
  });
});
