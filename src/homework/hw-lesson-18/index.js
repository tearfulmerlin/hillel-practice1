/**
 * Task 1 (focused-input)
 * When focusing on input show
 * span under the input with text message "focused".
 *
 * When input lose the focus status
 * hide the span with text message.
 */

// const divFocused = document.querySelector('.focused-input');

const divFocus = document.querySelector('.focused-input');
const br = document.createElement('br');
divFocus.appendChild(br);
const input = document.querySelector('input');
const span = document.createElement('span');

function focusInput() {
  span.innerText = 'FOCUSED ON';
  divFocus.appendChild(span);
}
function outInput() {
  divFocus.removeChild(span);
}
input.onmouseover = focusInput;
input.onmouseout = outInput;

// const span = document.createElement('span');
// function focusInput() {
//   span.innerHTML = '<br><b>FOCUSED ON</b></br>';
//   document.querySelector('.focused-input').appendChild(span);
// }
// function outInput() {
//   document.querySelector('.focused-input').removeChild(span);
// }
// document.querySelector('input').onmouseover = focusInput;
// document.querySelector('input').onmouseout = outInput;


/**
 * Task 2 (table)
 * Generate table 10x10 filled with numbers from 1 to 100.
 * Table should generate dynamicly.
 */

const divTable = document.querySelector('.table');
const newLine = document.createElement('br');
divTable.appendChild(newLine);

function createTable() {
  const tableShow = document.createElement('table');
  divTable.appendChild(tableShow);

  let startNumber = 0;
  for (let i = 0; i < 10; i++) {
    const tr = document.createElement('tr');
    for (let j = 0; j < 10; j++) {
      const td = document.createElement('td');
      tr.appendChild(td);
      td.style.border = '1px solid black';
      startNumber += 1;
      td.innerText = startNumber;
    }
    tableShow.appendChild(tr);
  }
}

createTable();

/**
 * Task 3 (button-links)
 * Create 2 buttons on the page with js
 * When clicking on the first button ask user to enter in prompt a url.
 * When clicking on the second button redirect to the that url.
 * Add protocol (http/https) if entered url doesn't contain one.
 * If user click on the second button before clicking on the first one
 * show message: "Please click on the first button"
 */

const buttonAsk = document.createElement('button');
document.querySelector('.button-links').appendChild(buttonAsk);
buttonAsk.innerText = 'Click to enter URL';
const buttonRedirect = document.createElement('button');
document.querySelector('.button-links').appendChild(buttonRedirect);
buttonRedirect.innerText = 'Click to go to URL';
let url = '';

function clickButtomAsk() {
  url = prompt('type URL adress here');
  if (url === null) {
    alert('you canceled');
  }
  if (url.trim() === '') {
    alert('empty input');
  }
  if (!url.startsWith('https://') || !url.startsWith('http://')) {
    url = `https://${url}`;
  }
}

function goToUrl() {
  if (url === '') {
    alert('at first ckick button \'Click to enter URL\'');
  }
  window.location.replace(url);
}

buttonAsk.onclick = clickButtomAsk;
buttonRedirect.onclick = goToUrl;


/**
 * Task 4 (random-pics)
 * Display pictures from "images" folder in a random order
 * (using Math.random)
 */

const imgPlace = document.querySelector('.random-pics');
const imgPocemon = new Image(200, 200);
imgPlace.appendChild(imgPocemon);
imgPocemon.setAttribute('src', `images/${1 + Math.floor(Math.random() * 10)}.jpg`);

