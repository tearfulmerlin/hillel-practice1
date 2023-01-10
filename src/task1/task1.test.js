/* eslint-disable no-undef */
const isNumberArray = require('./task1');


describe('true', () => {
  test('[4, 3, 2, 5]', () => {
    expect(isNumberArray([4, 3, 2, 5])).toBe(true);
  });

  test('[9, 9, 9, 9]', () => {
    expect(isNumberArray([9, 9, 9, 9])).toBe(true);
  });

  test('negtive numbers', () => {
    expect(isNumberArray([1, 2, 3, -9])).toBe(true);
  });
});


describe('false', () => {
  test('empty array', () => {
    expect(isNumberArray([])).toBe(false);
  });

  test('string', () => {
    expect(isNumberArray(null)).toBe(false);
  });

  test('number strings', () => {
    expect(isNumberArray([1, 2, '2'])).toBe(false);
  });

  test('NaN', () => {
    expect(isNumberArray([1, 2, NaN])).toBe(false);
  });
});
