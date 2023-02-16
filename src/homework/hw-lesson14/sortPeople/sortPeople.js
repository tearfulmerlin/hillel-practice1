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
  const sortedArr = [...arr];

  return sortedArr.sort((a, b) => (a.died - a.born) - (b.died - b.born));
}

/** Sort by name */
function sortByName(arr) {
  const sortedArr = [...arr];

  return sortedArr.sort((a, b) => (a.name > b.name ? 1 : -1));
}

/** Sort by children quantity */
function sortByChildrenQuantity(arr) {
  const newArr = [...arr];

  return newArr.sort((a, b) => {
    newArr.filter((fatMot) => {
      const filtered = [...newArr]
        .filter((sonDot) => sonDot.father === fatMot.name || sonDot.mother === fatMot.name);
      // eslint-disable-next-line no-param-reassign
      fatMot.chilCount = filtered.length;

      return fatMot;
    });

    return a.chilCount - b.chilCount;
  });
}

module.exports = {
  sortByAge,
  sortByName,
  sortByChildrenQuantity,
};
