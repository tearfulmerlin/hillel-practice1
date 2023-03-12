const planetsUrl = 'https://swapi.dev/api/planets/';
const spanPage = document.createElement('span');
const pagination = document.getElementById('pagination');
const buttonNext = document.getElementById('buttonNext');
const buttonPrevious = document.getElementById('buttonPrevious');

const planets = document.getElementById('planets');
let count = 0;
let planetsPerPage = 0;

function paginationGeneration(urlId) {
  const pagesCount = Math.ceil(count / planetsPerPage);
  for (let i = 1; i <= pagesCount; i++) {
    const pageLink = document.createElement('a');
    pageLink.id = `${i}`;
    console.log(i, urlId);
    pageLink.innerText = i;
    if (pageLink.id == urlId) { pageLink.classList.add('active'); }
    pagination.appendChild(pageLink);
  }
}


function loadPlanets(url, urlId) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      planets.innerHTML = '';
      data.results.forEach((obj) => {
        planets.innerHTML += `${obj.name}<br>`;
        count = data.count;
        planetsPerPage = data.results.length;
      });
      paginationGeneration(urlId);
    });
}

pagination.addEventListener('click', (event) => {
  event.preventDefault();
  const urlId = event.target.id;
  loadPlanets(`${planetsUrl}?page=${urlId}`, urlId);
  pagination.innerHTML = '';
});


loadPlanets(planetsUrl, 1);
