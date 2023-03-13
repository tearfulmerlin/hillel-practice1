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
  for (let i = 0; i < this.length; i++) {
    callback(this[i]) ? arr.push(this[i]) : null;
  }

  return arr;
}

module.exports = customFilter;
