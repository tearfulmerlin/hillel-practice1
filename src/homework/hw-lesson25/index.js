const planets = document.getElementById('planets');
const pagination = document.getElementById('pagination');
const residents = document.getElementById('residents');
const vehicles = document.getElementById('vehicles');
const urlApi = 'https://swapi.dev/api/planets/';

async function getApiData(url) {
  return fetch(url).then((response) => response.json());
}

function createPagination(result) {
  pagination.innerHTML = '';
  const totalPages = Math.ceil(result.count / result.results.length);
  const currentPage = result.next ? (result.next[result.next.length - 1] - 1) : totalPages;
  for (let i = 1; i <= totalPages; i++) {
    const pageLink = document.createElement('a');
    pageLink.innerText = i;
    pagination.appendChild(pageLink);
    if (i === currentPage) { pageLink.classList.add('active'); }
    pageLink.addEventListener('click', (event) => {
      event.preventDefault();
      loadPlanets(`${urlApi}?page=${i}`);
      pagination.innerHTML = '';
    });
  }
}

function loadPlanets(url) {
  planets.innerHTML = '';
  residents.innerHTML = '';
  vehicles.innerHTML = '';
  getApiData(url).then((result) => {
    result.results.forEach((obj) => {
      const planetLink = document.createElement('a');
      const planetPopul = document.createElement('span');
      const mybr = document.createElement('br');
      planetLink.innerText = obj.name;
      planetPopul.innerText = ` | ${obj.population}`;
      planetLink.addEventListener('click', (event) => {
        event.preventDefault();
        loadResidents(`${obj.url}`);
      });
      planets.appendChild(planetLink);
      planets.appendChild(planetPopul);
      planets.appendChild(mybr);
    });
    createPagination(result);
  });
}

loadPlanets(urlApi);

function loadResidents(url) {
  getApiData(url).then((data) => {
    const residentsList = document.createElement('ul');
    const residentPromises = data.residents.map((residentUrl) => getApiData(residentUrl));
    Promise.all(residentPromises).then((residentsData) => {
      residentsData.forEach((residentData) => {
        const residentName = residentData.name;
        const homeworldUrl = residentData.homeworld;
        getApiData(homeworldUrl).then((homeworldData) => {
          const residentHomeworld = homeworldData.name;
          const residentVehiclesCount = residentData.vehicles.length;
          const carItem = document.createElement('li');
          const carsLink = document.createElement('a');
          const homeworldName = document.createElement('span');
          carItem.innerText = `${residentName} |`;
          carsLink.innerText = ` ${residentVehiclesCount} `;
          homeworldName.innerText = `| ${residentHomeworld}`;
          residentsList.appendChild(carItem);
          carItem.appendChild(carsLink);
          carItem.appendChild(homeworldName);
          carsLink.addEventListener('click', (event) => {
            event.preventDefault();
            loadCars([...residentData.vehicles]);
          });
        });
      });
    });
    vehicles.innerHTML = '';
    residents.innerHTML = '';
    residents.appendChild(residentsList);
  });
}

function loadCars(arr) {
  const carsList = document.createElement('ul');
  const backButton = document.createElement('button');
  backButton.innerText = '< Only Planets';
  backButton.addEventListener('click', (event) => {
    event.preventDefault();
    loadPlanets(urlApi);
  });
  const carsPromises = arr.map((carUrl) => getApiData(carUrl));
  Promise.all(carsPromises).then((carsData) => {
    carsData.forEach((carData) => {
      const carItem = document.createElement('li');
      carItem.innerHTML = `${carData.name} | ${carData.max_atmosphering_speed} | ${carData.cost_in_credits}`;
      carsList.appendChild(carItem);
    });
    vehicles.innerHTML = '';
    vehicles.appendChild(backButton);
    vehicles.appendChild(carsList);
  });
}
