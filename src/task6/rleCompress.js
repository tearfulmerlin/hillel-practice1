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
 *      012345789
 * rle('ABGGGDKKKUKKF') === 'ABG3DK3UK2F'
 *
 * @param {string} source
 *
 * @return {string}
 */


function rleCompress(source) {
  let resString = '';
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j + i <= source.length; j++) {
      if (source[j + i] !== source[i]) {
        i += j - 1;
        resString += `${source[i]}${j === 1 ? '' : j}`;
        break;
      }
    }
  }

  return resString;
}

module.exports = rleCompress;
