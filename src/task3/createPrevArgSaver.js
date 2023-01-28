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
  let result;

  // eslint-disable-next-line func-names
  return function (secondNum) {
    const num = result;
    result = secondNum;

    return num;
  };
}

module.exports = createPrevArgSaver;
