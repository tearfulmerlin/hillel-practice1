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
  if ((Array.isArray(arr) && !arr.length) || !arr) {
    return false;
  }
  let count = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (typeof (arr[i]) !== typeof (1) || Number.isNaN(arr[i])) {
      count += 1;

      return false;
    }
  }
  if (count === 0) {
    return true;
  }
}

module.exports = isNumberArray;
