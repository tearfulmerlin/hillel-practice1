const people = require('../people');
const {
  sortByAge,
  sortByName,
  sortByChildrenQuantity,
} = require('./sortPeople');

describe('Sort by age', () => {
  const sorted = sortByAge(people);

  test('Initial array should not be changed', () => {
    expect(sorted).not.toBe(people);
  });

  test('29th person in a list should be Jacobus Bernardus van Brussel', () => {
    expect(sorted?.[30]).toEqual(people?.[38]);
  });
});

describe('Sort by name', () => {
  const sorted = sortByName(people);

  test('Initial array should not be changed', () => {
    expect(sorted).not.toBe(people);
  });

  test('11th person in a list should be Jacobus Bernardus van Brussel', () => {
    expect(sorted?.[12]).toEqual(people?.[38]);
  });
});

describe('Sort by children quantity', () => {
  const sorted = sortByChildrenQuantity(people);

  test('Initial array should not be changed', () => {
    expect(sorted).not.toBe(people);
  });

  test('29th person in a list should be Jacobus Bernardus van Brussel', () => {
    expect(sorted?.[30]).toEqual(people?.[38]);
  });
});
