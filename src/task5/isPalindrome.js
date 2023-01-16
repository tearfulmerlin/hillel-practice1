'use strict';

/* eslint-disable no-restricted-syntax */

/**
 * Implement isPalindrome function:
 *
 * A palindrome is a word, phrase, or other sequence of characters which reads
 * the same backward as forward, such as 'madam' or 'racecar'
 *
 * Given a string, determine if it is a palindrome, considering only
 * alphanumeric characters and ignoring cases. Empty string is a valid
 * palindrome.
 *
 *
 * isPalindrome('A man, a plan, a canal: Panama') === true
 * isPalindrome('race a car') === false
 *
 * @param {string} str
 *
 * @return {boolean}
 */
function isPalindrome(str) {
  // write code here
  const punctuation = [' ', '-', '_', '\'', ',', '.', ':', ';', '!', '?'];
  const clearedStr = [];
  for (const letter of str) {
    if (!punctuation.some((i) => i === letter)) {
      clearedStr.push(letter.toLowerCase());
    }
  }

  return (clearedStr.join('') === clearedStr.reverse().join(''));
}

module.exports = isPalindrome;
