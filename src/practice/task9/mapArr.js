/**
 *
 * @param {Array} arr
 * @param {Function} callback
  *
 * @returns {Array}
 */


function mapArr(arr, callback) {
  const result = [];

  // eslint-disable-next-line no-undef
  arr.forEach((i) => result.push(callback(i)));

  return result;
}

module.exports = mapArr;
