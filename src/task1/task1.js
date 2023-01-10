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
  function getValid(element) {
    if (typeof element === 'number' && !Number.isNaN(+element)) {
      return true;
    }

    return false;
  }

  return arr.every(getValid);
}
module.exports = isNumberArray;
