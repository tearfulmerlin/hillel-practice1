/* eslint-disable no-param-reassign */

/**
 *
 * Given an array of integers of any length, return an array
 * that has 1 added to the value represented by the array.
 * the array can't be empty
 * only non-negative, single digit integers are allowed
 * Return null (or your language's equivalent) for invalid inputs.
 *
 * Examples
 *
 * Valid arrays
 * [4, 3, 2, 5] would return [4, 3, 2, 6]
 * [1, 2, 3, 9] would return [1, 2, 4, 0]
 * [9, 9, 9, 9] would return [1, 0, 0, 0, 0]
 * [0, 1, 3, 7] would return [0, 1, 3, 8]
 *
 * Invalid arrays
 * [0, 1, -3, 7] would return null
 * [] would return null
 * [1, -9] is invalid because -9 is not a non-negative integer
 * [1, 2, 33] is invalid because 33 is not a single-digit integer
 *
 * @param {Array} arr
 *
 * @return {Array}
*/
// 1 варіант через for (old version)
// function plusOneArray(arr) {
//   if (!Array.isArray(arr)
//     || !arr.length
//     || arr.some((item) => Number.isNaN(item) || typeof item !== 'number' || item < 0 || item > 9)) {
//     return null;
//   }

//   let result = [];
//   const lastIndex = arr.length - 1;
//   const lastValue = arr[lastIndex] + 1;
//   let extraValue = 1;

//   if (lastValue > 9) {
//     result.push(lastValue % 10);

//     for (let i = lastIndex - 1; i >= 0; i--) {
//       const newValue = arr[i] + extraValue;

//       if (newValue > 9) {
//         result.unshift(newValue % 10);
//       } else {
//         result.unshift(newValue);
//         extraValue = 0;
//       }
//     }

//     if (extraValue) {
//       result.unshift(extraValue);
//     }
//   } else {
//     result = [...arr];
//     result[lastIndex] = lastValue;
//   }

//   return result;
// }

// 2 варіант через for (рефакторинг предыдущего метода)
// function plusOneArray(arr) {
//   if (!Array.isArray(arr)
//     || !arr.length
//     || arr.some((item) => Number.isNaN(item) || typeof item !== 'number' || item < 0 || item > 9)) {
//     return null;
//   }

//   arr.reverse();
//   let commonVal = 1;

//   for (let i = 0; i < arr.length; i++) {
//     const newValue = arr[i] + commonVal;

//     if (newValue > 9) {
//       arr[i] = 0;
//       commonVal = 1;
//     } else {
//       arr[i] = newValue;
//       commonVal = 0;
//       break;
//     }
//   }

//   if (commonVal) arr.push(commonVal);

//   return arr.reverse();
// }

// 3 варіант через reduceRight
// function plusOneArray(arr) {
//   if (!Array.isArray(arr)
//     || !arr.length
//     || arr.some((item) => Number.isNaN(item) || typeof item !== 'number' || item < 0 || item > 9)) {
//     return null;
//   }

//   const result = arr.reduceRight((values, currentValue, currentIndex) => {
//     const newValue = values[values.length - 1] + currentValue;

//     if (newValue > 9) {
//       values[values.length - 1] = 0;
//       values.push(1);
//     } else {
//       values[values.length - 1] = newValue;
//       if (currentIndex !== 0) {
//         values.push(0);
//       }
//     }

//     return values;
//   }, [1]);

//   return result.reverse();
// }

// 4 варіант через reduceRight + % + /
// function plusOneArray(arr) {
//   if (!Array.isArray(arr)
//     || !arr.length
//     || arr.some((item) => Number.isNaN(item) || typeof item !== 'number' || item < 0 || item > 9)) {
//     return null;
//   }

//   const result = arr.reduceRight((values, currentValue, currentIndex) => {
//     const newValue = values[values.length - 1] + currentValue;
//     const nextIncrement = Math.floor(newValue / 10);
//     values[values.length - 1] = newValue % 10;

//     if (currentIndex !== 0 || nextIncrement > 0) {
//       values.push(nextIncrement);
//     }

//     return values;
//   }, [1]);

//   return result.reverse();
// }

// 5 варіант через map
// function plusOneArray(arr) {
//   if (!Array.isArray(arr)
//     || !arr.length
//     || arr.some((item) => Number.isNaN(item) || typeof item !== 'number' || item < 0 || item > 9)) {
//     return null;
//   }

//   let increment = 1;

//   const newArr = arr.reverse().map((value) => {
//     const newValue = value + increment;
//     increment = Math.floor(newValue / 10);

//     return newValue % 10;
//   });

//   if (increment) newArr.push(increment);

//   return newArr.reverse();
// }

// 6 варіант short and simple
// function plusOneArray(arr) {
//   if (!Array.isArray(arr)
//     || !arr.length
//     || arr.some((item) => Number.isNaN(item) || typeof item !== 'number' || item < 0 || item > 9)) {
//     return null;
//   }

//   const value = +arr.join('') + 1;
//   const newArr = Array.from(String(value).split(''), (chr) => +chr);

//   if (arr.length > newArr.length) {
//     newArr.unshift(0);
//   }

//   return newArr;
// }

// 7 варіант через short and simple in two rows
function plusOneArray(arr) {
  if (!Array.isArray(arr)
    || !arr.length
    || arr.some((item) => Number.isNaN(item) || typeof item !== 'number' || item < 0 || item > 9)) {
    return null;
  }

  const newArr = (+arr.join('') + 1).toString().split('').map((chr) => +chr);

  return arr.length > newArr.length ? newArr.unshift(0) : newArr;
}

module.exports = plusOneArray;
