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
  const newArr = arr.slice();

  return newArr.sort((a, b) => (a.died - a.born) - (b.died - b.born));
}

/** Sort by name */
function sortByName(arr) {
  // write code here
  const newArr = arr.slice();

  return newArr.sort((a, b) => a.name.localeCompare(b.name));
}

/** Sort by children quantity */
function sortByChildrenQuantity(arr) {
  // write code here
  const newArr = arr.slice();
  let quantity = 0;
  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr.length; j++) {
      if (newArr[i].name === newArr[j].father || newArr[i].name === newArr[j].mother) {
        quantity += 1;
      }
    }
    newArr[i].children = quantity;
    quantity = 0;
  }

  return newArr.sort((a, b) => a.children - b.children);
}

module.exports = {
  sortByAge,
  sortByName,
  sortByChildrenQuantity,
};
