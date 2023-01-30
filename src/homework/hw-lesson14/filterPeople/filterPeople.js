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
  return arr.filter((person) => person.sex === 'f' && (person.father !== null || person.mother !== null));
}

/** Find people who lived over 60 years */
function findAllPeopleWhoLivedOver60(arr) {
  // write code here
  return arr.filter((person) => (person.died - person.born) > 60);
}

/** Find people without both parrents */
function findAllPeopleWithoutBothParrent(arr) {
  // write code here
  return arr.filter((person) => person.father === null && person.mother === null);
}

/** Find people with 3 children */
function findPeopleWithTreeChildren(arr) {
  // write code here
  const newArr = arr.slice();
  const arrPeopleWithChildren = [];
  let quantity = 0;
  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr.length; j++) {
      if (newArr[i].name === newArr[j].father || newArr[i].name === newArr[j].mother) {
        quantity += 1;
      }
    }
    newArr[i].children = quantity;
    quantity = 0;
    if (newArr[i].children === 3) {
      arrPeopleWithChildren.push(newArr[i]);
    }
  }

  return arrPeopleWithChildren;
}

module.exports = {
  findDoughters,
  findAllPeopleWhoLivedOver60,
  findPeopleWithTreeChildren,
  findAllPeopleWithoutBothParrent,
};
