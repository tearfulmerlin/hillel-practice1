'use strict';

const isPalindrome = require('./isPalindrome');

test('A man, a plan, a canal: Panama', () => {
  expect(isPalindrome('A man, a plan, a canal: Panama'))
    .toBe(true);
});

test('race a car', () => {
  expect(isPalindrome('race a car'))
    .toBe(false);
});

test('race a e-car', () => {
  expect(isPalindrome('race a e-car'))
    .toBe(true);
});

test('Madam, I\'m Adam', () => {
  expect(isPalindrome(`Madam, I'm Adam`))
    .toBe(true);
});

test('Madam, my name is Adam', () => {
  expect(isPalindrome('Madam, my name is Adam'))
    .toBe(false);
});

test('Empty string', () => {
  expect(isPalindrome(''))
    .toBe(true);
});