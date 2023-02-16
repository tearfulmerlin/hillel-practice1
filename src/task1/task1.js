/**
 *
 * check if all elements of the array are numbers
 *
 * @param {Array} arr
 *
 * @return {Boolean}
*/

function isNumberArray(arr) {
  if (!Array.isArray(arr) || !arr.length) {
    return false;
  }

  return arr.every((el) => typeof el === 'number' && !Number.isNaN(el));
}

module.exports = isNumberArray;
