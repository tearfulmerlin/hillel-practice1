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
  return arr.slice().sort((a, b) => {
    const leftAge = a.died - a.born;
    const rightAge = b.died - b.born;

    return leftAge - rightAge;
  });
}

/** Sort by name */
function sortByName(arr) {
  const sortedPeople = [...arr];
  sortedPeople.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;

    return 0;
  });

  return sortedPeople;
}

/** Sort by children quantity */
function sortByChildrenQuantity(arr) {
  const copy = [...arr];

  copy.forEach((person) => {
    person.children = arr.filter((child) =>
      child.mother === person.name || child.father === person.name
    ).length;
  });

  return copy.sort((personA, personB) => personA.children - personB.children,
  );
}

module.exports = {
  sortByAge,
  sortByName,
  sortByChildrenQuantity,
};
