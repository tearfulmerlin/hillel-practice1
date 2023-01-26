'use strict';

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
  const clearStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split('');
  const reverseClearStr = clearStr.slice().reverse();
  if (clearStr.join('') === reverseClearStr.join('')) {
    return true;
  }

  return false;
}

module.exports = isPalindrome;
