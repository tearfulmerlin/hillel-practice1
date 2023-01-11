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
 * [0, 1, -3, 7] would return null
 * [] would return null
 *
 * Invalid arrays
 *
 * [1, -9] is invalid because -9 is not a non-negative integer
 * [1, 2, 33] is invalid because 33 is not a single-digit integer
 *
 * @param {Array} arr
 *
 * @return {Array}
 */

function plusOneArray(arr) {
  /*if (!isInputIsNonEmptyArray(arr)) {
    return null;
  }

  const isNumber = num => typeof num === 'number';
  const isIntSingleDigit = num => Number.isInteger(num) && num >= 0 && num < 10;

  let resultArr = [];
  let i = arr.length;
  let num;
  while (i-- > 0) {
    num = arr[i];
    if (!isNumber(num) || !isIntSingleDigit(num)) {
      return null;
    }

    if (num === 9) {
      resultArr[i] = 0;
      if (i === 0) {
        resultArr.unshift(1);
        break;
      }
    } else {
      resultArr[i] = num + 1;
      while (--i > -1) {
        num = arr[i];
        if (!isNumber(num) || !isIntSingleDigit(num)) {
          return null;
        }
        resultArr[i] = arr[i];
      }
      break;
    }
  }

  return resultArr;

  function isInputIsNonEmptyArray(arr) {
    return Array.isArray(arr) && arr.length > 0;
  }
}*/
  if (!Array.isArray(arr) || arr.length === 0 || arr.some(el => typeof el === 'string' || el < 0 || el > 9)) {
    return null;
  }

  const result = [];
  let num = 1;
  for (let i = 1; i <= arr.length; i++) {
    const element = arr[arr.length - i];
    if (element === 9) {
      if (i === arr.length) {
        result.unshift(0);
        result.unshift(1);
      } else {
        num = 1;
        result.unshift(0);
      }
    } else {
      result.unshift(element + num);
      num = 0;
    }
  }
  return result;
}

module.exports = plusOneArray;
