/**
 *
 * check if all elements of the array are numbers
 *
 * @param {Array} arr
 *
 * @return {Boolean}
*/

function isNumberArray(arr) {
  // write code here
  return arr && arr.length ? arr.every((item) => (!isNaN(item) && typeof item === "number")) : false;

}

module.exports = isNumberArray;
