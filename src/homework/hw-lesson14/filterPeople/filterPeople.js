'use strict';

/**
 *
 * Write three functions
 *
 * @param {arr} Array
 *
 * @return {Array}
*/

/** Find doughters with parrent */
function findDoughters(arr) {
  return arr.filter((item) => item.sex === 'f' && (item.father !== null || item.mother !== null))
}

/** Find people who lived over 60 years */
function findAllPeopleWhoLivedOver60(arr) {
  return arr.filter((item) => (item.died - item.born) > 60)
}

/** Find people without both parrents */
function findAllPeopleWithoutBothParrent(arr) {
  return arr.filter((item) => item.mother == null && item.father == null)
}

/** Find people with 3 children */
function findPeopleWithTreeChildren(arr) {
  return arr.filter((item) => {
  const children = arr.filter((child) => {
  return child.father === item.name || child.mother === item.name;
  })
  return children.length === 3
})
}
module.exports = {
  findDoughters,
  findAllPeopleWhoLivedOver60,
  findPeopleWithTreeChildren,
  findAllPeopleWithoutBothParrent,
};
