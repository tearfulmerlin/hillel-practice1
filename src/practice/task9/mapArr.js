/**
 *
 * @param {Array} arr
 * @param {Function} callback
  *
 * @returns {Array}
 */


function mapArr(arr, callback) {
  const back = [];
  for (let i = 0; i < arr.length; i++) {
    back.push(callback(arr[i]));
  }

  return back;
}

module.exports = mapArr;
