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
//npm run test3
function createPrevArgSaver() {
  let num;

  return function returnNum(number) {
    const num2 = num;
    num = number;

    return num2;
  };
}
module.exports = createPrevArgSaver;