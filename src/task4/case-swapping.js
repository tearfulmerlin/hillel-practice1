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
  let result = '';

  // eslint-disable-next-line no-restricted-syntax
  for (const letter of phrase) {
    const changedLetter = letter === letter.toUpperCase()
      ? letter.toLowerCase()
      : letter.toUpperCase();
    result += changedLetter;
  }

  return result;
}

module.exports = swapCase;
