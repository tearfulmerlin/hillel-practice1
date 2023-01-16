'use strict';

/* eslint-disable no-restricted-syntax */
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
  // write code here
  let comprString = '';
  let quantity = 1;
  for (let symbol = 0; symbol < source.length; symbol++) {
    if (source[symbol] === source[symbol + 1]) {
      quantity += 1;
    } else if (quantity > 1) {
      comprString += source[symbol] + quantity;
      quantity = 1;
    } else {
      comprString += source[symbol];
      quantity = 1;
    }
  }

  return comprString;
}

module.exports = rleCompress;
