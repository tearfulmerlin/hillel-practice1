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
  const filteredArr = [];
  if (Array.isArray(this) && this.length > 0) {
    for (let i = 0; i < this.length; i += 1) {
      if (callback(this[i])) {
        filteredArr.push(this[i]);
      }
    }

    return filteredArr;
  }
}

module.exports = customFilter;
