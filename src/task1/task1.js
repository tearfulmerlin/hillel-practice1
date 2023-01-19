/**
 *
 * check if all elements of the array are numbers
 *
 * @param {Array} arr
 *
 * @return {Boolean}
*/

// eslint-disable-next-line consistent-return
function isNumberArray(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return false;
  }
  for (let i = 0; i < arr.length; i += 1) {
    if (typeof (arr[i]) !== 'number' || Number.isNaN(arr[i])) {
      return false;
    }
  }

  return true;
}

module.exports = isNumberArray;
