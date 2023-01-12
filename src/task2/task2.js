/**
 *
 * Given an array of integers of any length, return an array
 * that has 1 added to the value represented by the array.
 * the array can't be empty
 * only non-negative, single digit integers are allowed
 * Return null (or your language's equivalent) for invalid inputs.
 *
 * Examples
 *
 * Valid arrays
 * [4, 3, 2, 5] would return [4, 3, 2, 6]
 * [1, 2, 3, 9] would return [1, 2, 4, 0]
 * [9, 9, 9, 9] would return [1, 0, 0, 0, 0]
 * [0, 1, 3, 7] would return [0, 1, 3, 8]
 *
 * Invalid arrays
 * [0, 1, -3, 7] would return null
 * [] would return null
 * [1, -9] is invalid because -9 is not a non-negative integer
 * [1, 2, 33] is invalid because 33 is not a single-digit integer
 *
 * @param {Array} arr
 *
 * @return {Array}
*/

function isNumberArray(arr) {
  // write code here
  if (!Array.isArray(arr)) {
    return false;
  }
  if (arr.length === 0) {
    return false;
  }
  function isNumber(element) {
    if (!Number.isNaN(+element) && typeof element === 'number') {
      return true;
    }

    return false;
  }

  return arr.every(isNumber);
}

function plusOneArray(arr) {
  // write code here
  if (!isNumberArray(arr)) {
    return null;
  }
  if (!arr.every((elem) => (elem >= 0 && elem < 10))) {
    return null;
  }

  let stringArr = arr.join('');

  stringArr = +stringArr + 1;

  const newArr = Array.from(String(stringArr), (elem) => Number(elem));

  if (arr.length > newArr.length) {
    newArr.unshift(0);
  }

  return (newArr);
}

module.exports = plusOneArray;
