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
  function Female(item) {
    return item.sex === 'f';
  }
  function notQuiteOrphan(item) {
    return item.mother != null || item.father != null;
  }
  const Femalefr = arr.filter(Female);
  const haveParents = Femalefr.filter(notQuiteOrphan);

  return haveParents;
}

/** Find people who lived over 60 years */
function findAllPeopleWhoLivedOver60(arr) {
  function doMath(item) {
    const born = Number(item.born);
    const died = Number(item.died);
    const age = died - born;

    return age > 60;
  }
  const filterAge = arr.filter(doMath);

  return filterAge;
}

/** Find people without both parrents */
function findAllPeopleWithoutBothParrent(arr) {
  function noMum(item) {
    return item.mother == null;
  }
  function noDad(item) {
    return item.father == null;
  }
  const sad = arr.filter(noMum);
  const superSad = sad.filter(noDad);

  return superSad;
}

/** Find people with 3 children */
function findPeopleWithTreeChildren(arr) {
  const parents = arr.filter((parent) => {
    const children = arr.filter((child) => parent.name === child.father
    || parent.name === child.mother);

    return children.length === 3;
  });

  return parents;
}

module.exports = {
  findDoughters,
  findAllPeopleWhoLivedOver60,
  findPeopleWithTreeChildren,
  findAllPeopleWithoutBothParrent,
};
