/* eslint-disable no-loop-func */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-use-before-define */
const planetsContainer = document.getElementById('planetsList');
const residentsContainer = document.getElementById('residentsList');
const vehiclesContainer = document.getElementById('vehiclesList');
const paginationContainer = document.querySelector('.pagination');
const loader = document.querySelector('.loader');
const planetsUrl = 'https://swapi.dev/api/planets/';
const nav = document.querySelector('nav');
let currentPage = 1;

let planets = [];
let residents = [];
let vehicles = [];

async function getPlanets(url) {
  try {
    // show loader
    loader.style.display = 'block';

    const response = await fetch(url);
    const data = await response.json();
    planets = data.results;
    showPlanets();
    showPagination(data);

    // hide loader
    loader.style.display = 'none';
  } catch (error) {
    console.log(error);
  }
}

async function getResidents(residentsUrls) {
  try {
    // show loader
    loader.style.display = 'block';

    const responses = await Promise.all(residentsUrls.map((url) => fetch(url)));
    const data = await Promise.all(responses.map((response) => response.json()));
    residents = data.map((residentData) => ({
      name: residentData.name,
      vehicles: residentData.vehicles,
      homeworld: residentData.homeworld,
    }));
    showResidents();

    // hide loader
    loader.style.display = 'none';
  } catch (error) {
    console.log(error);
  }
}

async function getVehicles(vehiclesUrls) {
  try {
    // show loader
    loader.style.display = 'block';

    const responses = await Promise.all(vehiclesUrls.map((url) => fetch(url)));
    const data = await Promise.all(responses.map((response) => response.json()));
    vehicles = data.map((vehicleData) => ({
      name: vehicleData.name,
      maxSpeed: vehicleData.max_atmosphering_speed,
      cost: vehicleData.cost_in_credits,
    }));
    showVehicles();

    // hide loader
    loader.style.display = 'none';
  } catch (error) {
    console.log(error);
  }
}

function showPlanets(limit = 10) {
  planetsContainer.innerHTML = '';
  nav.style.display = 'flex';
  for (let i = 0; i < limit && i < planets.length; i++) {
    const planet = planets[i];
    const planetItem = document.createElement('li');
    planetItem.innerHTML = `
      <h4>${planet.name}</h4>
      <p>Population: ${planet.population}</p>
    `;
    planetItem.addEventListener('click', () => {
      getResidents(planet.residents);
      nav.style.display = 'none';
      document.getElementById('planetName').textContent = planet.name;
      document.getElementById('residents').style.display = 'block';
      document.getElementById('planets').style.display = 'none';
    });
    planetsContainer.appendChild(planetItem);
  }
}

async function showResidents(maxCount = Infinity) {
  residentsContainer.innerHTML = '';
  loader.style.display = 'block';

  const residentPromises = residents.slice(0, maxCount).map(async (resident) => {
    const residentItem = document.createElement('li');
    const vehiclesCount = resident.vehicles.length;
    const homeworldUrl = resident.homeworld;
    try {
      // Fetch the name of the homeworld and display it instead of the URL
      const homeworldResponse = await fetch(homeworldUrl);
      const homeworldData = await homeworldResponse.json();
      const homeworldName = homeworldData.name;
      residentItem.innerHTML = `
        <h4>${resident.name}</h4>
        <p>Vehicles count: ${vehiclesCount}</p>
        <p>Homeworld: ${homeworldName}</p>
      `;
      residentItem.addEventListener('click', () => {
        getVehicles(resident.vehicles);
        document.getElementById('residentName').textContent = resident.name;
        document.getElementById('vehicles').style.display = 'block';
        document.getElementById('residents').style.display = 'none';
      });
      residentsContainer.appendChild(residentItem);
    } catch (error) {
      console.log(error);
    }
  });
  await Promise.all(residentPromises);

  loader.style.display = 'none'; // hide loader
}


function showVehicles() {
  vehiclesContainer.innerHTML = '';
  if (vehicles.length === 0) {
    vehiclesContainer.textContent = 'No vehicles found';
  } else {
    for (const vehicle of vehicles) {
      const vehicleItem = document.createElement('li');
      vehicleItem.innerHTML = `
          <h4>${vehicle.name}</h4>
          <p>Max speed: ${vehicle.maxSpeed}</p>
          <p>Cost: ${vehicle.cost}</p>
        `;
      vehiclesContainer.appendChild(vehicleItem);
    }
  }
  const showPlanetsBtn = document.createElement('button');
  showPlanetsBtn.textContent = 'Show planets';
  showPlanetsBtn.addEventListener('click', () => {
    currentPage = 1; // reset current page when showing planets
    getPlanets(planetsUrl);
    document.getElementById('vehicles').style.display = 'none';
    document.getElementById('residents').style.display = 'none';
    document.getElementById('planets').style.display = 'block';
  });
  vehiclesContainer.appendChild(showPlanetsBtn);
}



function showPagination(data) {
  const pagesCount = Math.ceil(data.count / data.results.length);
  paginationContainer.innerHTML = '';
  for (let i = 1; i <= pagesCount; i++) {
    const pageBtn = document.createElement('button');
    pageBtn.textContent = i;
    if (i === currentPage) { // check if this button corresponds to the current page
      pageBtn.classList.add('active');
    }
    pageBtn.addEventListener('click', () => {
      getPlanets(`${planetsUrl}?page=${i}`);
      const activeBtn = document.querySelector('.pagination button.active');
      if (activeBtn) {
        activeBtn.classList.remove('active');
      }
      pageBtn.classList.add('active');
      currentPage = i; // update the current page variable
    });
    paginationContainer.appendChild(pageBtn);
  }
}

document.getElementById('backToPlanets').addEventListener('click', () => {
  document.getElementById('residents').style.display = 'none';
  document.getElementById('planets').style.display = 'block';
});

getPlanets(planetsUrl);
