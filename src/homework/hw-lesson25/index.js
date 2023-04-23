/* eslint-disable no-use-before-define */
let url = 'https://swapi.dev/api/planets/';
const elementStyles = `
  display: flex;
  justify-content: left;
  align-items: left;
`;

const swapiPlace = document.querySelector('.swapi');
const planetPlace = document.querySelector('.results');
const button = document.querySelector('.button');

async function getPlanets(urlPlanets) {
  const request = await fetch(urlPlanets);
  const data = await request.json();
  showPlanets(data.results);
}
getPlanets(url);

for (let i = 0; i < 6; i += 1) {
  const buttonNext = document.createElement('button');
  buttonNext.className = 'buttonNext';
  buttonNext.id = `https://swapi.dev/api/planets/?page=${i + 1}`;
  button.appendChild(buttonNext);
  buttonNext.innerHTML = i + 1;
}

swapiPlace.addEventListener('click', async (event) => {
  event.stopPropagation();
  if (event.target.className === 'buttonNext') {
    const clear = document.querySelectorAll('.planets');
    clear.forEach((item) => planetPlace.removeChild(item));
    getPlanets(event.target.id);
    url = event.target.id;
  }
  if (event.target.className === 'planet') {
    const checkClick = document.querySelectorAll('.resident');
    if (checkClick.length === 0) {
      const request = await fetch(url);
      const data = await request.json();
      data.results[event.target.id].residents.forEach(async (person) => {
        const personRequest = await fetch(person);
        const personData = await personRequest.json();
        const homeworldRequest = await fetch(personData.homeworld);
        const personHomeworld = await homeworldRequest.json();
        showResidents(personData, personHomeworld.name, event.target, event.target.id);
      });
      const spanBack = document.querySelector('span');
      spanBack.innerHTML = '(Go back to planets list)';
    }
    const cleenScreen = document.querySelectorAll('.planets');
    cleenScreen.forEach((el) => {
      if (el.id !== event.target.id) {
        planetPlace.removeChild(el);
      }
    });
    if (checkClick.length > 0) {
      checkElements(event.target, checkClick);
      const cleenTarget = document.querySelector('.planets');
      planetPlace.removeChild(cleenTarget);
      getPlanets(url);
    }
  }
  if (event.target.className === 'vehicles') {
    const checkClick = document.querySelectorAll('.eachVehicle');
    if (checkClick.length === 0) {
      const request = await fetch(url);
      const data = await request.json();
      data.results.forEach((element) => {
        element.residents.forEach(async (person) => {
          const personRequest = await fetch(person);
          const personData = await personRequest.json();
          if (event.target.id === personData.name) {
            personData.vehicles.forEach(async (item) => {
              const vehiclesdRequest = await fetch(item);
              const personvehicle = await vehiclesdRequest.json();
              showVehicles(personvehicle, event.target);
            });
          }
        });
      });
      const butBack = document.querySelector('.vehicles');
      butBack.innerHTML = '(Go back to residents list)';
    }
    if (checkClick.length > 0) {
      const a = document.querySelector('.vehicles');
      console.log(a);
      a.innerHTML = 'Show vehicles';
      checkElements(event.target, checkClick);
    }
  }
  if (event.target.className === 'backToListPlanets') {
    console.log('here');
    const clear = document.querySelectorAll('.planets');
    clear.forEach((item) => planetPlace.removeChild(item));
    getPlanets(url);
  }
});

function checkElements(eventTarget, arrElements) {
  arrElements.forEach((el) => eventTarget.removeChild(el));
}
function showPlanets(arr) {
  let contentPlanets = '';
  arr.forEach((item, index) => {
    if (item.residents.length > 0) {
      contentPlanets = `
        <ul><font size="6">${item.name}</font><br>
          <br><span class="planet" id="${index}">(show famous residents)</span><br><br>
          <li>population: ${item.population}</li>
          <li>climate: ${item.climate}</li>
          <li>diameter: ${item.diameter}</li>
          <li>gravity: ${item.gravity}</li>
          <li>orbital_period: ${item.orbital_period}</li>
          <li>rotation_period: ${item.rotation_period}</li>
          <li>surface_water: ${item.surface_water}</li>
          <li>terrain: ${item.terrain}</li>
        </ul>
        `;
    }
    if (item.residents.length === 0) {
      contentPlanets = `
        <ul><font size="6">${item.name}</font>
        <li>population: ${item.population}</li>
        <li>climate: ${item.climate}</li>
        <li>diameter: ${item.diameter}</li>
        <li>gravity: ${item.gravity}</li>
        <li>orbital_period: ${item.orbital_period}</li>
        <li>rotation_period: ${item.rotation_period}</li>
        <li>surface_water: ${item.surface_water}</li>
        <li>terrain: ${item.terrain}</li>
        </ul>
        `;
    }
    const planetTeg = document.createElement('div');
    planetTeg.id = index;
    planetTeg.className = 'planets';
    planetTeg.style = elementStyles;
    planetPlace.appendChild(planetTeg);
    planetTeg.innerHTML = contentPlanets;
  });
}

function showResidents(arr, home, placeShow) {
  let contentResident = '';
  if (arr.vehicles.length === 0) {
    contentResident = `
    <ul><font size="4">${arr.name}</font>
    <li>vehicles:
    <span> (has no vehicles)</span>
    </li>
    <li>homeworld: "${home}"</li>
    </ul><br>
    `;
  }
  if (arr.vehicles.length > 0) {
    contentResident = `
    <ul>${arr.name}
    <li>vehicles count: ${arr.vehicles.length}
    <span id ="${arr.name}" class="vehicles">(Show vehicles)</span>
    </li>
    <li>homeworld: "${home}"</li>
    </ul><br>
    `;
  }
  const residentTeg = document.createElement('div');
  residentTeg.className = 'resident';
  residentTeg.style = elementStyles;
  placeShow.appendChild(residentTeg);
  residentTeg.innerHTML = contentResident;
}

function showVehicles(arr, place) {
  let vehiclesInfo = '';
  vehiclesInfo = `
    <li>name:${arr.name}</li>
    <li>max speed: ${arr.max_atmosphering_speed}</li>
    <li>costs: "${arr.cost_in_credits}"</li><br>
  `;
  const vehiclesPlace = document.createElement('ul');
  vehiclesPlace.className = 'eachVehicle';
  place.appendChild(vehiclesPlace);
  vehiclesPlace.innerHTML = vehiclesInfo;
}
