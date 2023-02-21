// const str = 'The quick brown fox jumps over the lazy dog';
/**
 *
 * @param {string} str
 *
 * @returns {Boolean}
 */

// function isPangram(str) {
//   if (typeof str !== 'string') return false;

//   const chars = 'abcdefghijklmnopqrstuvwxyz';
//   const convertedStr = str.toLowerCase();

//   // eslint-disable-next-line no-restricted-syntax
//   for (const char of chars) {
//     if (!convertedStr.includes(char)) {
//       return false;
//     }
//   }

//   return true;
// }

function isPangram(str) {
  if (typeof str !== 'string') return false;

  const regex = /([a-zA-Z])(?!.*\1)/gi;

  // return (str.match(regex) || []).length === 26;
  return str.match(regex)?.length === 26;
}

module.exports = isPangram;
