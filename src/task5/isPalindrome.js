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
  if (!str) {
    return true;
  }
  for (let i = 0; i < str.length; i += 1) {
    if (str.toLowerCase().charCodeAt(i) > 96 && str.toLowerCase().charCodeAt(i) < 123) {
      arr.push(str[i].toLowerCase());
    }
  }

  return arr.join() === arr.reverse().join();
}

//
// function isPalindrome(str) {
//   const findLetter = /[\W_]/g;
//   const lowLetters = str.toLowerCase().replace(findLetter, '');
//   const reverseStr = lowLetters.split('').reverse().join('');

//   return reverseStr === lowRegStr;
// }


// function isPalindrome(str) {
//   const arrAlfa = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
//     'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//   const arrStr = [];
//   for (let i = 0, a = 0; i < str.length; i += 1) {
//     for (let j = 0; j < arrAlfa.length; j += 1) {
//       if (arrAlfa[j] === str[i].toLowerCase()) {
//         arrStr[a] = arrAlfa[j];
//         a += 1;
//         break;
//       }
//     }
//   }
//   for (let i = 0, k = arrStr.length - 1; (arrStr.length % 2 === 0
//     ? i < arrStr.length / 2 : i < (arrStr.length - 1) / 2); i += 1, k -= 1) {
//     if (arrStr[i] !== arrStr[k]) {
//       return false;
//     }
//     console.log(arrStr[i]);
//   }

//   return true;
// }

module.exports = isPalindrome;
