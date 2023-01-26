const reverseString = require('./reverseString');

test('array should return null', () => {
  expect(reverseString(
    ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd', '!'])
    ).toBe(null);
});

test('object should return null', () => {
  expect(reverseString({ value: 'hello world!' })).toBe(null);
});

test('undefined should return null', () => {
  expect(reverseString(undefined)).toBe(null);
});

test('null should return null', () => {
  expect(reverseString(null)).toBe(null);
});

test('number should return null', () => {
  expect(reverseString(310)).toBe(null);
});

test('"hello world!" should retutn "!dlrow olleh"', () => {
  expect(reverseString('hello world!')).toBe('!dlrow olleh');
});

test('"Race car" should retutn "rac ecaR"', () => {
  expect(reverseString('Race car')).toBe('rac ecaR');
});

test(
  '"The quick brown fox jumps over the lazy dog" \
  should return "god yzal eht revo spmuj xof nworb kciuq ehT"',
  () => {
  expect(reverseString('The quick brown fox jumps over the lazy dog'))
  .toBe('god yzal eht revo spmuj xof nworb kciuq ehT');
});
