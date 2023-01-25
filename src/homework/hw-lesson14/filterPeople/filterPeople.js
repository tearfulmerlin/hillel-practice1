'use strict';

// eslint-disable-next-line no-unused-vars
const people = require('../people');

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
  // eslint-disable-next-line no-mixed-operators, no-shadow
  return arr.filter((person) => person.sex === 'f' && (person.father !== null || person.mother !== null));
}

/** Find people who lived over 60 years */
function findAllPeopleWhoLivedOver60(arr) {
  // eslint-disable-next-line no-shadow
  return arr.filter((person) => ((person.died - person.born) > 60));
}

/** Find people with both parrents */
function findAllPeopleWithoutBothParrent(arr) {
  // eslint-disable-next-line no-shadow
  return arr.filter((person) => person.father === null && person.mother === null);
}

/** Find people with 3 children */
function findPeopleWithTreeChildren(arr) {
  return arr.filter((person) => {
    // eslint-disable-next-line max-len
    const children = arr.filter((child) => [child.father, child.mother].includes(person.name));

    return children.length === 3;
  });
}


module.exports = {
  findDoughters,
  findAllPeopleWhoLivedOver60,
  findPeopleWithTreeChildren,
  findAllPeopleWithoutBothParrent,
};
