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
//npm run test2
function plusOneArray(arr) {
  if (!Array.isArray(arr) || typeof arr !== 'number' || arr.length === 0) {
    return null;
  }
  const arrLen = arr.length;
  for (i = 0; i < arrLen; i++) {
    if (arr[i] < 0 || arr[i] >= 10) {
      return null;
    }
  }
  for (let i = arr[arr.length - 1]; i < arrLen; i--) {
    let lastNum = arr[arr.length - 1]
    if (typeof lastNum === 'number' || lastNum < 9) {
      lastNum = lastNum + 1;
      arr.pop();
      arr.push(lastNum);
    }
    if (arr[arr.length - i] === 9) {
      arr[arr.length - i] = 0;
      arr.unshift(1);
      // if (true) {
      //   arr[arr.length - (i - 1)] = i + 1;
      //   return true
      // }
      // arr.length - i = 0;
      // arr[arr.length - i] - 1 = i + 1;
      
    }
    return arr;
  }


  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[0] === 0) {
  //     let newArr = [];
  //     arr = arr.join(''); //роблю число без зап'ятих
  //     arr = arr.splice(1, 0, ',') + 1; //додаю зап'яту після нуля і додаю один
  //     arr = arr.splice(1, 2);  // вирізаю зап'яту
  //     newArr = arr.push(i); //додаю в новоутворений масив
  //     return true;
  //   }
  //   if (arr[0] > 0) {     //typeof arr === 'number' && (arr[i] > 0 && arr[i] < 10)) {
  //     let newArr2 = [];
  //     arr = arr.join('') + 1;
  //     newArr2 = arr.push(i);
  //     return true;
  //   }
  // }
}






  // if (arr[0] !== 0) {
  //   let newArr = +arr.join('') + 1;
  //   return Array.from(String(newArr), Number);
  // }
  // const newArr = [];
  // arr.forEach((element, index) => {
  //   if (index === arrLen - 1) {
  //     element = element + 1;
  //   }
  //   newArr.push(element);
  // });
  // return newArr;



// function plusOneArray(arr) {
//   let newArr = null;
//   let newArrPlusOne = null;
//   let arr = [];
//   newArr = arr[arr.length - 1];
//   newArrPlusOne = newArr + 1;
//   function aaa(arr, newArrPlusOne) {
//     if (newArrPlusOne === '' || typeof arr !== 'number' || !Array.isArray(arr)){
//       return false;
//     }
//     function getValid(element) {
//       if (typeof arr === 'number' || !Number.isNaN(+element)) {
//         return true;
//       }
//     }
//   }  
// }   
// plusOneArray(arr);
// console.log(newArr);
// console.log(newArrPlusOne);


  // for (let i = 0; i < arr.length; i++) {
  //   if (!Array.isArray(arr) && arr[i] < 0 && arr[i] === '' && arr[i] === Number.isNaN) {
  //     return false;
  //   }
  //   if (typeof arr === 'number') {
  //     return true;
  //   }
  //   function getValid(element) {
  //     if (typeof element === 'number' && !Number.isNaN(+element)) {
  //       return true;
  //     }
  //   return false;
  //   }
  // }
  
  // if (typeof arr + 1 === 'number') {
  //   return true;
  // }

module.exports = plusOneArray;
