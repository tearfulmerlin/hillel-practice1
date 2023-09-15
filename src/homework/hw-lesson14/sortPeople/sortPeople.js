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
  return [...arr].sort((a, b) => {
    const ageA = a.died - a.born;
    const ageB = b.died - b.born;

    return ageA - ageB;
  });
}

/** Sort by name */
function sortByName(arr) {
  function sorting(a, b) {
    const nameA = a.name;
    const nameB = b.name;
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    return 0;
  }

  return [...arr].sort(sorting);
}

/** Sort by children quantity */
function sortByChildrenQuantity(arr) {
  return [...arr].sort((a, b) => {
    const childA = arr.filter((parent) => parent.father === a.name || parent.mother === a.name);
    const childB = arr.filter((parent) => parent.father === b.name || parent.mother === b.name);

    return childA.length - childB.length;
  });
}

module.exports = {
  sortByAge,
  sortByName,
  sortByChildrenQuantity,
};
