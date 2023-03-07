const fetchPlanet = fetch('https://swapi.dev/api/planets/');

fetchPlanet
  .then((data) => data.json())
  .then((parsedData) => {
    console.log(parsedData);
    // throw new Error('error message');
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log('finally');
  });

const fetchPeople = fetch('https://swapi.dev/api/people/10/');

fetchPeople
  .then((data) => data.json())
  .then((parsedData) => {
    console.log(parsedData);
    // throw new Error('error message');
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log('finally');
  });
