/**
 *
 * @param {Array} arr
 * @param {Function} callback
 *
 * @returns {Array}
 */


function mapArr(arr, callback) {

  const result = [];

  arr.forEach((i) => {

    return result.push(callback(i));

  });

  return result;
}

module.exports = mapArr;
