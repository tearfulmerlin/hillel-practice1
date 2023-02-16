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
  const parents = arr.filter((parent) => {
    const children = arr.filter((child) => parent.name === child.father
    || parent.name === child.mother);
    console.log(children.sort((a, b) => a.length - b.length));

    return children.sort((a, b) => b.length - a.length);
  });

  return parents;
}

module.exports = {
  sortByAge,
  sortByName,
  sortByChildrenQuantity,
};
