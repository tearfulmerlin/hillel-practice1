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
  if (str === '') {
    return true;
  }
  return function a() {
    let arr = [];
    let arr2 = [];
    for (let i = 0; i < str.length / 2; i++){
      
      if (true) {
        arr = arr + i;
      }
    }
    for (let i = str[str.length - 1]; i < str.length / 2; i--) {
      
      if (true) {
        arr2 = arr2 + i;
      }
    }
    if (arr.toLowerCase() !== arr2.reverse().toLowerCase()) {
      return false;
    }
  }
  // str = str.toLowerCase();
  // let reversed = str.reverse();
  // if (str === reversed.reverse()) {
  //   return true;
  // }
}

module.exports = isPalindrome;
