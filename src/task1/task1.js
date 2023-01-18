/**
 *
 * check if all elements of the array are numbers
 *
 * @param {Array} arr
 *
 * @return {Boolean}
*/

function isNumberArray(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return false;
  }

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string' || Number.isNaN(arr[i])) {
      return false;
    }
  }

  return true;
}

module.exports = isNumberArray;
