'use strict';

// filter, map - возвращает массив который соответствует заданным условиям
// some - true, если в массиве есть хоть какой-то элемент который соответствует условию
// every - true, если в массиве все элементы соответствуют заданному условию
// find - возвращает первое значение которое удовлетворяет условию
// reduce - принимает 4 параметра, два из которых не обязательны, первый - результирующая
//  переменная(типа глобальная для всех "итераций"), второй - текущий элемент, индекс и массив,
//  дополнительно можно указать начальное значение первого параметра

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
  let manArray = people.filter((el) => el.sex === 'm');
  if (century !== undefined) {
    manArray = manArray.filter((el) => Math.trunc((el.died / 100 + 1)) === century);
  }
  if (!manArray.length) {
    return 0;
  }
  let meanVal = manArray.reduce((resVal, el) => resVal + (el.died - el.born), 0) / manArray.length;
  // console.log(manArray);

  return +meanVal.toFixed(2);
  // write code here
  // learn how to use array methods like .filter .map .some .every .find .reduce
  // avoid using loop and forEach
  // replace `if ()` statement with &&, || or ?:
  // without nesting
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
function isMother(person, people) {
  return people.find((el) => person.name === el.mother);
}

function calculateWomenAverageAge(people, withChildren) {
  let womanArray = people.filter((el) => el.sex === 'f');
  if (withChildren === true) {
    womanArray = womanArray.filter((el) => isMother(el, people));
  }
  const returnAnswer = womanArray.reduce((sum, el) => sum + (el.died - el.born), 0) /
    womanArray.length;

  return +returnAnswer.toFixed(2);
}

/**
 * Implement calculateAverageAgeDiff function.
 *
 * The function returns an average age difference between a child and his or her
 * mother in the array. (A mother's age at child birth)
 *
 * Функция возвращает среднюю разницу в возрасте между ребенком и его матерью
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
  const motherArray = [];

  // знаходимо всix детей
  const childArray = people.filter((children) => {
    const haveMother = children.mother !== null;

    return onlyWithSon === true ? haveMother && children.sex === 'm' : haveMother;
  });

  // знаходимо матерей
  childArray.forEach((children) => {
    const mother = people.find((person) => children.mother === person.name);
    if (mother !== undefined) motherArray.push(mother);
  });

  // пiдрахунок сумарной рiзницi мiж матерю та дитиною
  const averageDiff = childArray.reduce((summary, child) => {
    const mother = motherArray.find((el) => child.mother === el.name);

    if (mother !== undefined) {
      return summary + child.born - mother.born;
    }

    return summary;
  }, 0) / motherArray.length;

  return +averageDiff.toFixed(2);
}

module.exports = {
  calculateMenAverageAge,
  calculateWomenAverageAge,
  calculateAverageAgeDiff,
};
