/* eslint-disable no-plusplus */
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
  return arr.filter((person) => person.sex === 'f' && (person.father || person.mother));
}

/** Find people who lived over 60 years */
function findAllPeopleWhoLivedOver60(arr) {
  const over60 = [];
  for (let i = 0; i < arr.length; i++) {
    const person = arr[i];
    if (person.died - person.born > 60) {
      over60.push(person);
    }
  }

  return over60;
}

/** Find people without both parrents */
function findAllPeopleWithoutBothParrent(arr) {
  return arr.filter((person) => !person.father && !person.mother);
}

/** Find people with 3 children */
function findPeopleWithTreeChildren(arr) {
  const peopleWithThreeChildren = [];
  arr.forEach((person) => {
    let childrenCount = 0;
    arr.forEach((p) => {
      if (p.father === person.name || p.mother === person.name) {
        childrenCount++;
      }
    });
    if (childrenCount === 3) {
      peopleWithThreeChildren.push(person);
    }
  });

  return peopleWithThreeChildren;
}

module.exports = {
  findDoughters,
  findAllPeopleWhoLivedOver60,
  findPeopleWithTreeChildren,
  findAllPeopleWithoutBothParrent,
};
