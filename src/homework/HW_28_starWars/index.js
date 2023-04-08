const pageContentSection = $(".container");
let pageIndex = 1;
let nextPageButton;

async function fetchData(url, pageIndex) {
  const response = await fetch(`${url}?page=${pageIndex}`);
  return response.json();
}

function showReturnButton() {
  const button = $("<button>Home</button>");

  pageContentSection.append(button);
  button.on("click", startingData);
}

function renderTitle(textContent) {
  const h3 = $("<h2>").text(textContent);

  pageContentSection.empty().append(h3);
}

async function showVehicleGallery(vehiclesURL, residentName) {
  renderTitle("Vehicles");
  showReturnButton();

  const mainContent = $("<div>").addClass("content");

  pageContentSection.append(mainContent);

  if (!vehiclesURL?.length) {
    const span = $("<span>")
      .text(`${residentName}" doesn't have any registered vehicles`)
      .addClass("empty-data");

    mainContent.empty().append(span);
  } else {
    const vehiclesData = await Promise.all(vehiclesURL.map(fetchData));
    const ul = $("<ul>").addClass("list");

    mainContent.append(ul);

    for (const vehicle of vehiclesData) {
      const li = $("<li>")
        .addClass("vehicle-item")
        .text(
          `${vehicle.name} | Speed: ${vehicle.max_atmosphering_speed} | Cost: ${vehicle.cost_in_credits}`
        );

      ul.append(li);
    }
  }
}

async function renderResidents(residentsURL, planet) {
  renderTitle("Residents");

  let mainContent = $("<div>").addClass("content");

  pageContentSection.append(mainContent);

  if (!residentsURL?.length) {
    showReturnButton();

    const span = $("<span>")
      .addClass("empty-data")
      .text(`No one lives on Planet "${planet}"`);

    mainContent.append(span);
  } else {
    const residentsData = await Promise.all(residentsURL.map(fetchData));
    const ul = $("<ul>").addClass("list");

    mainContent.append(ul);

    const currentResidentData = await Promise.all(
      residentsData.map(async (residentData) =>
        Object.assign(residentData, {
          homeworld: await fetchData(residentData.homeworld),
        })
      )
    );

    for (const resident of currentResidentData) {
      const li = $("<li>")
        .addClass("resident-item")
        .text(
          `${resident.name} | Vehicles count: ${resident.vehicles.length} | Homeworld: ${resident.homeworld.name}`
        )
        .click(() => {
          showVehicleGallery(resident.vehicles, resident.name);
        });
      ul.append(li);
    }
  }
}

function navigatePlanets(data) {
  let mainContent = $(".content");

  if (!mainContent.length) {
    mainContent = $("<div>").addClass("content");
    pageContentSection.append(mainContent);
  }

  const ul = $("<ul>").addClass("list");
  mainContent.empty().append(ul);

  for (const planet of data.results) {
    const li = $("<li>")
      .addClass("planet-item")
      .text(`${planet.name}`)
      .click(() => {
        renderResidents(planet.residents, planet.name);
      });
    ul.append(li);
  }
}

async function startingData() {
  renderTitle("Star Wars Planets");

  const planetsData = await fetchData(
    `https://swapi.dev/api/planets`,
    pageIndex
  );

  navigatePlanets(planetsData);

  if (pageIndex > 1) {
    showReturnButton();
  }

  const totalPages = Math.ceil(planetsData.count / planetsData.results.length);

  if (totalPages > 2) {
    const buttonsContainer = $("<div>").addClass("buttons-container");

    if (pageIndex > 1) {
      const previousPageButton = $("<button>Previous</button>").addClass(
        "previous-button"
      );
      buttonsContainer.append(previousPageButton);
      previousPageButton.on("click", () => {
        pageIndex--;
        startingData();
      });
    }

    for (let i = 1; i <= totalPages; i++) {
      const pageNumberButton = $(`<button>${i}</button>`).addClass(
        "page-number-button"
      );

      if (i === pageIndex) {
        pageNumberButton.addClass("active-page");
      }

      pageNumberButton.on("click", () => {
        pageIndex = i;
        startingData();
      });

      buttonsContainer.append(pageNumberButton);
    }

    if (pageIndex < totalPages) {
      const nextPageButton = $("<button>Next</button>").addClass("next-button");
      buttonsContainer.append(nextPageButton);
      nextPageButton.on("click", () => {
        pageIndex++;
        startingData();
      });
    }

    pageContentSection.append(buttonsContainer);
  }
}

startingData();
