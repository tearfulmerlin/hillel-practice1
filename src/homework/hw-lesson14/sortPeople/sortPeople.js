'use strict';

/**
 *
 * Write three functions
 *
 * @param {arr} Array
 *
 * @return {Array}
*/

/** Sort by age */
function sortByAge(arr) {
  // const newArr = [...arr];
  // const  newArr = Object.assign([], arr);
  const newArr = Array.from(arr);

  newArr.sort((personA, personB) => {
    const agePersonA = personA.died - personA.born;
    const agePersonB = personB.died - personB.born;

    return agePersonA - agePersonB;
  });

  return newArr;
}

/** Sort by name */
function sortByName(arr) {
  const newArr = [...arr];

  newArr.sort((personA, personB) => {
    if (personA.name < personB.name) {
      return -1;
    }

    if (personA.name > personB.name) {
      return 1;
    }

    return 0;
  });

  return newArr;
}

function getChildrenQuantity(arr, sex, name) {
  const children = arr.filter((person) => {
    if (sex === 'm') {
      return person.father === name;
    }

    return person.mother === name;
  });

  return children.length;
}

/** Sort by children quantity */
function sortByChildrenQuantity(arr) {
  const newArr = [...arr];

  newArr.sort((personA, personB) => {
    const childQuantityA = getChildrenQuantity(arr, personA.sex, personA.name);
    const childQuantityB = getChildrenQuantity(arr, personB.sex, personB.name);

    return childQuantityA - childQuantityB;
  });

  return newArr;
}

module.exports = {
  sortByAge,
  sortByName,
  sortByChildrenQuantity,
};
