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
  let ageAllMen = 0;
  const arrOfAllMen = people.filter((person) => person.sex === 'm');
  const numberOfMen = arrOfAllMen.length;
  arrOfAllMen.forEach((man) => { ageAllMen += (man.died - man.born); });

  let ageCenturyMen = 0;
  const arrMenCentury = arrOfAllMen.filter((person) => Math.ceil(person.died / 100) === century);
  const numberOfMenCentury = arrMenCentury.length;
  arrMenCentury.forEach((man) => { ageCenturyMen += (man.died - man.born); });

  const result = century ? ageCenturyMen / numberOfMenCentury : ageAllMen / numberOfMen;

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
  let ageAllWomen = 0;
  const arrOfAllWomen = people.filter((person) => person.sex === 'f');
  const numberOfWomen = arrOfAllWomen.length;
  arrOfAllWomen.forEach((woman) => { ageAllWomen += (woman.died - woman.born); });

  const arrOfMothers = [];
  for (let i = 0; i < arrOfAllWomen.length; i++) {
    for (let j = 0; j < people.length; j++) {
      if (arrOfAllWomen[i].name === people[j].mother) {
        arrOfMothers.push(arrOfAllWomen[i]);
        break;
      }
    }
  }
  console.log(arrOfMothers);
  const numberOfMothers = arrOfMothers.length;
  let ageAllMothers = 0;
  arrOfMothers.forEach((woman) => { ageAllMothers += (woman.died - woman.born); });

  const result = withChildren ? ageAllMothers / numberOfMothers : ageAllWomen / numberOfWomen;

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
  const mothersWithSons = [];
  let age = 0;
  let ageMothersWithSons = 0;
  const allWomen = people.filter((person) => person.sex === 'f');

  for (let i = 0; i < allWomen.length; i++) {
    for (let j = 0; j < people.length; j++) {
      if (allWomen[i].name === people[j].mother) {
        mothers.push(allWomen[i].born);
        age += people[j].born - allWomen[i].born;
      }
      if (allWomen[i].name === people[j].mother && people[j].sex === 'm') {
        mothersWithSons.push(allWomen[i].born);
        ageMothersWithSons += people[j].born - allWomen[i].born;
      }
    }
  }

  const result = onlyWithSon ? ageMothersWithSons / mothersWithSons.length : age / mothers.length;

  return result;
}

module.exports = {
  calculateMenAverageAge,
  calculateWomenAverageAge,
  calculateAverageAgeDiff,
};
