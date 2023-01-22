'use strict';

/**
 * Implement calculateMenAverageAge function
 *
 * Function returns average age of men in array. If `century` is specified then
 * function calculates average age only for men who died in this century
 *
 * To calculate century:
 * Divide year of person's death by 100: Math.ceil(person.died / 100)
 *
 * @param {object[]} people
 * @param {number} century - optional
 *
 * @return {number}
 */
function calculateMenAverageAge(people, century) {
  const getPeople = people.filter((person) => (century
    ? person.sex === 'm' && century === Math.ceil(person.died / 100)
    : person.sex === 'm'));

  const ageSum = getPeople.map((person) => person.died - person.born)
    .reduce((acc, value) => acc + value, 0);

  return ageSum / getPeople.length;
}

/**
 * Implement calculateWomenAverageAge function
 *
 * Function returns average age of women in array. If `withChildren` is
 * specified then function calculates average age only for women with children
 *
 * Hint: To check if a woman has children you should find someone who mention
 * her as mother.
 *
 * @param {object[]} people
 * @param {boolean} withChildren - optional
 *
 * @return {number}
 */
function calculateWomenAverageAge(people, withChildren) {
  const getPeople = withChildren
    ? people.filter((person) => person.sex === 'f' && people.some((mother) => mother.mother === person.name))
    : people.filter((person) => person.sex === 'f');
  const ageSum = getPeople.map((person) => person.died - person.born)
    .reduce((acc, value) => acc + value, 0);

  return ageSum / getPeople.length;
}

/**
 * Implement calculateAverageAgeDiff function.
 *
 * The function returns an average age difference between a child and his or her
 * mother in the array. (A mother's age at child birth)
 *
 * If `onlyWithSon` is specified then function calculates age difference only
 * for sons and their mothers.
 *
 * @param {object[]} people
 * @param {boolean} onlyWithSon - optional
 *
 * @return {number}
 */
function calculateAverageAgeDiff(people, onlyWithSon) {
  const mothers = onlyWithSon
    ? people.filter((mother) => mother.sex === 'f' && people.some((person) => person.sex === 'm' && person.mother === mother.name))
    : people.filter((mother) => mother.sex === 'f' && people.some((person) => person.mother === mother.name));

  const age = mothers.map((mother) => {
    const childs = onlyWithSon
      ? people.filter((child) => child.mother === mother.name && child.sex === 'm')
      : people.filter((child) => child.mother === mother.name);

    return childs.map(({ born }) => born - mother.born);
  });

  const cloneAge = age.flat();

  const sumAges = cloneAge.reduce((acc, value) => acc + value, 0);

  return sumAges / cloneAge.length;
}

module.exports = {
  calculateMenAverageAge,
  calculateWomenAverageAge,
  calculateAverageAgeDiff,
};