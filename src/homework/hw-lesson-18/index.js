/**
 * Task 1 (focused-input)
 * When focusing on input show
 * span under the input with text message "focused".
 *
 * When input lose the focus status
 * hide the span with text message.
 */
// !-----------------------------------------------------
function onFocus(e) {
  const span = document.createElement('span');
  span.innerText = 'you focused!';
  span.id = 'focusSpan';
  e.target.insertAdjacentElement('afterend', span);
}

function onBlur(e) {
  const span = document.querySelector('#focusSpan');
  document.querySelector('.focused-input').removeChild(span);
}

const input = document.querySelector('#nameInput');
input.onfocus = onFocus;
input.onblur = onBlur;

/**
 * Task 2 (table)
 * Generate table 10x10 filled with numbers from 1 to 100.
 * Table should generate dynamicly.
 */

// !-----------------------------------------------------
const rowAmnt = 10;
const colAmnt = 10;
let iterator = 1;
const table = document.createElement('table');

for (let i = 0; i < rowAmnt; i++) {
  const tr = document.createElement('tr');
  for (let j = 0; j < colAmnt; j++) {
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
// !-----------------------------------------------------
const btnBlock = document.querySelector('.button-links');
let link = '';

const btnRedirect = document.createElement('button');
btnRedirect.innerText = 'Click me to redirect to link';
btnRedirect.classList.add('redirectBtn');
btnRedirect.onclick = function() {
  if (link === '' || link === null) {
    btnRedirect.innerText = `You should first enter link!`;
    setTimeout(() => {
      btnRedirect.innerText = 'Click me to redirect to link';
    }, 3000);
  }
  else {
    location.href = link;
  }
}

const btnPrompt = document.createElement('button');
btnPrompt.innerText = 'Click me to insert url!';
btnPrompt.classList.add('promptBtn');
btnPrompt.onclick = function() {
  link = prompt('Enter link', 'link here');
  if (link !== null && !link.includes('https://')) {
    let temp = link.split('');
    temp.unshift('https://');
    link = temp.join('');
  }
  btnRedirect.innerText = `Click me to redirect to ${link}`;
}

btnBlock.insertAdjacentElement('beforeend', btnPrompt);
btnBlock.insertAdjacentElement('beforeend', btnRedirect);
/**
 * Task 4 (random-pics)
 * Display pictures from "images" folder in a random order
 * (using Math.random)
 */
function randNum(max, min) {
  return Math.round(min + Math.random() * (max - min));
}

const picAmnt = 10;
const picBlock = document.querySelector('.random-pics');
const rndBtn = document.createElement('button');
const img = document.createElement('img');

rndBtn.classList.add('rndBtn');
rndBtn.innerText = 'Click to get random picture!';
picBlock.insertAdjacentElement('beforeend', rndBtn);
picBlock.insertAdjacentElement('beforeend', img);
img.alt = 'Picture';
img.src = `images/${randNum(picAmnt, 1)}.jpg`;


rndBtn.onclick = function() {
  img.src = `images/${randNum(picAmnt, 1)}.jpg`;
};
