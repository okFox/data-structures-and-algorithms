// Write a function called insertShiftArray which takes in an array and the value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.

const insertShiftArray = (arr, value) => {

  const shiftedArray = [];

  let middleIndex = Math.ceil((arr.length) / 2);
  for(let i = 0; i < arr.length + 1; i++) {
    if(i < middleIndex) {
      shiftedArray[i] = arr[i];
    } else if(i === middleIndex) {
      shiftedArray[i] = value;
    } else if(i > middleIndex) {
      shiftedArray[i] = arr[i - 1];
    }
    
  }
  return shiftedArray;
}; 

module.exports = {
  insertShiftArray
};
