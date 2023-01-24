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
  // write code here
  return arr.sort((a, b) => (a.died - a.born) - (b.died - b.born));
}

/** Sort by name */
function sortByName(arr) {
  // write code here
  arr.sort((a, b) => a.name.localeCompare(b.name));
}

/** Sort by children quantity */
function sortByChildrenQuantity(arr) {
  // write code here
  const sortedArr = arr.sort((pplA, pplB) => {
    const numChildrenA = arr.filter((person) => person
      .father === pplA.name || person.mother === pplA.name);

    const numChildrenB = arr.filter((person) => person
      .father === pplB.name || person.mother === pplB.name);

    return (numChildrenA.length - numChildrenB.length);
  });

  return sortedArr;
}

module.exports = {
  sortByAge,
  sortByName,
  sortByChildrenQuantity,
};
