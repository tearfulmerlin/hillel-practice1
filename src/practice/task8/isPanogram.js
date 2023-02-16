// const str = 'The quick brown fox jumps over the lazy dog';
/**
 *
 * @param {string} str
 *
 * @returns {Boolean}
 */

function isPangram(str) {
  if (typeof str !== 'string') {
    return false;
  }
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  for (const i of alphabet) {
    if (!str.toLowerCase().includes(i)) {
      return false;
    }
  }

  return true;
}

module.exports = isPangram;
