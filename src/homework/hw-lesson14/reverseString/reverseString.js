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
  if (typeof str !== 'string') return null;

  return str.split('').reverse().join('');
}

module.exports = reverseString;
