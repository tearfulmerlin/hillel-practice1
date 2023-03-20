/* eslint-disable no-unused-vars */
/**
 * Task 1 (focused-input)
 * When focusing on input show
 * span under the input with text message "focused".
 *
 * When input lose the focus status
 * hide the span with text message.
 */

// eslint-disable-next-line no-unused-vars
const inputName = document.getElementById('nameInput');
// eslint-disable-next-line no-unused-vars
function getFocus(e) {
  const textSpan = document.createElement('span');
  textSpan.innerText = 'focused!';
  textSpan.id = 'spanFocus';
  e.target.insertAdjacentElement('afterend', textSpan);
}

inputName.onfocus = getFocus;

function getBlur() {
  const span = document.querySelector('#spanFocus');
  document.querySelector('.focused-input').removeChild(span);
}

inputName.onblur = getBlur;

/**
 * Task 2 (table)
 * Generate table 10x10 filled with numbers from 1 to 100.
 * Table should generate dynamicly.
 */

const table = document.createElement('table');

table.style.cssText = 'border-collapse: collapse; font-size: 15px;';

const col = 10;
const row = 10;
let itr = 1;

for (let i = 0; i < col; i++) {
  const tr = document.createElement('tr');
  for (let j = 0; j < row; j++) {
    const td = document.createElement('td');
    // eslint-disable-next-line no-plusplus
    td.innerText = itr++;
    tr.insertAdjacentElement('beforeend', td);

    td.style.cssText = 'padding: 10px; border: 1px solid #333';
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

const parentBtns = document.querySelector('.button-links');
const promptBtns = document.createElement('button');
const redirectBtns = document.createElement('button');

promptBtns.innerText = 'Введите свой адрес';
redirectBtns.innerText = 'Нажмите для перенаправления';

let url = '';
const temp = url.split('');

promptBtns.onclick = function getPrompt() {
  url = prompt('Ваш адрес');
  if (url !== null && !url.includes('https://')) temp.unshift('https://'); url = temp.join('');

  redirectBtns.innerText = `Перенаправить на ${url}`;
};

redirectBtns.onclick = function getRedirect() {
  // eslint-disable-next-line no-unused-expressions, no-restricted-globals
  (url === '' || url === null) ? (redirectBtns.innerText = 'Извините, вы должны сначала ввести адресс') : (location.href = url);
};

parentBtns.insertAdjacentElement('beforeend', promptBtns);
parentBtns.insertAdjacentElement('beforeend', redirectBtns);

redirectBtns.style.cssText = `margin-left: 10px; 
                              border-radius: 5px;
                              background: #4676d7;
                              color: #fff; 
                              padding: 8px 16px;
                              font-size: 1rem;`;

promptBtns.style.cssText = 'border-radius: 5px; background: #4676d7; color: #fff; padding: 8px 16px; font-size: 1rem;';

/**
 * Task 4 (random-pics)
 * Display pictures from "images" folder in a random order
 * (using Math.random)
 */

const imgPlace = document.querySelector('.random-pics');
const usedNumbers = [];

for (let i = 1; i <= 10; i++) {
  let randomNumber;
  
  do {
    randomNumber = Math.floor(Math.random() * 10) + 1;

  } while (usedNumbers.includes(randomNumber));
  usedNumbers.push(randomNumber);
  const img = document.createElement('img');
  img.setAttribute('src', `images/${randomNumber}.jpg`);
  imgPlace.appendChild(img);
}
