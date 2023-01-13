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
  if (!phrase.trim().length) return phrase;
  const duplicate = [];
  for (let i = 0; i < phrase.length; i++) {
    if (phrase[i].toUpperCase() === phrase[i]) duplicate.push(phrase[i].toLowerCase());
    else duplicate.push(phrase[i].toUpperCase());
  }

  return duplicate.join('');
}

module.exports = swapCase;
