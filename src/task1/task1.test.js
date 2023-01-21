const isNumberArray = require('./task1');


  test('[4, 3, 2, 5] should return true', () => {
    expect(isNumberArray([4, 3, 2, 5])).toBe(true);
  });

  test('[9, 9, 9, 9] should return true', () => {
    expect(isNumberArray([9, 9, 9, 9])).toBe(true);
  });

  test('negtive numbers should return true', () => {
    expect(isNumberArray([1, 2, 3, -9])).toBe(true);
  });


  test('empty array should return false', () => {
    expect(isNumberArray([])).toBe(false);
  });
  
  test('string should return false', () => {
    expect(isNumberArray(null)).toBe(false);
  });
    
  test('number strings should return false', () => {
    expect(isNumberArray([1, 2, '2'])).toBe(false);
  });

  test('NaN should return false', () => {
    expect(isNumberArray([1, 2, NaN])).toBe(false);
  });
