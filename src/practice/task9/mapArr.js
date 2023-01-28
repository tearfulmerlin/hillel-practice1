/**
 *
 * @param {Array} arr
 * @param {Function} callback
  *
 * @returns {Array}
 */


function mapArr(arr, callback) {
    const resalt = [];
    for(let i = 0; i < arr.length;i++){
        resalt[i] = callback(arr[i])
    }
    return resalt
}

module.exports = mapArr;
