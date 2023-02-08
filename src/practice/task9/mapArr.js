/**
 *
 * @param {Array} arr
 * @param {Function} callback
  *
 * @returns {Array}
 */

function mapArr(arr, callback) {
  const result = [];

  // eslint-disable-next-line no-restricted-syntax
  for (const elem of arr) {
    result.push(callback(elem));
  }

  return result;
}

module.exports = mapArr;
