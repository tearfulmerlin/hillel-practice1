const planetsUrl = 'https://swapi.dev/api/planets/';
const spanPage = document.createElement('span');

const buttonNext = document.createElement('button');
buttonNext.innerHTML = 'Next';
document.body.appendChild(buttonNext);

const buttonPrevious = document.createElement('button');
buttonPrevious.innerHTML = 'Back';
document.body.appendChild(buttonPrevious);

const planets = document.getElementById('planets');


function loadPlanets(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      planets.innerHTML = '';
      data.results.forEach((obj) => {
        planets.innerHTML += `${obj.name}<br>`;
      });

      planets.appendChild(spanPage);
      spanPage.innerHTML = `${data.next}`;

      if (data.previous) {
        buttonPrevious.disabled = false;
      } else { buttonPrevious.disabled = true; }

      if (data.next) {
        buttonNext.disabled = false;
      } else { buttonNext.disabled = true; }


      buttonNext.addEventListener('click', () => {
        loadPlanets(data.next);
      });
      buttonPrevious.addEventListener('click', () => {
        loadPlanets(data.previous);
      });
    });
}

loadPlanets(planetsUrl);

