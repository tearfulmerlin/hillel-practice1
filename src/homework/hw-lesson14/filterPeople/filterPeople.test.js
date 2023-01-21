const people = require('../people');
const {
  findDoughters,
  findPeopleWithTreeChildren,
  findAllPeopleWhoLivedOver60,
  findAllPeopleWithoutBothParrent,
} = require('./filterPeople');

test('Name of person without parrents should be Lievijne Jans', () => {
  expect(findAllPeopleWithoutBothParrent(people).name).toBe('Lievijne Jans');
});

test('There should be 1 person without parents', () => {
  expect(findAllPeopleWithoutBothParrent(people).length).toBe(1);
});

test('There should be 17 doughters with one of parrents', () => {
  expect(findDoughters(people).length).toBe(17);
});

test('9th doughter\'s name should be Jacoba Lammens', () => {
  expect(findDoughters(people)?.[8]?.name).toBe('Jacoba Lammens');
});

test('There should be 20 people over 60 years', () => {
  expect(findAllPeopleWhoLivedOver60(people).length).toBe(20);
});

test('Find people with 3 children', () => {
  expect(findPeopleWithTreeChildren(people)).toEqual([people[26], people[34]]);
});