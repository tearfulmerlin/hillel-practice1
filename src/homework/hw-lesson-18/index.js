/**
 * Task 1 (focused-input)
 * When focusing on input show
 * span under the input with text message "focused".
 *
 * When input lose the focus status
 * hide the span with text message.
 */
const divInput = document.querySelector('.focused-input');
const input = document.getElementById('nameInput');

function insertFocus() {
  const span = document.createElement('span');
  span.innerText = 'focused';
  divInput.appendChild(document.createElement('br'));
  divInput.appendChild(span);
}

function remFocus() {
  divInput.removeChild(document.querySelector('.focused-input').children[4]);
  divInput.removeChild(document.querySelector('div.focused-input span'));
}

input.addEventListener('focus', insertFocus);
input.addEventListener('blur', remFocus);


/**
 * Task 2 (table)
 * Generate table 10x10 filled with numbers from 1 to 100.
 * Table should generate dynamicly.
 */
const divTabel = document.querySelector('.table');
for (let i = 1; i <= 100; i++) {
  const cell = document.createElement('div');
  cell.innerText = i;
  divTabel.appendChild(cell);
  cell.style.cssText = `
  border: #000 solid 1px;
  text-align: center;
  font-size: 30px;
`;
}
divTabel.style.cssText = `
  display: grid;
  grid-template-columns:auto auto auto auto auto auto auto auto auto auto;
  grid-gap: 0px;
`;

document.querySelector('div.table p').style.cssText = `
  grid-column: 1 / span 10;
`;



/**
 * Task 3 (button-links)
 * Create 2 buttons on the page with js
 * When clicking on the first button ask user to enter in prompt a url.
 * When clicking on the second button redirect to the that url.
 * Add protocol (http/https) if entered url doesn't contain one.
 * If user click on the second button before clicking on the first one
 * show message: "Please click on the first button"
 */
const buttonLinks = document.querySelector('.button-links');
const firstButton = document.createElement('button');

firstButton.innerText = 'First Button';
buttonLinks.appendChild(firstButton);
firstButton.style.fontSize = '24px';
firstButton.style.margin = '10px';
let enteredUrl = '';
firstButton.addEventListener('click', () => {
  enteredUrl = prompt('Please enter a URL');
});

const secondButton = document.createElement('button');

secondButton.innerText = 'Second Button';
buttonLinks.appendChild(secondButton);
secondButton.style.fontSize = '24px';
secondButton.style.margin = '10px';
secondButton.addEventListener('click', () => {
  if (enteredUrl) {
    if (!enteredUrl.startsWith('http://') || !enteredUrl.startsWith('https://')) {
      enteredUrl = `http://${enteredUrl}`;
    }
    window.location.replace(enteredUrl);
  } else {
    alert('Please click on the first button');
  }
});

/**
 * Task 4 (random-pics)
 * Display pictures from "images" folder in a random order
 * (using Math.random)
 */

const divRandPics = document.querySelector('.random-pics');
const image = new Image();
const random = Math.floor(Math.random() * 10) + 1;
image.src = `images/${random}.jpg`;
divRandPics.appendChild(image);
document.body.appendChild(image);
