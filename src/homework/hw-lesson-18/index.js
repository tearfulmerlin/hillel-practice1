/**
 * Task 1 (focused-input)
 * When focusing on input show
 * span under the input with text message "focused".
 *
 * When input lose the focus status
 * hide the span with text message.
 */
const focusedInputSection = document.querySelector('.focused-input');
const span = document.createElement('span');
span.innerText = 'focused';
const input = document.getElementById('nameInput');
input.onfocus = () => { focusedInputSection.appendChild(span); };
input.onblur = () => { focusedInputSection.removeChild(span); };

/**
 * Task 2 (table)
 * Generate table 10x10 filled with numbers from 1 to 100.
 * Table should generate dynamicly.
 */
const tableSection = document.querySelector('.table');
const borderStyle = '1px solid black';
const table = document.createElement('table');
table.style.border = borderStyle;
const createCell = (value) => {
  const cell = document.createElement('td');
  cell.style.border = borderStyle;
  cell.style.padding = '5px';
  cell.innerText = value;

  return cell;
};

for (let i = 0; i < 10; i++) {
  const row = document.createElement('tr');

  for (let j = 0; j < 10; j++) {
    row.appendChild(createCell(i * 10 + j + 1));
  }

  table.appendChild(row);
}

tableSection.appendChild(table);


/**
 * Task 3 (button-links)
 * Create 2 buttons on the page with js
 * When clicking on the first button ask user to enter in prompt a url.
 * When clicking on the second button redirect to the that url.
 * Add protocol (http/https) if entered url doesn't contain one.
 * If user click on the second button before clicking on the first one
 * show message: "Please click on the first button"
 */
const buttonSection = document.querySelector('.button-links');
let typedURL = null;

const createButton = (innerText) => {
  const button = document.createElement('button');
  button.innerText = innerText;

  return button;
};

const questionButton = createButton('Type URL');
questionButton.onclick = () => {
  const inputURL = prompt('Please enter any URL');
  typedURL = inputURL;
};

const redirectButton = createButton('Redirect to URL');
redirectButton.style.margin = '24px';
redirectButton.onclick = () => {
  if (typeof typedURL === 'string' && typedURL.trim() !== '') {
    typedURL = typedURL.trim();
    window.location.href = typedURL.startsWith('https') || typedURL.startsWith('http')
      ? typedURL
      : `http://${typedURL}`;
  } else {
    alert('Please click on the first button');
  }
};

buttonSection.appendChild(questionButton);
buttonSection.appendChild(redirectButton);

/**
 * Task 4 (random-pics)
 * Display pictures from "images" folder in a random order
 * (using Math.random)
 */
const imageSection = document.querySelector('.random-pics');
const divSection = document.createElement('div');
imageSection.appendChild(divSection);

const getRandomInt = () => (Math.floor(Math.random() * 10) + 1);
const displayedImages = [];

for (let i = 1; i <= 10; i++) {
  let number;

  // this functionality is just to display all uniq images
  do {
    number = getRandomInt();
    console.log(`${number} - ${displayedImages.includes(number)}`);
  } while (displayedImages.includes(number));

  displayedImages.push(number);

  const image = document.createElement('img');
  image.src = `./images/${number}.jpg`;
  image.alt = `image ${number}.jpg`;
  image.width = 150;
  image.height = 150;
  image.style.border = '5px solid black';
  image.style.borderRadius = '5px';
  image.style.margin = '10px';

  divSection.appendChild(image);
}
