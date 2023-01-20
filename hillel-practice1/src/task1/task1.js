/**
 *
 * check if all elements of the array are numbers
 *
 * @param {Array} arr
 *
 * @return {Boolean}
*/

function isNumberArray(arr) {
  return Array.isArray(arr)
   && !!arr.length
   && arr.every((item) => (!Number.isNaN(item) && typeof item === 'number'));
}

module.exports = isNumberArray;
