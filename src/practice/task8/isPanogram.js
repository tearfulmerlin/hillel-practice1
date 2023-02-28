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
  const sentence = str.toLocaleLowerCase();
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  for (let i = 0; i < alphabet.length; i++) {
    console.log(alphabet[i]);
    console.log(sentence.indexOf(alphabet[i]));
    if (sentence.indexOf(alphabet[i]) < 0) {
      return false;
    }
  }

  return true;
}

module.exports = isPangram;
