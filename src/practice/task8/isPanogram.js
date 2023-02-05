// const str = 'The quick brown fox jumps over the lazy dog';
/**
 *
 * @param {string} str
 *
 * @returns {Boolean}
 */
function isPangram(str) {
  if (typeof str !== 'string' || str === undefined) {
    return false;
  }

  let alphabet = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < alphabet.length; i++) {
    if (!str.toLowerCase().includes(alphabet[i])) {
      return false;
    }
  }
  return true;
}
// 
module.exports = isPangram;