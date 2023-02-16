// const str = 'The quick brown fox jumps over the lazy dog';
/**
 *
 * @param {string} str
 *
 * @returns {Boolean}
 */

function isPangram(str) {
  if (typeof str === 'string' && str.length !== 0) {
    const strArr = Array.from(new Set(str.toLowerCase().replace(/[^a-zA-Z]/g, '').split('')));
    if (strArr.length === 26) {
      return true;
    }
  }

  return false;
}

module.exports = isPangram;
