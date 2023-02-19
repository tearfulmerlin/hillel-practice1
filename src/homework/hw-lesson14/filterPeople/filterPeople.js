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
  return arr.filter((el) => {
    const haveParents = el.mother !== null || el.father !== null;
    const isGirl = el.sex === 'f';

    return haveParents && isGirl;
  });
}

/** Find people who lived over 60 years */
function findAllPeopleWhoLivedOver60(arr) {
  return arr.filter((person) => {
    const age = person.died - person.born;

    return age > 60;
  });
}

/** Find people without both parrents */
function findAllPeopleWithoutBothParrent(arr) {
  return arr.filter((person) => person.mother === null && person.father === null);
}

/** Find people with 3 children */
function findPeopleWithTreeChildren(arr) {
  const result = [];
  arr.forEach((person) => {
    const childs = arr.filter((el) => el.mother === person.name || el.father === person.name);

    if (childs.length === 3) {
      result.push(person);
      // console.log('parent name:', person.name);
      // console.log('childs:');
      // childs.forEach((el) => console.log(el.name));
      // console.log('\n\n');
    }
  });

  return result;
}

module.exports = {
  findDoughters,
  findAllPeopleWhoLivedOver60,
  findPeopleWithTreeChildren,
  findAllPeopleWithoutBothParrent,
};
