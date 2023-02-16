const mapArray = require('./mapArr');

test('Double elements of the array [1,2,3,4] should return [2, 4, 6, 8]', () => {
  expect(mapArray([1,2,3,4], (i)=> i * 2)).toContain(8);
});

test('Empty array should return empty array', () => {
  expect(mapArray([], (i)=> i)).toEqual([]);
});

test('Split string elements should return [["t", "e", "s", "t"]]', () => {
  expect(mapArray(['test'], (i)=> i.split(''))).toEqual([["t", "e", "s", "t"]]);
});
