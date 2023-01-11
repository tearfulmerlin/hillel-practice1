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
  let phraseCh = '';
  if (phrase === '' || phrase.trim() === '') {
    return '' || phrase;
  }
  for (let i = 0; i < phrase.length; i += 1) {
    if (phrase[i].toUpperCase() === phrase[i]) {
      phraseCh += phrase[i].toLowerCase();
    } else {
      phraseCh += phrase[i].toUpperCase();
    }
  }

  return phraseCh;
}

module.exports = swapCase;
