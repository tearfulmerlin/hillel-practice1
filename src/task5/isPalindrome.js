/* eslint-disable no-restricted-syntax */

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
// 1 варіант через перебір усіх символів в рядку
// function isPalindrome(str) {
//   if (str === '') return true;

//   // тут звичайно цих символів може бути більше
//   const specialChars = [',', '.', '!', '?', ':', ';', '"', '\'', '`', '\\', '/', ' ', '-'];
//   const сharsArr = [];

//   for (const chr of str) {
//     if (!specialChars.includes(chr)) {
//       сharsArr.push(chr.toLocaleLowerCase());
//     }
//   }

//   const originalStr = сharsArr.join('');
//   const newStr = сharsArr.reverse().join('');

//   return originalStr === newStr;
// }

// 2 варіант через RegExp
function isPalindrome(str) {
  if (str === '') return true;

  const сharsArr = str.match(/[A-Za-z]/g);
  const originalStr = сharsArr.join('').toLowerCase();
  const newStr = сharsArr.reverse().join('').toLowerCase();

  return originalStr === newStr;
}

module.exports = isPalindrome;
