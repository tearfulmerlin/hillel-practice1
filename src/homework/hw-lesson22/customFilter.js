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
  /* write code here */
  const array = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      array.push(this[i]);
    }
  }

  return array;
}

module.exports = customFilter;
