'use strict';

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
  let showPhrase = '';
  for (let letter of phrase) {
    if (letter == letter.toLowerCase()) {
      showPhrase += letter.toUpperCase();
    } else {
      showPhrase += letter.toLowerCase();
    }
  }
  return showPhrase;
}

module.exports = swapCase;
