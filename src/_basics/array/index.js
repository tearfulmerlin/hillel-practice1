import people from './people.js';



// Array.length;
// console.log(people.length);
// console.log(people[38]);
// const arr = [];
// arr.length = 10;
// const arr = Array(10)
// console.log(arr)
// people.length = 45;
// console.log(people[25]);
// console.log(people.length);
// console.log(people);

// const vLength = 5;
// const hLength = 5;
// const arr = [];
// // arr.length = 5;

// for (let i = 0; i < vLength; i++) {
//   arr.push([]);

//   for (let j = 0; j < hLength; j++) {
//     if (j % 2 === 0) {
//       // arr[i][j] = Math.random();
//       arr[i].push(Math.random());
//     }
//   }
// }

// console.log(arr);



// Array.isArray();
// console.log(Array.isArray(people));
// console.log(typeof people);

// const assets = [
//   {
//     id: 1,
//     name: 'real estate',
//     children: [
//       {
//         id: 2,
//         name: 'flats',
//         children: [
//           {
//             id: 3,
//             name: 'rooms',
//           },
//         ],
//       },
//       {
//         id: 4,
//         name: 'houses',
//         children: [
//           {},
//         ],
//       },
//     ],
//   },
//   {
//     name: 'liquidity',
//     children: null,
//   },
// ];

// const func = (arr, acc = []) => {
//   arr.forEach((element) => {
//     if (element.children && Array.isArray(element.children)) {
//       acc.push(element.name);
//       func(element.children, acc);
//     } else {
//       acc.push(element.name);
//     }
//   });

//   return acc;
// };

// console.log(func(assets));



// Array.push();
// Array.pop();
// console.log(people.length)
// const pushResult = people.push({}, {});
// console.log(pushResult)
// console.log(people.length);
// const popResult = people.pop({}, {});
// console.log(popResult);



// Array.shift();
// Array.unshift();
// console.log(people.length);
// const shiftResult = people.shift({}, {});
// console.log(shiftResult);

// console.log(people.length);
// const unshiftesult = people.unshift({}, {});
// console.log(people);
// console.log(unshiftesult);



// Array.slice();
// Array.splice();
// const arrPart = people.slice(0, -2);
// console.log(arrPart.length);
// console.log(arrPart);

// people[0].name = 'test';
// console.log(people[0] === arrPart[0]);
// console.log(arrPart[0].name);

// const testArr = [1,2,3,4,5];

// const arrPart = people.splice(5, 0, ...testArr);
// console.log(arrPart);
// console.log(people);



// Array.reverse();
// const testArr = [1, 2, 3, 4, 5]; // [5, 4 , 3 , 2, 1]
// const reversed = testArr.reverse();

// console.log(testArr);
// console.log(reversed);
// console.log(testArr === reversed);
// reversed.push(10);

// console.log(testArr);



// Array.sort();
// a-zA-Z
// const testArr = ['A', 'a', 'z', 'Z', 'ы', 'ъ', 'ї']; // [5, 4 , 3 , 2, 1]
// // const testArr = ['я', 'ї', 'в'];
// // testArr.push('10');
// // testArr.push(10);
// testArr.forEach((i) => console.log(i.charCodeAt()));

// // const sorted = testArr.sort(); // 1  0 -1
// const sorted = testArr.sort((a, b) => {
//   console.log(a.name > b.name);
//   // return a.born - b.born;
//   return b.localeCompare(a);
//   // return a.name > b.name;
// }); // 1  0 -1
// const sorted = people.sort((a, b) => {
//   if (a.name < b.name) {
//     return -1;
//   }
//   if (a.name > b.name) {
//     return 1;
//   }
//   return 0;
// });
// const sorted2 = testArr.sort((a, b) => {
//   if (a.name < b.name) {
//     return -1;
//   }
//   if (a.name > b.name) {
//     return 1;
//   }
//   return 0;
// });

// console.log(sorted2);

// Array.filter();
// const filtered = people.filter((item, i) => i % 2 === 0);// 0  false

// console.log(people);
// console.log(filtered);



