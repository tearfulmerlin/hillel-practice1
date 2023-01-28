// const str = 'The quick brown fox jumps over the lazy dog';
/**
 *
 * @param {string} str
 *
 * @returns {Boolean}
 */

function isPangram(str) {
  const alfabet = 'abcdefghijklmnopqrstuvwxyz';
  // eslint-disable-next-line no-restricted-syntax
  for (const symb of alfabet) {
    if (str.includes(symb)) { /* empty */ } else {
      return false;
    }
  }

  return true;
}
// only latin alphabet (number 97 - small letter 'a')

module.exports = isPangram;
