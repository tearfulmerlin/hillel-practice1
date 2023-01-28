/* eslint-disable no-plusplus */

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
function rleCompress(source) {
  let prevChr = source[0];
  let count = 1;
  const result = [];

  for (let i = 1; i <= source.length; i++) {
    const chr = source[i];

    if (chr === prevChr) {
      count++;
    } else {
      result.push(prevChr);

      if (count > 1) {
        result.push(count);
      }

      prevChr = chr;
      count = 1;
    }
  }

  return result.join('');
}

module.exports = rleCompress;
