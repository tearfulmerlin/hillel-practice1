/* eslint-disable no-restricted-syntax */
const popupContent = document.querySelector('.popup .content');

const req = {
  data: null,
  url: {
    page: 1,
    category: 'planets',
    urlPart: 'https://swapi.dev/api/',
    getFullURL() {
      return `${this.urlPart + this.category}/?page=${this.page}`;
    },
  },
  next() {
    if (this.data.next !== null) {
      this.url.page += 1;

      return this.request(this.url.category, this.url.page);
    }

    return null;
  },
  prev() {
    if (this.data.previous !== null) {
      this.url.page -= 1;

      return this.request(this.url.category, this.url.page);
    }

    return null;
  },
  showWindow(name) {
    const el = document.querySelector(`.${name}`);
    el.style.display = 'flex';
    setTimeout(() => {
      el.style.opacity = '1';
    }, 300);
  },
  hideWindow(name) {
    const el = document.querySelector(`.${name}`);
    el.style.opacity = '0';
    setTimeout(() => {
      el.style.display = 'none';
    }, 300);
  },
  request(category, page = 1) {
    this.showWindow('preloader');
    this.url.category = category;
    this.url.page = page;

    //! doubt
    return new Promise((resolve) => {
      fetch(this.url.getFullURL())
        .then((res) => res.json())
        .then((data) => {
          this.data = data;
          this.hideWindow('preloader');
          resolve();
        });
    });
  },
};
popupContent.parentElement.addEventListener('click', (e) => {
  if (e.target.classList.contains('popup')) {
    req.hideWindow('popup');
    popupContent.innerHTML = '';
  }
});

function makeMultRequest(requestList) {
  return new Promise((success) => {
    const listInfo = [];
    if (!requestList.length) {
      success([]);
    } else {
      for (let i = 0; i < requestList.length; i++) {
        fetch(requestList[i])
          .then((d) => d.json())
          .then((data) => {
            listInfo.push(data);
            if (listInfo.length === requestList.length) {
              success(listInfo);
            }
          });
      }
    }
  });
}

function renderPlanets(planets) {
  const container = document.querySelector('.container');
  container.innerHTML = '';

  for (const planet of planets) {
    const li = document.createElement('li');
    const population = Number.isNaN(+planet.population)
      ? 'Unknown'
      : new Intl.NumberFormat('de-DE').format(planet.population);
    const temp = `
      <p class="name">${planet.name}</p>
      <p class="population">${population}</p>
      <p class="residents-list">Residents</p>
      `;
    li.innerHTML = temp;
    li.querySelector('.residents-list').addEventListener('click', planetClick);
    container.insertAdjacentElement('beforeend', li);
  }
}

function renderResidents(residents, planet) {
  req.showWindow('popup');
  popupContent.innerHTML = '';
  if (!residents.length) {
    popupContent.innerHTML = '<div class="not-found">There are no residents here!</div>';
  }
  for (const resident of residents) {
    const div = document.createElement('div');
    div.classList.add('resident-container');
    const temp = `
    <p class="name">${resident.name}</p>
    <p class="vehicles">Vehicles amnt: ${resident.vehicles.length}</p>
    <p>Homeworld: ${planet.parentElement.querySelector('.name').innerText}</p>
    `;
    div.innerHTML = temp;
    div.addEventListener('click', function () {
      residentsClick(residents, this);
    });
    popupContent.insertAdjacentElement('beforeend', div);
  }
}

function renderVehicles(vehiclesList) {
  req.showWindow('popup');
  popupContent.innerHTML = '';
  if (!vehiclesList.length) {
    popupContent.innerHTML = '<div class="not-found">There are no vehicles here!</div>';
  }
  console.log(vehiclesList);
  for (const vehicle of vehiclesList) {
    const div = document.createElement('div');
    div.classList.add('resident-container');
    const temp = `
    <p class="name">${vehicle.name}</p>
    <p>Max speed: ${vehicle.max_atmosphering_speed}</p>
    <p>Cost: ${vehicle.cost_in_credits} tubricks</p>
    `;
    div.innerHTML = temp;
    popupContent.insertAdjacentElement('beforeend', div);
  }
}

function planetClick() {
  const planetName = this.parentElement.querySelector('.name').innerText;
  const { residents } = req.data.results.find((el) => el.name === planetName);

  req.showWindow('preloader');
  const promise = makeMultRequest(residents);

  promise.then((data) => {
    req.hideWindow('preloader');
    renderResidents(data, this);
  });
}

function residentsClick(residentList, residentCard) {
  const name = residentCard.querySelector('.name').innerText;
  const { vehicles } = residentList.find((el) => el.name === name);
  req.showWindow('preloader');
  const vehiclesInfo = makeMultRequest(vehicles);
  vehiclesInfo.then((data) => {
    renderVehicles(data);
    req.hideWindow('preloader');
  });
}

req.request('planets').then(() => {
  renderPlanets(req.data.results);
});

document.querySelectorAll('button.navigation').forEach((el) => {
  el.addEventListener('click', function () {
    const className = this.classList.item(0);
    const answer = req[`${className}`]();

    if (answer !== null) {
      answer.then(() => {
        renderPlanets(req.data.results);
      });
    }
  });
});
