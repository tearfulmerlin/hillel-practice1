'use strict';

/**
 *
 * Function recieve string and return reversed string
 *
 * Valid input:
 * 'hello world! -> '!dlrow olleh'
 *
 * Any input type except string should return null
 *
 * @param {str} string
 *
 * @return {string}
*/

function reverseString(str) {
  // write code here
  if (typeof str === 'string') {
    return str.split('').reverse().join('');
  }

  return null;
}

module.exports = reverseString;
