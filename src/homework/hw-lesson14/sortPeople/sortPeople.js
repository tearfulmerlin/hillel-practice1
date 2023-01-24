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
  const arrSortName = [...arr];

  arrSortName.sort((a, b) => a.name.localeCompare(b.name));

  return arrSortName;
}


/** Sort by children quantity */
// eslint-disable-next-line no-unused-vars
function sortByChildrenQuantity(arr) {

  const sorted = [...arr];

  sorted.sort((a, b) => {
    const quantityA = arr.filter((person) => {
      return person.father === a.name || person.mother === a.name;
    });
    const quantityB = arr.filter((person) => {
      return person.father === b.name || person.mother === b.name;
    });

    return (quantityA.length - quantityB.length);
  });

  return sorted;
}


module.exports = {
  sortByAge,
  sortByName,
  sortByChildrenQuantity,
};
