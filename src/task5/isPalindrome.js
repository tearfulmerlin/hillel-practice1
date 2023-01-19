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
  const arr = [];
  for (let i = 0; i < str.length; i += 1) {
    if (str.toLowerCase().charCodeAt(i) > 96 && str.toLowerCase().charCodeAt(i) < 123) {
      arr.push(str[i].toLowerCase());
    }
  }

  return arr.join() === arr.reverse().join();
}

module.exports = isPalindrome;
