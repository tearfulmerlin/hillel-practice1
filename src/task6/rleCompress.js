'use strict';

/**
 * Implement rleCompress function:
 *
 * Function takes string argument and returns compressed string.
 * Compression algorithm is the following: 2 and more identical
 * letters in a row are replaced with the letter and count of
 * repeating (don’t add number 1 for one letter)
 *
 * rle('A') === 'A'
 * rle('ABC') === 'ABC'
 * rle('AABDE') === 'A2BDE'
 * rle('ABGGGDKKKUKKF') === 'ABG3DK3UK2F'
 *
 * @param {string} source
 *
 * @return {string}
 */

//npm run test6
function rleCompress(source) {
  let count = 0;
  for (i = 0; i < source.length; i++) {
    if (source[i].repeat) {
      count++;
      if (typeof source === 'string' || source > 0) {
        const regExp = /[A-Z]/g;
        const replased = source.replace(regExp, `${count}`); 
        return replased;
      }
    }
  }
}

module.exports = rleCompress;