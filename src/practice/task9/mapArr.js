/**
 *
 * @param {Array} arr
 * @param {Function} callback
  *
 * @returns {Array}
 */


function mapArr(arr, callback) {
  const result = [];
  arr.forEach((item) => result.push(callback(item)));

  return result;
}

module.exports = mapArr;
