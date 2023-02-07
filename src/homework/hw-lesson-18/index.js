/**
 * Task 1 (focused-input)
 * When focusing on input show
 * span under the input with text message "focused".
 *
 * When input lose the focus status
 * hide the span with text message.
 */
const focusedInput = document.querySelector('.focused-input');
const span = document.createElement('span');
span.innerText = 'focused';

const input = document.getElementById('nameInput');

const onFocus = () => focusedInput.appendChild(span);

const onBlur = () => focusedInput.removeChild(span);

input.onfocus = onFocus;
input.onblur = onBlur;

/**
 * Task 2 (table)
 * Generate table 10x10 filled with numbers from 1 to 100.
 * Table should generate dynamicly.
 */
const table = document.createElement('table');
let iterator = 1;

for (i = 0; i < 10; i++) {
  const tr = document.createElement('tr');

  for (j = 0; j < 10; j++) {
    const td = document.createElement('td');

    td.innerText = iterator++;
    tr.insertAdjacentElement('beforeend', td);
  }
  table.insertAdjacentElement('beforeend', tr);
}
document.querySelector('.table').insertAdjacentElement('beforeend', table);

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
const buttonPrompt = document.createElement('button');
const buttonRedirect = document.createElement('button');

buttonPrompt.innerText = 'enter your url!';
buttonRedirect.innerText = 'Click for redirect';

let url = '';

function showPrompt() {
  url = prompt('your url');
  if (url !== null && !url.includes('https://')) {
    let temp = url.split('');
    temp.unshift('https://');
    url = temp.join('');
  }
  buttonRedirect.innerText = `redirect to ${url}`;
}
buttonPrompt.onclick = showPrompt;

function showRedirect() {
  if (url === '' || url === null) {
    buttonRedirect.innerText = 'Sorry, you should first enter url!';
  }
  else {
    location.href = url;
  }
}

buttonRedirect.onclick = showRedirect;

buttonSection.insertAdjacentElement('beforeend', buttonPrompt);
buttonSection.insertAdjacentElement('beforeend', buttonRedirect);

buttonRedirect.style.marginLeft = '10px';

/**
 * Task 4 (random-pics)
 * Display pictures from "images" folder in a random order
 * (using Math.random)
 */
const setImg = document.querySelector('.random-pics');
const set = 10;
const img = document.createElement('img');

const randNum = (max, min) => Math.round(min + Math.random() * (max - min));

setImg.insertAdjacentElement('beforeend', img);

img.alt = 'Picture';
img.src = `images/${randNum(set, 1)}.jpg`;
img.style.length = '150px';
img.style.width = '150px';
img.style.border = 'solid 1px';
