const isPangram = require('./isPanogram');

test('"The quick brown fox jumps over the lazy dog" is pangram', () => {
  expect(isPangram('The quick brown fox jumps over the lazy dog')).toBe(true);  
});

test('"Pack my box with five dozen liquor jugs." is pangram', () => {
  expect(isPangram('Pack my box with five dozen liquor jugs.')).toBe(true);  
});

test('"A mad boxer shot a quick, gloved jab to the jaw of his dizzy opponent." is pangram', () => {
  expect(isPangram('A mad boxer shot a quick, gloved jab to the jaw of his dizzy opponent.')).toBe(true);  
});


test('"A mad boxer shot a quick, gloved jab to the jaw of his opponent." is pangram', () => {
  expect(isPangram('A mad boxer shot a quick, gloved jab to the jaw of his opponent.')).toBe(false);  
});


test('"" is not pangram', () => {
  expect(isPangram('')).toBe(false);  
});

test('"A favorite copy set by writing teachers for their pupils is the following" is not pangram', () => {
  expect(isPangram('A favorite copy set by writing teachers for their pupils is the following')).toBe(false);  
});

test('"[\'The\', \'quick\', \'brown\', \'fox\', \'jumps\', \'over\', \'the\', \'lazy\', \'dog\']" is not pangram', () => {
  expect(isPangram(['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog"', 'is', 'pangram'])).toBe(false);  
});

test('undefined is not pangram', () => {
  expect(isPangram()).toBe(false);  
});
