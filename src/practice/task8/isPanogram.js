// const str = 'The quick brown fox jumps over the lazy dog';
/**
 *
 * @param {string} str
 *
 * @returns {Boolean}
 */

function isPangram(str) {
  if (str.trim() === '' || typeof str !== 'string') return false;
  if (str.match(/[a-z]/gi).length) return true;

  return false;
}

module.exports = isPangram;
