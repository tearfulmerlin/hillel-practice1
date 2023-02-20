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
  const result = [];

  for (let i = 0; i < this.length; i++) {
    const item = this[i];

    if (callback(item, i, this)) {
      result.push(item);
    }
  }

  return result;
}

module.exports = customFilter;
