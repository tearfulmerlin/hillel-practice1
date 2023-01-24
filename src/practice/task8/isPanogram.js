// const str = 'The quick brown fox jumps over the lazy dog';
/**
 *
 * @param {string} str
 *
 * @returns {Boolean}
 */

function isPangram(str) {
  if (!str || typeof str !== 'string' || str.trim() === '') return false;

  const chars = 'abcdefghijklmnopqrstuvwxyz';
  const convertedStr = str.toLowerCase();

  // eslint-disable-next-line no-restricted-syntax
  for (const char of chars) {
    if (!convertedStr.includes(char)) {
      return false;
    }
  }

  return true;
}

module.exports = isPangram;
