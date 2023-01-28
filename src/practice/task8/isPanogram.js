// const str = 'The quick brown fox jumps over the lazy dog';
/**
 *
 * @param {string} str
 *
 * @returns {Boolean}
 */

/* function isPangram(str) {
  //
} */
const str = 'The quick brown fox jumps over the layy dog';
const myRegex = /[a-z]/gi;
console.log(str.includes(myRegex));

module.exports = isPangram;
