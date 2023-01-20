const numOrStr = prompt('input number or string');
console.log(numOrStr);

/** initial code */
// if (numOrStr === null) {
//   console.log('ви скасували');
// } else if (numOrStr.trim() === '') {
//   console.log('Empty String');
// } else if ( isNaN( +numOrStr ) ) {
//   console.log(' number is Ba_NaN');
// } else {
//   console.log('OK!')
// }

/** solution */
switch (numOrStr) {
  case null:
    console.log('ви скасували');
    break;

  case numOrStr.trim() === '' && numOrStr:
    console.log('Empty String');
    break;

  case Number.isNaN(+numOrStr) && numOrStr:
    console.log(' number is Ba_NaN');
    break;

  default:
    console.log('OK!');
    break;
}


/** alternative solution, but breaks single responsibility principle */
// numOrStr = 'new value';
// const array = [1, 2, 3, 4];

// switch (true) {
//   case numOrStr === null:
//     console.log('ви скасували');
//     break;

//   case numOrStr.trim() === '':
//     console.log('Empty String');
//     break;

//   case Number.isNaN(+numOrStr):
//     console.log(' number is Ba_NaN');
//     break;

//   case Array.isArray(array):
//     console.log('is array');

//   default:
//     console.log('OK!');
//     break;
// };
