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
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }

  return result;
}

module.exports = customFilter;
