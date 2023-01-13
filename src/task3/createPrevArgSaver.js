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
  // write code here
  const history = [];

  return function madeSav(arg) {
    history.push(arg);
    if (history.length > 2) history.shift();

    return history[history.length - 2];
  };
}

const argSaver = createPrevArgSaver();

module.exports = createPrevArgSaver;
