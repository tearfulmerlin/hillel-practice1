window.onload = function () {
    const preloader = document.getElementById('preloader');
    preloader.classList.add('hide-preloader');
    setInterval(function () {
        preloader.classList.add('preloader-hidden');
    }, 2000);
}

document.addEventListener('DOMContentLoaded', () => {

    const mediaFiles = document.querySelectorAll('div');
    let i = 0

    Array.from(mediaFiles).forEach((file, index) => {
        file.onload = () => {
            i++

            percents.innerHTML = ((i * 100) / mediaFiles.length).toFixed(1)

            if (i === mediaFiles.length) {
                preloader.classList.add('preloader--hide')
                percents.innerHTML = 100
            }
        }
    });

});

let currentActivePage = 1;
const mainSection = document.querySelector('.main');

async function startData(url) {
    const response = await fetch(url);
    return response.json();
}

function getTitle(textContent) {
    const h3 = document.createElement('h2');
    mainSection.replaceChildren(h3);
    h3.textContent = textContent;
}

async function displayVehiclesSection(vehiclesURL, residentName) {
    getTitle('Vehicles');
    backToHomeBtn();

    const contentSection = document.createElement('div');
    contentSection.classList.add('content');
    mainSection.append(contentSection);

    if (!vehiclesURL?.length) {
        const span = document.createElement('span');
        span.textContent = `"${residentName}" does not have vehicles`;
        span.classList.add('empty-data');
        contentSection.replaceChildren(span);
    } else {
        const vehiclesData = await Promise.all(vehiclesURL.map(startData));
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

async function getResidentsSection(residentsURL, planet) {
    getTitle('Residents');

    const contentSection = document.createElement('div');
    mainSection.append(contentSection);
    contentSection.classList.add('content');

    if (!residentsURL?.length) {
        backToHomeBtn();
        const span = document.createElement('span');
        span.classList.add('empty-data');
        span.textContent = ` "${planet}" does not have residents`;
        contentSection.append(span);
    } else {
        const residentsData = await Promise.all(residentsURL.map(startData));
        const ul = document.createElement('ul');
        ul.classList.add('list');
        contentSection.append(ul);

        const residentsDataUpdated = await Promise.all(residentsData.map(async (residentData) => {
            const homeworld = await startData(residentData.homeworld);

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

function getPlanets(data) {
    let contentSection = document.querySelector('.content');

    if (!contentSection) {
        contentSection = document.createElement('div');
        contentSection.classList.add('content');
        mainSection.append(contentSection);
    }

    const ul = document.createElement('ul');
    ul.classList.add('list');
    contentSection.replaceChildren(ul);

    data.forEach((e) => {
        const li = document.createElement('li');
        li.classList.add('planet-item');
        ul.append(li);
        li.innerText = `${e.name} | Population: ${e.population}`;
        li.onclick = () => {
            getResidentsSection(e.residents, e.name);
        };
    });
}

function getPlanetsSection(data) {
    getTitle('Planets');
    getPlanets(data);
}

async function loadPlanetsData(pageNumber) {
    const jsonData = await startData(`https://swapi.dev/api/planets/?page=${pageNumber}`);
    getPlanets(jsonData.results);
}

function displayPaginationSection(countRecords, countRecordOnPage) {
    const countPages = countRecords / countRecordOnPage;

    const paginationSection = document.createElement('div');
    mainSection.append(paginationSection);
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

function backToHomeBtn() {
    const button = document.createElement('button');
    button.textContent = 'Back';
    mainSection.append(button);
    button.onclick = initialLoad;
}

async function initialLoad() {
    currentActivePage = 1;
    const jsonData = await startData(`https://swapi.dev/api/planets/?page=${currentActivePage}`);

    getPlanetsSection(jsonData.results);
    displayPaginationSection(jsonData.count, jsonData.results?.length);
}

initialLoad();