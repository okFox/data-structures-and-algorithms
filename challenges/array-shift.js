// Write a function called insertShiftArray which takes in an array and the value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.

let insertShiftArray = (arr, value) => {
  let shiftedArray = [];
  let middleIndex = Math.ceil(arr.length / 2);
  console.log(middleIndex, value);//?

  return shiftedArray;
};

module.exports = {
  insertShiftArray
};
