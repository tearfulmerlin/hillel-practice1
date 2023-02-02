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
  const sorted = [...arr];
  sorted.sort((a, b) => (a.died - a.born) - (b.died - b.born));

  return sorted;
}

/** Sort by name */
function sortByName(arr) {
  const sortName = [...arr];
  sortName.sort((a, b) => a.name.localeCompare(b.name));

  return sortName;
}

/** Sort by children quantity */
function sortByChildrenQuantity(arr) {
  const quantArr = [...arr];
  quantArr.sort((a, b) => {
    const personeA = quantArr.filter((child) => child.father === a.name || child.mother === a.name);
    const personeB = quantArr.filter((child) => child.father === b.name || child.mother === b.name);

    return personeA.length - personeB.length;
  });
  return quantArr;
}

module.exports = {
  sortByAge,
  sortByName,
  sortByChildrenQuantity,
};
