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
  let word = phrase.toUpperCase().split('');
  for (let i = 0; i < word.length; i++) {
    if (word[i] === phrase[i]) {
      word[i] = word[i].toLowerCase();
    }
  }
  return word.join("");
}

module.exports = swapCase;
