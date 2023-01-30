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
  const phraseUpperCase = phrase.toUpperCase();
  let result = '';
  for (let i = 0; i < phrase.length; i++) {
    if (phrase[i] !== phraseUpperCase[i]) {
      result += phraseUpperCase[i];
    } else {
      result += phrase[i].toLowerCase();
    }
  }

  return result;
}

module.exports = swapCase;
