const people = require('./people');
const customFilter = require('./customFilter');

Array.prototype.filter = customFilter;

test('Name of person without parrents should be Lievijne Jans', () => {
  expect(people.filter((p) => p.mother === null && p.father === null)?.[0].name).toBe('Lievijne Jans');
});

test('There should be 1 person without parents', () => {
  expect(people.filter((p) => p.mother === null && p.father === null).length).toBe(1);
});

test('There should be 17 doughters with one of parrents', () => {
  expect(people.filter((p) => p.sex === 'f' && (p.father || p.mother)).length).toBe(17);
});

test('9th doughter\'s name should be Jacoba Lammens', () => {
  expect(people.filter((p) => p.sex === 'f' && (p.father || p.mother))?.[8]?.name).toBe('Jacoba Lammens');
});

test('There should be 20 people over 60 years', () => {
  expect(people.filter(p => (p.died - p.born) > 60).length).toBe(20);
});
