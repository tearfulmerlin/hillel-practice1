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
  const abc = 'abcdefghijklmnopqrstuvwxyz';
  const strLower = str.toLowerCase();
  for (let i = 0; i < abc.length; i++) {
    if (strLower.indexOf(abc[i]) === -1) {
      return false;
    }
  }

  return true;
}

module.exports = isPangram;
