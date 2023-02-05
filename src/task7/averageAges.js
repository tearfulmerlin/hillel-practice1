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
  // write code here
  // learn how to use array methods like .filter .map .some .every .find .reduce
  // avoid using loop and forEach
  // replace `if ()` statement with &&, || or ?:
  // without nesting

  let ageMan = 0;

  const arrMan = people.filter((person) => {
    return person.sex === 'm'
  });

  const quantityMan = arrMan.length;

  arrMan.forEach((person) => {
    return ageMan += (person.died - person.born);
  });

  let ageCentury = 0;

  const arrMenCentury = arrMan.filter((person) => {
    return Math.ceil(person.died / 100) === century;
  });

  const quantityMenCentury = arrMenCentury.length;

  arrMenCentury.forEach((person) => {
    return ageCentury += (person.died - person.born);
  });

  const result = century ? ageCentury / quantityMenCentury : ageMan / quantityMan;

  return result;
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
  // write code here

  let ageWoman = 0;

  const arrWoman = people.filter((person) => {
    return person.sex === 'f'
  });

  const quantityWoman = arrWoman.length;

  arrWoman.forEach((person) => {
    return ageWoman += (person.died - person.born);
  });


  const arrMothers = [];

  for (let i = 0; i < arrWoman.length; i++) {
    for (let j = 0; j < people.length; j++) {

      if (arrWoman[i].name === people[j].mother) {
        arrMothers.push(arrWoman[i]);
        break;
      }
    }
  }


  const quantityMothers = arrMothers.length;

  let ageAllMothers = 0;

  arrMothers.forEach((person) => {
    return ageAllMothers += (person.died - person.born);
  });

  const result = withChildren ? ageAllMothers / quantityMothers : ageWoman / quantityWoman;

  return result;
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
  // write code here

  const mothers = [];
  const arrSons = [];

  let age = 0;
  let ageSons = 0;

  const allWomen = people.filter((person) => {
    return person.sex === 'f';
  });

  for (let i = 0; i < allWomen.length; i++) {
    for (let j = 0; j < people.length; j++) {

      if (allWomen[i].name === people[j].mother) {
        mothers.push(allWomen[i].born);
        age += people[j].born - allWomen[i].born;
      }

      if (allWomen[i].name === people[j].mother && people[j].sex === 'm') {
        arrSons.push(allWomen[i].born);
        ageSons += people[j].born - allWomen[i].born;
      }
    }
  }

  const result = onlyWithSon ? ageSons / arrSons.length : age / mothers.length;

  return result;
}

  module.exports = {
  calculateMenAverageAge,
  calculateWomenAverageAge,
  calculateAverageAgeDiff,
};
