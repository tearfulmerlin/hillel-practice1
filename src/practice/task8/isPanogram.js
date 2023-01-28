// const str = 'The quick brown fox jumps over the lazy dog';
/**
 *
 * @param {string} str
 *
 * @returns {Boolean}
 */

function isPangram(str) {
  if (typeof str !== 'string') return false;

  const alfabet = 'abcdefghijklmnopqrstuvwxyz';
  // eslint-disable-next-line no-restricted-syntax
  for (const symb of alfabet) {
    if (str.toLowerCase().includes(symb)) { /* empty */ } else {
      return false;
    }
  }

  return true;
}

module.exports = isPangram;
