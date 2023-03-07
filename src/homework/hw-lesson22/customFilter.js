/**
 *
 * Create customFilter method which behave same way as Array.filter method
 * The customFilter method will be assigned to Array.prototype
 *
 * @param {Function} callback
 *
 * @returns {Array}
 */

function customFilter(callback) {
  const arr = [];

  for(let i = 0; i < this.length;i++){
    if(callback(this[i])){
      arr.push(this[i])
    }
  }
  return arr;
}

module.exports = customFilter;
