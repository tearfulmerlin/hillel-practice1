/**
 *
 * check if all elements of the array are numbers
 *
 * @param {Array} arr
 *
 * @return {Boolean}
 */

function isNumberArray(arr) {
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


module.exports = isNumberArray;
