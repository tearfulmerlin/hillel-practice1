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
  const newArr = phrase.split('');

  const newPhrase = newArr.map((element) => (element === element.toLowerCase()
    ? element.toUpperCase() : element.toLowerCase())).join('');

  return newPhrase;
}

module.exports = swapCase;
