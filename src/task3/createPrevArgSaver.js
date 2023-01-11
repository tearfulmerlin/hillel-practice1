'use strict';

/**
 * Write a function (factory) creating a function (device) returning its first
 * argument from previous call. The first call should return undefined
 *
 * For example:
 *
 * const argSaver = createPrevArgSaver()
 * argSaver(123) // return undefined
 * argSaver(456) // return 123
 * argSaver() // return 456
 * argSaver(789) // return undefined
 */
function createPrevArgSaver() {
  const arr = [];

  return function returnVal(number) {
    arr.push(number);
    if (number || []) {
      return (arr[arr.length - 2] || arr[[arr.length - 2][0]]);
    }
  };
}

module.exports = createPrevArgSaver;
