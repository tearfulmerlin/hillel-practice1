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
/**
 * @param {Array} arr
*/
function sortByAge(arr) {
}

/** Sort by name */
/**
 * @param {Array} arr
*/
function sortByName(arr) {
  const temp = [...arr];

  return temp.sort((leftEl, rightEl) => {
    if (leftEl.name < rightEl.name) return -1;

    return 1;
  });
}

/** Sort by children quantity */
/**
 * @param {Array} arr
*/
function sortByChildrenQuantity(arr) {
  const temp = [...arr];

  temp.forEach((person) => {
    const childrenAmnt = arr.filter((children) => {
      const haveMother = children.mother === person.name;
      const haveFather = children.father === person.name;

      return haveMother || haveFather;
    }).length;
    person.childrenAmnt = childrenAmnt;
  });

  return temp.sort((a, b) => {
    const leftChildrenAmnt = a.childrenAmnt;
    const rightChildrenAmnt = b.childrenAmnt;

    return leftChildrenAmnt - rightChildrenAmnt;
  });
}

module.exports = {
  sortByAge,
  sortByName,
  sortByChildrenQuantity,
};
