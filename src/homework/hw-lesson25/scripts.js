async function getPlanets(page) {
  const response = await fetch(`https://swapi.dev/api/planets/${page ? `?${page}` : ''}`);

  return response.json();
}

async function getDetails(residentId) {
  const response = await fetch(residentId);

  return response.json();
}

function pagination(numberAll, numberPerPage) {
  const div = document.createElement('div');
  div.classList.add('pagination');
  document.body.insertBefore(div, document.querySelector('.planets-list'));
  for (let i = 1; i <= numberAll / numberPerPage; i++) {
    const pages = document.createElement('a');
    pages.classList.add(`page=${i}`);
    pages.innerText = i;
    div.appendChild(pages);
  }
}

function findVehicles(data) {
  const residents = document.querySelectorAll('.planets-list > li > a');
  const vehiclesArr = [];
  residents.forEach((resident) => {
    resident.addEventListener('click', (item) => {
      const links = data[item.target.className].vehicles;
      if (links.length === 0) {
        document.querySelector('.planets-list').innerHTML = '<li><a>There are not vehicles.</a></li>';
      }
      links.forEach((link) => {
        const getVehicles = getDetails(link);
        getVehicles.then((vehicle) => {
          vehiclesArr.push(`${vehicle.name} | ${vehicle.max_atmosphering_speed} | ${vehicle.cost_in_credits}`);
          document.querySelector('.planets-list').innerHTML = vehiclesArr.reduce((acc, content, index) => `${acc}<li><a class="${index}">${content}</a></li>`, '');
        });
      });
    });
  });
}

function findResidents(data) {
  const planets = document.querySelectorAll('.planets-list > li > a');
  const residentsArr = [];
  const gotResident = [];
  planets.forEach((planet) => {
    planet.addEventListener('click', (item) => {
      const { residents } = data.results[item.target.className];
      if (residents.length === 0) {
        document.querySelector('.planets-list').innerHTML = '<li><a>There are not residents.</a></li>';
      }
      residents.forEach((link) => {
        const getResident = getDetails(link);
        getResident.then((resident) => {
          residentsArr.push(`${resident.name} | ${resident.vehicles.length} | ${data.results[item.target.className].name}`);
          document.querySelector('.planets-list').innerHTML = residentsArr.reduce((acc, content, index) => `${acc}<li><a class="${index}">${content}</a></li>`, '');

          gotResident.push(resident);
          findVehicles(gotResident);
        });
      });
      setButton();
    });
  });
}

function renderPlanets() {
  let numberAllPlanets = 0;
  let numberPlanetsPerPage = 0;
  const planets = getPlanets();
  planets.then((data) => {
    const list = document.createElement('ul');
    list.classList.add('planets-list');
    list.innerHTML = data.results.reduce((acc, planet, index) => `${acc}<li><a class="${index}">${planet.name} | ${planet.population}</a></li>`, '');
    document.body.appendChild(list);
    findResidents(data);

    numberAllPlanets = data.count;
    numberPlanetsPerPage = data.results.length;
    pagination(numberAllPlanets, numberPlanetsPerPage);

    const pages = document.querySelectorAll('.pagination > a');
    pages.forEach((page) => {
      page.addEventListener('click', (item) => {
        const newPlanets = getPlanets(item.target.className);
        newPlanets.then((newPlanet) => {
          list.innerHTML = newPlanet.results.reduce((acc, planet, index) => `${acc}<li><a class="${index}">${planet.name} | ${planet.population}</a></li>`, '');
          findResidents(newPlanet);
        });
      });
    });
  });
}
renderPlanets();

function setButton() {
  document.body.removeChild(document.querySelector('.pagination'));
  const button = document.createElement('button');
  button.innerText = '< Show planets';
  button.addEventListener('click', () => {
    document.body.removeChild(document.querySelector('.planets-list'));
    document.body.removeChild(document.querySelector('button'));
    renderPlanets();
  });
  document.body.insertBefore(button, document.querySelector('.planets-list'));
}
