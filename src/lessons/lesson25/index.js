  
  // function heavyWork() {
//   let count = 0;

//   count = 5;

//   for (let i = 0; i < 1_000; i++) {
//     const pr = new Promise((resolve, reject) => {
//       if (i % 2 === 0) {
//         resolve();
//       }

//       // reject();
//     });
//   }

//   // alert(count);
// }

// document.querySelector('button').addEventListener('click', () => {
//   heavyWork();
// });


// function show(value) {
//   console.log(value);
// }

// function showFive() {
//   show(5);
// }

// function showTen(value) {
//   if (value === 1) {
//     return show(1);
//   }

//   return showTen(value - 1);
// }


// // debugger;

// window.setTimeout(() => {
//   console.log('time is up');
// }, 1000);

// showFive();


// showTen(10);


// Promise
function doThomething(resolve, reject) {
  // setTimeout(() => reject('error message'), 1000);
  setTimeout(() => resolve('data'), 2000);
}



function onResolved(result) {
  console.log(result);
}
function onRejected(error) {
  console.log(error);
}
// PromiseObj {
//   status: 'fulfilled' | 'rejected' | 'pending'
// }

// const promise = new Promise(doThomething);
// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('2s data'), 2000);
// });
// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('3s data');
//     console.log('3s');
//   }, 3000);
// });
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => reject('1.5s data'), 2500);
// });

// // const resultAll = Promise.all([promise, promise1, promise2]);
// // const resultAll = Promise.race([promise3, promise1, promise2]);
// const resultAll = Promise.allSettled([promise3, promise1, promise2]);
// // promise
// //   .then(onResolved)
// //   .catch(onRejected);

// resultAll.then((allData) => {
//   console.log(allData);
// });


// console.log('first');

// setTimeout(() => {
//   console.log('second');
// }, 0);

// console.log('third');


// console.log(promise);

// fetch
// const fetchResult = fetch('https://pokeapi.co/api/v2/pokemons/ditto');

// fetchResult
//   .then((data) => data.json())
//   .then((parsedData) => {
//     console.log(parsedData);
//     // throw new Error('error message');
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log('finally');
//   });




// async function

// try {
//   async function fetchData() {
//     let fetchResult;

//     try {
//       fetchResult = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
//     } catch (e) {

//     }

//     let parsed;

//     try {
//       parsed = await fetchResult.json();
//     } catch (e) {

//     }

//     return parsed;
//   }

//   let result;

//   async function proccessData(pokemon) {
//     result = await pokemon;
//     console.log('proccessing');
//     console.log('result');
//     console.log(result);
//   }

//   const fetched = fetchData();

//   // fetched.then((data) => {
//   //   console.log(data);
//   // });

//   console.log(result);

//   proccessData(fetched);

//   console.log(result);

//   throw new Error('global');
// } catch (err) {
//   console.log(err);
// } finally {
//   console.log('ended');
// }


// setTimout setInterval

const timeoutId = setTimeout(() => {
  console.log('after 6s');
}, 6000);

const id = setInterval(() => {
  console.log('every 2s');
}, 2000);

setTimeout(() => {
  console.log({
    id,
    timeoutId,
  });
  clearInterval(id);
  clearTimeout(timeoutId);
}, 5000);
