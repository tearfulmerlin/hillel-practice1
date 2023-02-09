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
  return arr.filter((element) => (element.sex === 'f') && (element.father !== null || element.mother !== null));
}

/** Find people who lived over 60 years */
function findAllPeopleWhoLivedOver60(arr) {
  return arr.filter((element) => element.died - element.born > 60);
}

/** Find people without both parrents */
function findAllPeopleWithoutBothParrent(arr) {
  return arr.filter((element) => element.father === null && element.mother === null);
}

/** Find people with 3 children */
function findPeopleWithTreeChildren(arr) {
  return arr.filter((fatMot) => {
    const filtered = [...arr]
      .filter((sonDot) => sonDot.father === fatMot.name || sonDot.mother === fatMot.name);

    return filtered.length > 2;
  });
}

module.exports = {
  findDoughters,
  findAllPeopleWhoLivedOver60,
  findPeopleWithTreeChildren,
  findAllPeopleWithoutBothParrent,
};
