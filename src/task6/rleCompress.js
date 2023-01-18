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
  const arrStr = source.split('');
  let count = 1;
  const newArr = [];

  for (let i = 0; i < arrStr.length; i++) {
    if (arrStr[i] === arrStr[i + 1]) {
      count++;
    } else if (count === 1) {
      newArr.push(arrStr[i]);
      count = 1;
    } else {
      newArr.push(arrStr[i], count);
      count = 1;
    }
  }

  return newArr.join('');
}

module.exports = rleCompress;
