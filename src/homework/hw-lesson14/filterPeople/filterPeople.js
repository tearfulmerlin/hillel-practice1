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
  // write code here
  return arr.filter((el) => el.sex === 'f').filter((el) => el.mother !== null || el.father !== null);
}

/** Find people who lived over 60 years */
function findAllPeopleWhoLivedOver60(arr) {
  // write code here
  return arr.filter((el) => el.died - el.born > 60);
}

/** Find people without both parrents */
function findAllPeopleWithoutBothParrent(arr) {
  // write code here
  return arr.filter((el) => el.mother === null && el.father === null);
}

/** Find people with 3 children */
function findPeopleWithTreeChildren(arr) {
  // write code here
  const filteredArr = arr.filter((ppl) => {
    const numChildren = arr
      .filter((person) => person.father === ppl.name || person.mother === ppl.name);

    return (numChildren.length >= 3);
  });

  return filteredArr;
}

module.exports = {
  findDoughters,
  findAllPeopleWhoLivedOver60,
  findPeopleWithTreeChildren,
  findAllPeopleWithoutBothParrent,
};
