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

/** Find people without both parrents */
function findAllPeopleWithoutBothParrent(arr) {
  const kids = arr.filter((person) => person.father === null && person.mother === null);

  return kids;
}

/** Find people with 3 children */
function findPeopleWithTreeChildren(arr) {
  const namesMother = arr.filter((mothers) => mothers.mother !== null)
    .map((names) => names.mother);
  const namesFather = arr.filter((father) => father.father !== null)
    .map((names) => names.father);
  const parents = [].concat(namesMother, namesFather);
  const countParents = {};

  for (const item of parents) {
    countParents[item] = countParents[item] ? countParents[item] + 1 : 1;
  }

  const parents3Kids = Object.keys(countParents).filter((item) => countParents[item] > 2);

  const result = arr.filter((name) => parents3Kids.includes(name.name));

  return result;
}

module.exports = {
  findDoughters,
  findAllPeopleWhoLivedOver60,
  findPeopleWithTreeChildren,
  findAllPeopleWithoutBothParrent,
};
