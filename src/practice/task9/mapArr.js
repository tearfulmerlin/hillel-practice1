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
    if (callback(arr[i])) temp.push(callback(arr[i]));
  }
}
const arr = [1, 2, 3, 4];
console.log(mapArr(arr, (el) => el % 2 === 0));
// module.exports = mapArr;
