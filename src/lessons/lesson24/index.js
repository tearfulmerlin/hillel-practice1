// function getUser(id) {
// //  GET
// }

// function updateUser(id) {
//   // PUT or PATCH
// }

// function createUser(userData) {
//   // POST
// }

// function deleteUser(id) {
//   // DELETE
// }



// server
// var express = require('express');
// var app = express();

// // respond with "hello world" when a GET request is made to the homepage
// app.delete('/users', function(req, res) {

//   const userAgent = req['User-Agent']; 
//   // Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36

//   db.createUsaer(req.data);
//   res.send('hello world');
// });

// XMLHttpRequest
// fetch
// libs (axios)

// document.querySelector('button').addEventListener('click', () => {
//   const myRequest = new XMLHttpRequest();
  
//   // myRequest.open('GET', 'http://127.0.0.1:5500/src/lessons/lesson24/users.json', false);
//   // myRequest.open('GET', '/users.json', false);
//   myRequest.open('GET', './users.json', false);
  
//   myRequest.send();

//   if (myRequest.status === 200) {
//     console.log(myRequest);
//     console.log(JSON.parse(myRequest.response));
//   }
// })


// document.querySelector('button').addEventListener('click', () => {
//   const request = fetch('./users.json');

//   request.then((response) => response.json()
//     .then((data) => {
//       console.log(data);
//   }));

//   // console.log(request);
//   // console.log(new Promise((res,rej) => { rej()}));
// });


// async function getUsers() {
//   const response = await fetch('./user.json');

//   const data = await response.json();

//   console.log(data);
// }

// document.querySelector('button').addEventListener('click', () => {
//   const usersResult = getUsers();

//   console.log(usersResult);
// });




// HTTP status codes
// 100
// 200 - success / OK
// 300 - redirect
// 400 - client issues / 404
// 500 - server issues


// API - application programming interface
// fetch('https://pokeapi.co/api/v2/pokemon?offset=20&limit=50');

async function getPokemons() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon');

  const data = await res.json();

  return data;
}


document.querySelector('button').addEventListener('click', () => {
  const pokemons = getPokemons();

  pokemons.then((data) => {
    const list = document.createElement('ul');

    list.classList.add('pokemon-list');

    const items = data.results.reduce((acc, item) => `
      ${acc}<li><button class="detail" data-id="${item.name}">${item.name}</button></li>
      `, '');

    list.innerHTML = items;

    document.body.appendChild(list);

    addDetailsHandler();
  });
});



async function getPokemonDetail(id) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  const data = await res.json();

  return data;
}

function addDetailsHandler() {
  document.querySelectorAll('button.detail').forEach((elem) => elem.addEventListener('click', (event) => {
    const pId = event.target.dataset.id;

    getPokemonDetail(pId).then((details) => {
      const pokDetails = document.createElement('div');

      pokDetails.innerHTML = `
        <div>name: ${details.name} </div>
        <div>height: ${details.height} </div>
        <div>abilities: ${details.abilities.map(({ ability }) => ability.name).join(' | ')}</div>
      `;

      document.body.appendChild(pokDetails);
    });
  }));
}

