/**
 * Task 1 (focused-input)
 * When focusing on input show
 * span under the input with text message "focused".
 *
 * When input lose the focus status
 * hide the span with text message.
 */
function showText() {
  const br = document.createElement('br');
  const span = document.createElement('span');
  span.innerHTML = 'focused';
  document.querySelector('.focused-input').appendChild(br);
  document.querySelector('.focused-input').appendChild(span);
}
function hideText() {
  document.querySelector('.focused-input').removeChild(document.querySelector('br:last-of-type'));
  document.querySelector('.focused-input').removeChild(document.querySelector('span'));
}
document.querySelector('input').addEventListener('focus', showText);
document.querySelector('input').addEventListener('blur', hideText);


/**
 * Task 2 (table)
 * Generate table 10x10 filled with numbers from 1 to 100.
 * Table should generate dynamicly.
 */
const table = document.createElement('div');
table.style.display = 'flex';
table.style.flexWrap = 'wrap';
table.style.display = 'flex';
document.querySelector('.table').appendChild(table);
document.body.style.margin = '0';

for (let i = 1; i <= 100; i++) {
  const cell = document.createElement('div');
  cell.innerText = i;
  cell.style.border = '1px solid grey';
  cell.style.boxSizing = 'border-box';
  cell.style.width = '10%';
  cell.style.height = '20px';
  table.appendChild(cell);
}

/**
 * Task 3 (button-links)
 * Create 2 buttons on the page with js
 * When clicking on the first button ask user to enter in prompt a url.
 * When clicking on the second button redirect to the that url.
 * Add protocol (http/https) if entered url doesn't contain one.
 * If user click on the second button before clicking on the first one
 * show message: "Please click on the first button"
 */
const buttonFirst = document.createElement('button');
const buttonSecond = document.createElement('button');
buttonFirst.innerText = 'Provide url';
buttonSecond.innerText = 'Redirect to url';
document.querySelector('.button-links').appendChild(buttonFirst);
document.querySelector('.button-links').appendChild(buttonSecond);

let url = '';
function getUrl() {
  url = prompt('Provide url');
  if (url.slice(0, 4) !== 'https') {
    url = `https://${url}`;
  }
}
function redirect() {
  if (url === '') {
    alert('Please click on the first button');
  } else {
    document.location = url;
  }
}
buttonFirst.addEventListener('click', getUrl);
buttonSecond.addEventListener('click', redirect);

/**
 * Task 4 (random-pics)
 * Display pictures from "images" folder in a random order
 * (using Math.random)
 */
const random = Math.ceil(Math.random() * 10);
const img = document.createElement('img');
img.setAttribute('src', `images/${random}.jpg`);
document.querySelector('.random-pics').appendChild(img);
