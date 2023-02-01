// const str = 'The quick brown fox jumps over the lazy dog';
/**
 *
 * @param {string} str
 *
 * @returns {Boolean}
 */

function isPangram(str) {
  /* write code here */
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const regex = /\s/g;
  let lowercase = '';
  if (typeof str === 'string') {
    lowercase = str.toLowerCase().replace(regex, '');
  } else {
    return false;
  }

  for (let i = 0; i < alphabet.length; i++) {
    if (lowercase.indexOf(alphabet[i]) === -1) {
      return false;
    }
  }

  return true;
}

module.exports = isPangram;
