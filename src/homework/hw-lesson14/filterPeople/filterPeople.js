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
  return arr.filter((persone) => persone.sex === 'f' && (persone.father !== null || persone.mother !== null));
}

/** Find people who lived over 60 years */
function findAllPeopleWhoLivedOver60(arr) {
  return arr.filter((persone) => (persone.died - persone.born) > 60);
}

/** Find people without both parrents */
function findAllPeopleWithoutBothParrent(arr) {
  return arr.filter((persone) => persone.father === null && persone.mother === null);
}

/** Find people with 3 children */
function findPeopleWithTreeChildren(arr) {
  return arr.filter((persone) => {
    const child = arr.filter((children) => {
      return children.father === persone.name || children.mother === persone.name;
    });
    return child.length === 3; 
  });
}

module.exports = {
  findDoughters,
  findAllPeopleWhoLivedOver60,
  findPeopleWithTreeChildren,
  findAllPeopleWithoutBothParrent,
};
