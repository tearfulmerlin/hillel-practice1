const plusOneArray = require('./task2');


describe('true', () => {
  test('[4, 3, 2, 5]', () => {
    expect(plusOneArray([4, 3, 2, 5])).toStrictEqual([4, 3, 2, 6]);
  });

  test('[9, 9, 9, 9]', () => {
    expect(plusOneArray([9, 9, 9, 9])).toStrictEqual([1, 0, 0, 0, 0]);
  });
});


describe('false', () => {
  test('empty array', () => {
    expect(plusOneArray([])).toBe(null);
  });
  
  test('negtive numbers', () => {
    expect(plusOneArray([1, 2, 3, -9])).toBe(null);
  });
  
  test('string', () => {
    expect(plusOneArray(null)).toBe(null);
  });
  
  test('no lemon, no melon', () => {
    expect(plusOneArray('no lemon, no melon')).toBe(null);
  });

  
  test('number strings', () => {
    expect(plusOneArray([1, 2, '2'])).toBe(null);
  });
});
