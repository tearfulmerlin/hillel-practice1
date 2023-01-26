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
  let newArr = [...arr]
  return newArr.sort((a, b) => {
    const sortA = a.died - a.born;
    const sortB = b.died - b.born
    return sortA - sortB
  })
}
/** Sort by name */
function sortByName(arr) {
  let newArr = [...arr]
  return newArr.sort((a,b) => a.name.localeCompare(b.name))
}

/** Sort by children quantity */
function sortByChildrenQuantity(arr) {
  const newArray = [...arr];    
  return newArray.sort((a,b) => {
    const onechild = arr.filter((item) => item.father === a.name || item.mother === a.name)
    const moreChid = arr.filter((item) => item.father === b.name || item.mother === b.name)
    return onechild.length - moreChid.length
  })
}

module.exports = {
  sortByAge,
  sortByName,
  sortByChildrenQuantity,
};
