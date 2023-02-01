// const str = 'The quick brown fox jumps over the lazy dog';
/**
 *
 * @param {string} str
 *
 * @returns {Boolean}
 */
function isPangram(str) {
  if (typeof str !== 'string') return false;
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const string = str.trim().toLowerCase().replace(/[^a-z]/gi, '');

  for (let i = 0; i < alphabet.length; i++) {
    if (!string.includes(alphabet[i])) return false;
  }

  return true;
}

module.exports = isPangram;
