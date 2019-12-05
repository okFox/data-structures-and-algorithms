const {
  insertShiftArray,

} = require('../challenges/array-shift');

describe('array-shift', () => {
  it('takes a value and inserts in the middle of an array', () => {
    console.log(insertShiftArray([2, 4, 6, 8], 5));
    expect(insertShiftArray([2, 4, 6, 8], 5)).toEqual([2, 4, 5, 6, 8]);
    console.log(insertShiftArray([4, 8, 15, 23, 42], 16));
    expect(insertShiftArray([4, 8, 15, 23, 42], 16)).toEqual([4, 8, 15, 16, 23, 42]);
  });
});
