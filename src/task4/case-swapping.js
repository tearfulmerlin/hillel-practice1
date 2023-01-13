'use strict';

/* eslint-disable no-restricted-syntax */
/**
 * Implement swapCase function:
 *
 * Given a string, swap the case for each of the letters.
 *
 * Examples:
 * swapCase "aBc"      should return "AbC"
 * swapCase "ABC"      should return "abc"
 * swapCase "123235"   should return "123235"
 *
 * @param {string} phrase
 *
 * @return {string}
 */
function swapCase(phrase) {
  // write code here
  let swapPhrase = '';
  for (const letter of phrase) {
    if (letter === letter.toLowerCase()) {
      swapPhrase += letter.toUpperCase();
    } else {
      swapPhrase += letter.toLowerCase();
    }
  }

  return swapPhrase;
}
module.exports = swapCase;