// Array.concat();
// people.length = 1;
// const concated = people.concat(filtered);

// const nedsted = [1,2,3, [1,2,3,4]];
// const notNedsted = [5,4,7];
// // console.log(people);
// // console.log(concated);
// const testArt2 = [10,20,30];
// console.log(notNedsted.concat(1,2,3, [1,2,3,4]));
// notNedsted.push(...testArt2)
// console.log(notNedsted);



// Array.fill();
// const testArr = []
// testArr.length = 10;
// testArr.fill(9, -2, -1)
// console.log(testArr)



// Array.flat();
// const nedsted = [1,2,3, [1,2,3,4, [10,20,30]]];
// console.log(nedsted.flat(3));



// Array.of(); // Array.of(2) => [2] vs Array(2) => [empty × 2]
// Array.from(); // iterable entity: string, Map, Set, list...

// const arr = Array.of(2);
// const arr = [];
// arr.push(2);
// const arr2 = Array(2); // => [empty × 2]
// const arr2 = []
// arr2.length = 2;

// const arr1 = Array.of(2, 3, 4, 5, 6, people);


// const arr1 = Array.from('test');
// const arr2 = 'test'.split('');

// console.log(arr1);
// console.log(arr2);




/** Part 2 */
// Array.at();
// console.log(people[people.length - 1]);
// console.log(people.at(-1));

// Array.find();
// console.log(people.find((person, index) => {
//   console.log({ sex: person.sex, index });

//   return person.sex === 'f';
// }));
// Array.findLast();
// console.log(people.findLast((person, index) => {
//   // console.log({ sex: person.sex, index });

//   return person.sex === 'f';
// }));


// Array.findIndex();
// console.log(people.findIndex((person, index) => {
//     console.log({ sex: person.sex, index });

//     return person.sex === 'f';
//   }));
// Array.findLastIndex();
// console.log(people.findLastIndex((person, index) => {
//   // console.log({ sex: person.sex, index });

//   return person.sex === 's';
// }));

// Array.indexOf();
// const arr = [1,2,3,4,56,7, 4,2,5];
// console.log(arr.indexOf(7, -4));
// console.log(people.indexOf());
// Array.lastIndexOf();
// const arr = [1,2,3,4,56,7, 4,2,5];
// console.log(arr.lastIndexOf(4));

// Array.includes();
// const person = people[55];
// console.log(people.includes(person));

// const isIncludes = !!people.find((person) => person.sex === 'f');
// console.log({isIncludes})


// Array.some();
// console.log(people.some((person, index, arr) => {
//   console.log({person, index, arr})

//   return person.mother === null;
// }))
// Array.every();
// console.log(people.every((person, index, arr) => {
//   console.log({person, index, arr});

//   return person.sex !== 't';
// }))



// Array.forEach();
// const result = people.forEach((person, index, arr) => {
//   console.log(person.name, index)

//   return person.name
// });

// console.log({result})

// Array.map();
// const result = people.map((person, index, arr) => {
//     // console.log(person.name, index)

//     return person.name;
//   });

//   console.log(result);
//   console.log(people);


// Array.reduce();
// Array.reduceRight();
// const reudeced = people.reduceRight((acc, person, index, arr) => {
//   // console.log({acc, person, index, arr})

//   acc[person.sex].push(person);

//   return acc;
// }, {
//   m: [],
//   f: [],
// })

// console.log({reudeced});


// Array.join();
// console.log(people.join())
// Array.toString();
// console.log([1,2,3,4,5, NaN, undefined, null, 'test'].toString(': '));
// Array.toLocaleString();
// console.log([new Date(),2000000,3,4,5].toLocaleString());



// Array.values();
// Array.entries();
// Array.keys();
// console.log(Array.from([1,2,3,4,5].values()));
// console.log(Array.from([1,2,3,4,5].keys()));
// console.log(Array.from([1,2,3,4,5].entries()));

// Array.copyWithin();
// Array.flatMap();
// console.log(people.map(()=> [[123]]).flat(2));
// console.log(people.flatMap(()=> [[123]]));
