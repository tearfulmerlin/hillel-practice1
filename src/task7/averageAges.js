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
  // filter, map - возвращает массив который соответствует заданным условиям
  // some - возвращает какой либо элемент массива заданному условию
  // find - возвращает первое значение которое удовлетворяет условию
  // reduce - принимает 4 параметра, два из которых не обязательны, первый - результирующая
  //  переменная(типа глобальная для всех "итераций"), второй - текущий элемент, индекс и массив,
  //  дополнительно можно указать начальное значение первого параметра
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
  let meanVal;
  let childArray = people.filter((el) => el.mother !== null);
  // meanVal = childArray.reduce((accum, el) => accum + );

  console.log(childArray);
}

// module.exports = {
//   calculateMenAverageAge,
//   calculateWomenAverageAge,
//   calculateAverageAgeDiff,
// };

const people = [
  {
    'name': 'Carolus Haverbeke',
    'sex': 'm',
    'born': 1832,
    'died': 1905,
    'father': 'Carel Haverbeke',
    'mother': 'Maria van Brussel'
  },
  {
    'name': 'Emma de Milliano',
    'sex': 'f',
    'born': 1876,
    'died': 1956,
    'father': 'Petrus de Milliano',
    'mother': 'Sophia van Damme'
  },
  {
    'name': 'Maria de Rycke',
    'sex': 'f',
    'born': 1683,
    'died': 1724,
    'father': 'Frederik de Rycke',
    'mother': 'Laurentia van Vlaenderen'
  },
  {
    'name': 'Jan van Brussel',
    'sex': 'm',
    'born': 1714,
    'died': 1748,
    'father': 'Jacobus van Brussel',
    'mother': 'Joanna van Rooten'
  },
  {
    'name': 'Philibert Haverbeke',
    'sex': 'm',
    'born': 1907,
    'died': 1997,
    'father': 'Emile Haverbeke',
    'mother': 'Emma de Milliano'
  },
  {
    'name': 'Jan Frans van Brussel',
    'sex': 'm',
    'born': 1761,
    'died': 1833,
    'father': 'Jacobus Bernardus van Brussel',
    'mother': null
  },
  {
    'name': 'Pauwels van Haverbeke',
    'sex': 'm',
    'born': 1535,
    'died': 1582,
    'father': 'N. van Haverbeke',
    'mother': null
  },
  {
    'name': 'Clara Aernoudts',
    'sex': 'f',
    'born': 1918,
    'died': 2012,
    'father': 'Henry Aernoudts',
    'mother': 'Sidonie Coene'
  },
  {
    'name': 'Emile Haverbeke',
    'sex': 'm',
    'born': 1877,
    'died': 1968,
    'father': 'Carolus Haverbeke',
    'mother': 'Maria Sturm'
  },
  {
    'name': 'Lieven de Causmaecker',
    'sex': 'm',
    'born': 1696,
    'died': 1724,
    'father': 'Carel de Causmaecker',
    'mother': 'Joanna Claes'
  },
  {
    'name': 'Pieter Haverbeke',
    'sex': 'm',
    'born': 1602,
    'died': 1642,
    'father': 'Lieven van Haverbeke',
    'mother': null
  },
  {
    'name': 'Livina Haverbeke',
    'sex': 'f',
    'born': 1692,
    'died': 1743,
    'father': 'Daniel Haverbeke',
    'mother': 'Joanna de Pape'
  },
  {
    'name': 'Pieter Bernard Haverbeke',
    'sex': 'm',
    'born': 1695,
    'died': 1762,
    'father': 'Willem Haverbeke',
    'mother': 'Petronella Wauters'
  },
  {
    'name': 'Lieven van Haverbeke',
    'sex': 'm',
    'born': 1570,
    'died': 1636,
    'father': 'Pauwels van Haverbeke',
    'mother': 'Lievijne Jans'
  },
  {
    'name': 'Joanna de Causmaecker',
    'sex': 'f',
    'born': 1762,
    'died': 1807,
    'father': 'Bernardus de Causmaecker',
    'mother': null
  },
  {
    'name': 'Willem Haverbeke',
    'sex': 'm',
    'born': 1668,
    'died': 1731,
    'father': 'Lieven Haverbeke',
    'mother': 'Elisabeth Hercke'
  },
  {
    'name': 'Pieter Antone Haverbeke',
    'sex': 'm',
    'born': 1753,
    'died': 1798,
    'father': 'Jan Francies Haverbeke',
    'mother': 'Petronella de Decker'
  },
  {
    'name': 'Maria van Brussel',
    'sex': 'f',
    'born': 1801,
    'died': 1834,
    'father': 'Jan Frans van Brussel',
    'mother': 'Joanna de Causmaecker'
  },
  {
    'name': 'Angela Haverbeke',
    'sex': 'f',
    'born': 1728,
    'died': 1734,
    'father': 'Pieter Bernard Haverbeke',
    'mother': 'Livina de Vrieze'
  },
  {
    'name': 'Elisabeth Haverbeke',
    'sex': 'f',
    'born': 1711,
    'died': 1754,
    'father': 'Jan Haverbeke',
    'mother': 'Maria de Rycke'
  },
  {
    'name': 'Lievijne Jans',
    'sex': 'f',
    'born': 1542,
    'died': 1582,
    'father': null,
    'mother': null
  },
  {
    'name': 'Bernardus de Causmaecker',
    'sex': 'm',
    'born': 1721,
    'died': 1789,
    'father': 'Lieven de Causmaecker',
    'mother': 'Livina Haverbeke'
  },
  {
    'name': 'Jacoba Lammens',
    'sex': 'f',
    'born': 1699,
    'died': 1740,
    'father': 'Lieven Lammens',
    'mother': 'Livina de Vrieze'
  },
  {
    'name': 'Pieter de Decker',
    'sex': 'm',
    'born': 1705,
    'died': 1780,
    'father': 'Joos de Decker',
    'mother': 'Petronella van de Steene'
  },
  {
    'name': 'Joanna de Pape',
    'sex': 'f',
    'born': 1654,
    'died': 1723,
    'father': 'Vincent de Pape',
    'mother': 'Petronella Wauters'
  },
  {
    'name': 'Daniel Haverbeke',
    'sex': 'm',
    'born': 1652,
    'died': 1723,
    'father': 'Lieven Haverbeke',
    'mother': 'Elisabeth Hercke'
  },
  {
    'name': 'Lieven Haverbeke',
    'sex': 'm',
    'born': 1631,
    'died': 1676,
    'father': 'Pieter Haverbeke',
    'mother': 'Anna van Hecke'
  },
  {
    'name': 'Martina de Pape',
    'sex': 'f',
    'born': 1666,
    'died': 1727,
    'father': 'Vincent de Pape',
    'mother': 'Petronella Wauters'
  },
  {
    'name': 'Jan Francies Haverbeke',
    'sex': 'm',
    'born': 1725,
    'died': 1779,
    'father': 'Pieter Bernard Haverbeke',
    'mother': 'Livina de Vrieze'
  },
  {
    'name': 'Maria Haverbeke',
    'sex': 'm',
    'born': 1905,
    'died': 1997,
    'father': 'Emile Haverbeke',
    'mother': 'Emma de Milliano'
  },
  {
    'name': 'Petronella de Decker',
    'sex': 'f',
    'born': 1731,
    'died': 1781,
    'father': 'Pieter de Decker',
    'mother': 'Livina Haverbeke'
  },
  {
    'name': 'Livina Sierens',
    'sex': 'f',
    'born': 1761,
    'died': 1826,
    'father': 'Jan Sierens',
    'mother': 'Maria van Waes'
  },
  {
    'name': 'Laurentia Haverbeke',
    'sex': 'f',
    'born': 1710,
    'died': 1786,
    'father': 'Jan Haverbeke',
    'mother': 'Maria de Rycke'
  },
  {
    'name': 'Carel Haverbeke',
    'sex': 'm',
    'born': 1796,
    'died': 1837,
    'father': 'Pieter Antone Haverbeke',
    'mother': 'Livina Sierens'
  },
  {
    'name': 'Elisabeth Hercke',
    'sex': 'f',
    'born': 1632,
    'died': 1674,
    'father': 'Willem Hercke',
    'mother': 'Margriet de Brabander'
  },
  {
    'name': 'Jan Haverbeke',
    'sex': 'm',
    'born': 1671,
    'died': 1731,
    'father': 'Lieven Haverbeke',
    'mother': 'Elisabeth Hercke'
  },
  {
    'name': 'Anna van Hecke',
    'sex': 'f',
    'born': 1607,
    'died': 1670,
    'father': 'Paschasius van Hecke',
    'mother': 'Martijntken Beelaert'
  },
  {
    'name': 'Maria Sturm',
    'sex': 'f',
    'born': 1835,
    'died': 1917,
    'father': 'Charles Sturm',
    'mother': 'Seraphina Spelier'
  },
  {
    'name': 'Jacobus Bernardus van Brussel',
    'sex': 'm',
    'born': 1736,
    'died': 1809,
    'father': 'Jan van Brussel',
    'mother': 'Elisabeth Haverbeke'
  },
];

calculateAverageAgeDiff(people);
