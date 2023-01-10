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
  if (!arr) return null;
  if (typeof arr === 'string') return null;
  if (!arr.length) return null;
  if (arr.some((item) => item < 0 || typeof item === 'string')) return null;

  let result = [];
  const lastIndex = arr.length - 1;
  const lastValue = arr[lastIndex] + 1;
  let extraValue = 1;

  if (lastValue > 9) {
    result.push(lastValue % 10);

    for (let i = lastIndex - 1; i >= 0; i--) {
      const newValue = arr[i] + extraValue;

      if (newValue > 9) {
        result.unshift(newValue % 10);
      } else {
        result.unshift(newValue);
        extraValue = 0;
      }
    }

    if (extraValue) {
      result.unshift(extraValue);
    }
  } else {
    result = [...arr];
    result[lastIndex] = lastValue;
  }

  return result;
}

module.exports = plusOneArray;
