/**
 * Task 1 (focused-input)
 * When focusing on input show
 * span under the input with text message "focused".
 *
 * When input lose the focus status
 * hide the span with text message.
 */


/**
 * Task 2 (table)
 * Generate table 10x10 filled with numbers from 1 to 100.
 * Table should generate dynamicly.
 */ 

/**
 * Task 3 (button-links)
 * Create 2 buttons on the page with js
 * When clicking on the first button ask user to enter in prompt a url.
 * When clicking on the second button redirect to the that url.
 * Add protocol (http/https) if entered url doesn't contain one.
 * If user click on the second button before clicking on the first one
 * show message: "Please click on the first button"
 */


/**
 * Task 4 (random-pics)
 * Display pictures from "images" folder in a random order
 * (using Math.random)
 */

// task1
const input = document.querySelector('input');
const focusDiv = document.querySelector('div');
const span = document.createElement('span');
function onFocus() {
  span.innerHTML = '<b>Focused</b>';
  focusDiv.appendChild(span);
}
function onBlur() {
  focusDiv.removeChild(span);
}
input.onfocus = onFocus;
input.onblur = onBlur;

// task2
const table = document.querySelector('div.table');
const p = document.querySelector('div.table>p');
table.style.display = 'flex';
table.style.flexWrap = 'wrap';
for (let i = 1; i <= 100; i += 1) {
  const tebleOfNum = document.createElement('div');
  tebleOfNum.style.width = '9%';
  tebleOfNum.style.height = '20px';
  tebleOfNum.style.border = 'solid 1px';
  tebleOfNum.innerText += i;
  table.appendChild(tebleOfNum);
}
table.insertAdjacentElement('beforeend', p);

// task3
const btnSend = document.createElement('button');
const btnUrl = document.createElement('button');
const mainDiv = document.querySelector('div.button-links');
btnSend.style.height = '50px';
btnSend.style.minWidth = '100px';
btnUrl.style.marginRight = '10px';
btnUrl.style.height = '50px';
btnUrl.style.minWidth = '100px';

mainDiv.appendChild(btnSend);
mainDiv.appendChild(btnUrl);
btnUrl.innerText = 'Enter your url!';
btnSend.innerText = 'Click for redirect';
let adress = '';
function writeUrl() {
  adress = prompt('Please write a url adress');
  if (adress !== null && !adress.includes('https://')) {
    const record = adress.split(' ');
    record.unshift('https://');
    adress = record.join('');
    // eslint-disable-next-line no-useless-concat
    btnSend.innerText = 'Search ' + `${adress}`;
  }
}

btnUrl.onclick = writeUrl;
function sendUrl() {
  if (adress === '' || adress === null) {
    alert('Sorry, you should first enter url!');
  } else {
    location.href = adress;
  }
}
mainDiv.insertBefore(btnUrl, btnSend);
btnSend.onclick = sendUrl;

// task4
const img = document.createElement('img');
const randomNum = Math.floor(Math.random() * 10 + 1);
img.src = `images/${randomNum}.jpg`;
const fons = document.querySelector('div.random-pics');
fons.appendChild(img);
