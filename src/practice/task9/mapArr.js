/**
 *
 * @param {Array} arr
 * @param {Function} callback
 *
 * @returns {Array}
 */


function mapArr(arr, callback) {
  const temp = [];

  for (let i = 0; i < arr.length; i++) {
    temp.push(callback(arr[i]));
  }

  return temp;
}

module.exports = mapArr;
