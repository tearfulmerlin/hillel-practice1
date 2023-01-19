'use strict';

const rleCompress = require('./rleCompress');

test('Empty string', () => {
  expect(rleCompress('')).toBe('');
});

test('One character string', () => {
  expect(rleCompress('A')).toBe('A');
});

test('Repeated single character', () => {
  expect(rleCompress('BBBB')).toBe('B4');
});

test('Short string', () => {
  expect(rleCompress('AAAB')).toBe('A3B');
});

test('Medium string', () => {
  expect(rleCompress('BCCDDDAXXXX')).toBe('BC2D3AX4');
});

test('Long string', () => {
  expect(rleCompress('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'))
    .toBe('AV3B3V2XDHJF4D6HA4J3D2SLS3D4');
});

test('Single character repeated many times', () => {
  expect(rleCompress('AAAAAAAAAAAAAAA')).toBe('A15');
});
