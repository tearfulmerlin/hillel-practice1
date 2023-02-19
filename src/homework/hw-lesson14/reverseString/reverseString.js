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
  const result = (typeof str !== 'string')
    ? null : str.split('').reverse().join('');

  return result;
}

module.exports = reverseString;
