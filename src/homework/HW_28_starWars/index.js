function starWars() {

  const pageContentSection = $('.container');
  let PageIndex = 1;

  async function fetchData(url) {
    const response = await fetch(url);

    return response.json();
  }

  function showReturnButton() {
    const button = $('<button>Home</button>');

    pageContentSection.append(button);
    button.on('click', startingData);
  }

  function renderTitle(textContent) {
    const h3 = $('<h2>').text(textContent);

    pageContentSection.empty().append(h3);
  }

  async function showVehicleGallery(vehiclesURL, residentName) {
    renderTitle('Vehicles');
    showReturnButton();

    pageContentSection.append(mainContent);

    if (!vehiclesURL?.length) {
      const span = $('<span>').text(`${residentName}" doesn't have any registered vehicles`).addClass('empty-data');

      mainContent.empty().append(span);

    } else {
      const vehiclesData = await Promise.all(vehiclesURL.map(fetchData));
      const ul = $('<ul>').addClass('list');

      mainContent.append(ul);

      for (const vehicle of vehiclesData) {
        const li = $('<li>').addClass('vehicle-item').text(`${vehicle.name} | Speed: ${vehicle
          .max_atmosphering_speed} | Cost: ${vehicle.cost_in_credits}`);

        ul.append(li);
      }
    }
  }

  const mainContent = $('<div>').addClass('content');

  async function renderResidents(residentsURL, planet) {
    renderTitle('Residents');

    const mainContent = $('<div>').addClass('content');

    pageContentSection.append(mainContent);

    if (!residentsURL?.length) {
      showReturnButton();

      const span = $('<span>').addClass('empty-data').text(`No one lives on Planet "${planet}"`);

      mainContent.append(span);

    } else {
      const residentsData = await Promise.all(residentsURL.map(fetchData));
      const ul = $('<ul>').addClass('list');

      mainContent.append(ul);

      const currentResidentData = await Promise.all(residentsData.map(async (residentData) => Object
        .assign(residentData, {homeworld: await fetchData(residentData.homeworld)})));

      for (const resident of currentResidentData) {
        const li = $('<li>').addClass('resident-item').text(`${resident.name} | Vehicles count: ${resident
          .vehicles.length} | Homeworld: ${resident.homeworld.name}`).click(() => {
          showVehicleGallery(resident.vehicles, resident.name);
        });
        ul.append(li);
      }
    }
  }

  function navigatePlanets(data) {
    let mainContent = $('.content');

    if (!mainContent.length) {
      mainContent = $('<div>').addClass('content');
      pageContentSection.append(mainContent);
    }

    const ul = $('<ul>').addClass('list');

    mainContent.empty().append(ul);

    data.forEach((element) => {
      const li = $('<li>').addClass('planet-item').text(`${element.name} | Population: ${element.population}`);

      ul.append(li);
      li.on('click', () => {
        renderResidents(element.residents, element.name);
      });
    });
  }

  function renderPlanets(data) {
    renderTitle('Planets');
    navigatePlanets(data);
  }

  async function fetchPlanetData() {
    const jsonData = await fetchData(`https://swapi.dev/api/planets/?page`);

    navigatePlanets(jsonData.results);
  }

  function pageNavigation(countRecords, countRecordOnPage) {
    const countPages = countRecords / countRecordOnPage;
    const pageSelector = $('<div>').addClass('pagination');

    pageContentSection.append(pageSelector);

    for (let i = 1; i <= countPages; i++) {
      const a = $('<a>').text(i);

      pageSelector.append(a);

      if (i === PageIndex) a.addClass('active');

      a.on('click', (e) => {
        if (+e.target.value !== PageIndex) {
          const activeA = $('.pagination a.active');

          activeA.removeClass('active');
          e.target.classList.add('active');
          PageIndex = +e.target.textContent;
          fetchPlanetData(PageIndex);
        }
      });
    }
  }

  async function startingData() {
    let PageIndex = 1;
    const url = `https://swapi.dev/api/planets/?page=${PageIndex}`;
    const jsonData = await $.getJSON(url);

    renderPlanets(jsonData.results);
    pageNavigation(jsonData.count, jsonData.results?.length);
  }

  startingData();
}

starWars();
