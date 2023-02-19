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

  if (arr.every((el) => typeof el === 'number' && !Number.isNaN(el) && el >= 0 && el <= 9)) {
    const newArr = [...arr];
    let add = true;

    for (let i = newArr.length - 1; i >= 0 && add; i--) {
      newArr[i] += 1;

      if (newArr[i] === 10) {
        newArr[i] = 0;
      } else {
        add = false;
      }

      if (i === 0 && add) newArr.unshift(1);
    }

    return newArr;
  }

  return null;
}

module.exports = plusOneArray;
