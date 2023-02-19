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

  return arr.filter((person) => {
    return person.sex === 'f'&& (person.father !== null || person.mother !== null);
  });
}


/** Find people who lived over 60 years */
function findAllPeopleWhoLivedOver60(arr) {

  return arr.filter((person) => {
    return (person.died - person.born) > 60
  });
}

/** Find people without both parrents */
function findAllPeopleWithoutBothParrent(arr) {
  return arr.filter((person) => {
    return person.father === null && person.mother === null
  });
}

/** Find people with 3 children */
function findPeopleWithTreeChildren(arr) {
  return arr.filter((person) => {
    const children = arr.filter((child) => {
      return child.father === person.name || child.mother === person.name;
     });
    return children.length === 3;
  });
}

module.exports = {
  findDoughters,
  findAllPeopleWhoLivedOver60,
  findPeopleWithTreeChildren,
  findAllPeopleWithoutBothParrent,
};
