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
  const newArr = [...arr];
  const namesMother = newArr.filter((mothers) => mothers.mother !== null)
    .map((names) => names.mother);
  const namesFather = newArr.filter((father) => father.father !== null)
    .map((names) => names.father);
  const parents = [].concat(namesMother, namesFather);
  const countParents = {};

  for (const item of parents) {
    countParents[item] = countParents[item] ? countParents[item] + 1 : 1;
  }

  newArr.forEach((object) => {
    if (parents.includes(object.name)) {
      object.kid = 1; // тут бы надо как то подставлять value из countParents
      // но не знаю как реализовать
    } else { object.kid = 0; }
  });

  const sortedByKids = newArr.sort((a, b) => a.kid - b.kid);

  return sortedByKids;
}

module.exports = {
  sortByAge,
  sortByName,
  sortByChildrenQuantity,
};
