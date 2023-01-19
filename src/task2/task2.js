/* eslint-disable no-param-reassign */
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

function plusOneArray(arr) {
  if (!Array.isArray(arr) || !arr.length) {
    return null;
  }
  for (let i = arr.length - 1; i > -1; i -= 1) {
    if (arr[i] < 0 || Number.isNaN(arr[i]) || typeof (arr[i]) !== 'number') {
      return null;
    }
    if (i === arr.length - 1) {
      arr[i] += 1;
      do {
        if (i === 0 && arr[i] > 9) {
          arr[i] = 1;
          arr.push(0);
        }
        if (arr[i] > 9) {
          arr[i] = 0;
          arr[i - 1] += 1;
        }
        i -= 1;
      } while (arr[i] > 9);
    }
  }

  return arr;
}

module.exports = plusOneArray;
