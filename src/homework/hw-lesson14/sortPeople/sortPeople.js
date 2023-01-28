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
  const arrSortAge = [...arr];

  arrSortAge.sort((a, b) => {
    const peopleA = a.born - a.died;
    const peopleB = b.born - b.died;

    return peopleB - peopleA;
  });

  return arrSortAge;
}

/** Sort by name */
function sortByName(arr) {
  const arrName = [...arr];

  arrName.sort((a, b) => a.name.localeCompare(b.name));

  return arrName;
}

/** Sort by children quantity */
function sortByChildrenQuantity(arr) {
  const sorted = [...arr];

  sorted.sort((a, b) => {
    const childrenA = arr.filter((person) => person.father === a.name || person.mother === a.name);
    const childrenB = arr.filter((person) => person.father === b.name || person.mother === b.name);

    return (childrenA.length - childrenB.length);
  });

  return sorted;
}

module.exports = {
  sortByAge,
  sortByName,
  sortByChildrenQuantity,
};
