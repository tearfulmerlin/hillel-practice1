/* eslint-disable max-len */
/* eslint-disable no-use-before-define */
/* eslint-disable no-await-in-loop */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-loop-func */

/*
- On page load get list of planets from https://swapi.dev and show the list (planet name | population)
- Implement pagination for the lists (where possible)
- When clicking on a planet get list of planet residents and show them on a page (resident name | vehicles count | homeworld)
- When clicking on a resident get list of vehicles and show them on a page (vehicle name | max speed | cost)
- For vehicles list show button "Show planets" at the top which sets the view to the first page of planets list
*/

let currentActivePage = 1;
const containerSection = document.querySelector('.container');

async function loadData(url) {
  const response = await fetch(url);

  return response.json();
}

function displayBackToHomeButton() {
  const button = document.createElement('button');
  containerSection.append(button);
  button.textContent = 'Back to planets';
  button.onclick = initialLoad;
}

function displayTitle(textContent) {
  const h3 = document.createElement('h2');
  containerSection.replaceChildren(h3);
  h3.textContent = textContent;
}

async function displayVehiclesSection(vehiclesURL, residentName) {
  displayTitle('Vehicles');
  displayBackToHomeButton();

  const contentSection = document.createElement('div');
  contentSection.classList.add('content');
  containerSection.append(contentSection);

  if (!vehiclesURL?.length) {
    const span = document.createElement('span');
    span.textContent = `Resident "${residentName}" does not have vehicles`;
    span.classList.add('empty-data');
    contentSection.replaceChildren(span);
  } else {
    const vehiclesData = await Promise.all(vehiclesURL.map(loadData));
    const ul = document.createElement('ul');
    ul.classList.add('list');
    contentSection.append(ul);

    for (const vehicle of vehiclesData) {
      const li = document.createElement('li');
      ul.append(li);
      li.classList.add('vehicle-item');
      li.textContent = `${vehicle.name} | Speed: ${vehicle.max_atmosphering_speed} | Cost: ${vehicle.cost_in_credits}`;
    }
  }
}

async function displayResidentsSection(residentsURL, planet) {
  displayTitle('Residents');

  const contentSection = document.createElement('div');
  containerSection.append(contentSection);
  contentSection.classList.add('content');

  if (!residentsURL?.length) {
    displayBackToHomeButton();
    const span = document.createElement('span');
    span.classList.add('empty-data');
    span.textContent = `Planet "${planet}" does not have residents`;
    contentSection.append(span);
  } else {
    const residentsData = await Promise.all(residentsURL.map(loadData));
    const ul = document.createElement('ul');
    ul.classList.add('list');
    contentSection.append(ul);

    const residentsDataUpdated = await Promise.all(residentsData.map(async (residentData) => {
      const homeworld = await loadData(residentData.homeworld);

      return Object.assign(residentData, { homeworld });
    }));

    for (const resident of residentsDataUpdated) {
      const li = document.createElement('li');
      ul.append(li);
      li.classList.add('resident-item');
      li.textContent = `${resident.name} | Vehicles count: ${resident.vehicles.length} | Homeworld: ${resident.homeworld.name}`;
      li.onclick = () => { displayVehiclesSection(resident.vehicles, resident.name); };
    }
  }
}

function displayPlanets(data) {
  let contentSection = document.querySelector('.content');

  if (!contentSection) {
    contentSection = document.createElement('div');
    contentSection.classList.add('content');
    containerSection.append(contentSection);
  }

  const ul = document.createElement('ul');
  ul.classList.add('list');
  contentSection.replaceChildren(ul);

  data.forEach((element) => {
    const li = document.createElement('li');
    li.classList.add('planet-item');
    ul.append(li);
    li.innerText = `${element.name} | Population: ${element.population}`;
    li.onclick = () => {
      displayResidentsSection(element.residents, element.name);
    };
  });
}

function displayPlanetsSection(data) {
  displayTitle('Planets');
  displayPlanets(data);
}

async function loadPlanetsData(pageNumber) {
  const jsonData = await loadData(`https://swapi.dev/api/planets/?page=${pageNumber}`);
  displayPlanets(jsonData.results);
}

function displayPaginationSection(countRecords, countRecordOnPage) {
  const countPages = countRecords / countRecordOnPage;

  const paginationSection = document.createElement('div');
  containerSection.append(paginationSection);
  paginationSection.classList.add('pagination');

  for (let i = 1; i <= countPages; i++) {
    const a = document.createElement('a');
    paginationSection.append(a);
    a.innerText = i;

    if (i === currentActivePage) a.classList.add('active');

    a.onclick = (e) => {
      if (+e.target.value !== currentActivePage) {
        const activeA = document.querySelector('.pagination a.active');
        activeA.classList.remove('active');
        e.target.classList.add('active');

        currentActivePage = +e.target.textContent;
        loadPlanetsData(currentActivePage);
      }
    };
  }
}

async function initialLoad() {
  currentActivePage = 1;
  const jsonData = await loadData(`https://swapi.dev/api/planets/?page=${currentActivePage}`);

  displayPlanetsSection(jsonData.results);
  displayPaginationSection(jsonData.count, jsonData.results?.length);
}

initialLoad();
