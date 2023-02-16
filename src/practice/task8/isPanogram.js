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
  };

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const lowercase = str.toLowerCase();

  for (let i = 0; i < alphabet.length; i++) {
    if (lowercase.indexOf(alphabet[i]) === -1) {

      return false;
    }
  }

  return true;
}

module.exports = isPangram;
