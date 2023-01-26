'use strict';

const swap = require('./case-swapping');

test('Should swap phrase', () => {
  expect(swap('HelloWorld'))
    .toBe('hELLOwORLD');
});

test('Should work with empty string', () => {
  expect(swap(''))
    .toBe('');
});

test('Should work with space symbol', () => {
  expect(swap(' '))
    .toBe(' ');
});

test('Should swap case only for letter and ignore special characters', () => {
  expect(swap('h_e_L-L_0 wo|||rLD'))
    .toBe('H_E_l-l_0 WO|||Rld');
});

test('Should not change number string', () => {
  expect(swap('123235'))
    .toBe('123235');
});
