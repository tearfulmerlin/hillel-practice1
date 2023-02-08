/**
 *
 * @param {Array} arr
 * @param {Function} callback
  *
 * @returns {Array}
 */


function mapArr(arr, callback) {
  const result = [];

  for (const value of arr) {
    result.push(callback(value));
  }

  return result;
}

module.exports = mapArr;
