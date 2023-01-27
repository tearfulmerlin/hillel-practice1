'use strict';

const createPrevArgSaver = require('./createPrevArgSaver');

const argSaver = createPrevArgSaver();

test('First call should return undefined', () => {
  expect(argSaver(1))
    .toBe(undefined);
});

test('Should return\n'
  + ' * argument from previous call', () => {
  expect(argSaver(100, 200, 300))
    .toBe(1);
});

test('Should return its first\n'
  + ' * argument from previous call', () => {
  expect(argSaver())
    .toBe(100);
});

test('Should return undefined\n'
  + ' * from previous call', () => {
  expect(argSaver(756))
    .toBe(undefined);
});
