/**
 *
 * @param {Array} arr
 * @param {Function} callback
  *
 * @returns {Array}
 */


function mapArr(arr, callback) {
  const mapedArr = [];
  arr.forEach((element) => mapedArr.push(callback(element)));

  return mapedArr;
}

module.exports = mapArr;
