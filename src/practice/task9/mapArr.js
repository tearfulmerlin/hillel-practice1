/**
 *
 * @param {Array} arr
 * @param {Function} callback
  *
 * @returns {Array}
 */


function mapArr(arr, callback) {
  const result = [];

  for (const element of arr) {
    result.push(callback(element))
  }
  return result;
}

// const nums = [1, 2, 3, 4, 5, 6];
// const maped = mapArr(nums, (item) => item * 2);

module.exports = mapArr;
