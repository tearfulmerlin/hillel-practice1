/**
 * Best practices
 * no global scope usage
 * use strict
 * strict equal
 * use && and || to create magic
 * each entity in different file
 * JS code styles (google, airbnb)
 *
 */

// const num = 50;
// (num % 2 === 0) && window.document.write('<div>even number</div>');
// import User from './User';



// Arrow functions
// Syntax
// const func = (...num) => {
//   this.nums = num;

//   return this;
// };

// console.log(func(10, 1, 3, 4));
// No arguments (arguments are array-like objects)
// No prototype object for the Arrow function
// function withPrototype(...num) {
//   this.nums = num;

//   return this;
// }
// console.log(withPrototype.prototype);
// console.log(func.prototype);

// console.log(new withPrototype(1,2,3,4));
// console.log(new func(1,2,3,4));
// Cannot be invoked with a new keyword (Not a constructor function)
// No own this (call, apply & bind won't work as expected)
// const user = {
//   userName: 'John',
//   show() {
//     return this.userName;
//   }
// }

// const user2 = {
//   userName: 'James',
//   show: () => {
//     return this.userName;
//   }
// }

// const showUser = user.show;
// const showUser2 = user2.show;
// console.log(showUser.aplly(user));
// console.log(showUser2.apply(user));

// Duplicate-named parameters are not allowed
// function duplicateParams(num, num, num) {
  // console.log(num);
// }

// const duplicateParams = (num, num1, num2) => {
//   console.log(num, num1);
// }

// duplicateParams(1, 2, 3);

// Callback
// function adder(x) {
//   return x + 5;
// }

// const addFive = adder;

// console.log(adder === addFive);

// function doOperation(value, operation) {
//   return operation(value);
// }

// console.log(doOperation(10, adder));

// HOF
// const mapped = [1, 2, 3, 4].map(adder);

// console.log(mapped);
// const withoutArguments = (args, userName) => {
//   console.log(args, userName);
// }
// localStorage.setItem('userName', 'John');

// function withArgs(func) {
//   const userName = localStorage.getItem('userName');

//   return (...args) => {
//     return func(args, userName);
//   };
// }

// const funcWithArgs = withArgs(withoutArguments);

// console.log(
//   funcWithArgs(1,2,3,4)
// );
/* eslint-disable */
const filterArr = (arr, callback) => {
  const result = [];

  for (const element of arr) {
    if (callback(element, index)) {
      result.push(element);
    }
  }

  return result;
} 

// const nums = [1, 2, 3, 4, 5, 6];

// const filtered = filterArr(nums, (item) => item % 2);

// console.log(filtered);

// function mapArr () {}

const mapped = [1,2,3,4].map((value) => {
  return value * 2;
})

console.log(mapped);