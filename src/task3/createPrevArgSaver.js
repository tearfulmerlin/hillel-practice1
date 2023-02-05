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
  let value1;
  return function show(arg) {
    const value2 = value1;
    value1 = arg;
    return value2;
  };
}

const argSaver = createPrevArgSaver();

argSaver(123);
argSaver(456);
argSaver();
argSaver(789);
module.exports = createPrevArgSaver;
