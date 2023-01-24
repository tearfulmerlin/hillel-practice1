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
  const newArr = [...arr];
  const sortedAge = newArr.sort((a, b) => (a.died - a.born) - (b.died - b.born));

  return sortedAge;
}

/** Sort by name */
function sortByName(arr) {
  const newArr = [...arr];
  const sortedName = newArr.sort((a, b) => a.name.localeCompare(b.name));

  return sortedName;
}

/** Sort by children quantity */
function sortByChildrenQuantity(arr) {
  // write code here
}

module.exports = {
  sortByAge,
  sortByName,
  sortByChildrenQuantity,
};
