// const str = 'The quick brown fox jumps over the lazy dog';
/**
 *
 * @param {string} str
 *
 * @returns {Boolean}
 */

function isPangram(str) {
  if (typeof str !== 'string') return false;

  const chars = 'abcdefghijklmnopqrstuvwxyz';
  const lowerStr = str.toLowerCase();

  // eslint-disable-next-line no-restricted-syntax
  for (const char of chars) {
    if (!lowerStr.includes(char)) return false;
  }

  return true;
}

module.exports = isPangram;
