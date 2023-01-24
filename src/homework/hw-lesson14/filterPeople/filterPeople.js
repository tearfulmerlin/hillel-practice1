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
  const daughters = arr.filter((person) => person.sex === 'f' && (person.mother !== null || person.father !== null));

  return daughters;
}

/** Find people who lived over 60 years */
function findAllPeopleWhoLivedOver60(arr) {
  const livedOut60 = arr.filter((person) => person.died - person.born > 60);

  return livedOut60;
}

/** Find people with both parrents */
function findAllPeopleWithoutBothParrent(arr) {
  const kids = arr.filter((person) => person.father === null && person.mother === null);

  return kids;
}

/** Find people with 3 children */
function findPeopleWithTreeChildren(arr) {
  // write code here
}

module.exports = {
  findDoughters,
  findAllPeopleWhoLivedOver60,
  findPeopleWithTreeChildren,
  findAllPeopleWithoutBothParrent,
};
