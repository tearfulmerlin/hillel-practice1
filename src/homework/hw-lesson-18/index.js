/**
 * Task 1 (focused-input)
 * When focusing on input show
 * span under the input with text message "focused".
 *
 * When input lose the focus status
 * hide the span with text message.
 */


const span = document.createElement('span');
const br = document.createElement('br');
const nameInput = document.querySelector('#nameInput');
const div = document.querySelector('.focused-input');
span.innerText = 'focused';
div.appendChild(br);

function showSpan() {
  div.appendChild(span);
}
function hideSpan() {
  div.removeChild(div.lastChild);
}

nameInput.addEventListener('focus', showSpan);
nameInput.addEventListener('blur', hideSpan);

/**
 * Task 2 (table)
 * Generate table 10x10 filled with numbers from 1 to 100.
 * Table should generate dynamicly.
 */
const table = document.querySelector('.table');
const newTable = document.createElement('div');
table.appendChild(newTable);
newTable.style.display = 'flex';
newTable.style.flexWrap = 'wrap';
newTable.style.width = '250px';


for (let i = 1; i <= 100; i++) {
  const cell = document.createElement('div');
  cell.innerText = i;
  cell.style.cssText = `
  border: 1px solid black;
  box-sizing: border-box;
  width: 10%;
  text-align: center;
`;
  newTable.appendChild(cell);
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
const buttonDiv = document.querySelector('.button-links');
const buttonFirst = document.createElement('button');
buttonFirst.style.cssText = `
  margin-right: 10px;
`;
buttonFirst.innerText = 'click me first';
const buttonSecond = document.createElement('button');
buttonSecond.innerText = 'then me';
buttonDiv.appendChild(buttonFirst);
buttonDiv.appendChild(buttonSecond);
let link;


function clickButtonFirst() {
  const input = prompt('enter in prompt a url', 'www.google.com');
  input !== null ? link = input.valueOf() : link = null;
}

buttonFirst.addEventListener('click', clickButtonFirst);

function clickButtonSecond() {
  if (!link) {
    alert('Please click on the first button, or enter url');
  } else if (!/^https?:\/\//i.test(link)) {
    link = `http://${link}`;
    window.open(`${link}`);
  }
}
buttonSecond.addEventListener('click', clickButtonSecond);

/**
 * Task 4 (random-pics)
 * Display pictures from "images" folder in a random order
 * (using Math.random)
 */

const picsArr = [
  'images/1.jpg',
  'images/2.jpg',
  'images/3.jpg',
  'images/4.jpg',
  'images/5.jpg',
  'images/6.jpg',
  'images/7.jpg',
  'images/8.jpg',
  'images/9.jpg',
  'images/10.jpg'];

const picsDiv = document.querySelector('.random-pics');

for (let i = 0; i <= picsArr.length - 1; i++) {
  const myPicture = document.createElement('img');
  myPicture.style.width = '60px';
  myPicture.style.height = '60px';
  const randomNum = Math.floor(Math.random() * picsArr.length);
  myPicture.src = picsArr[randomNum];
  console.log(picsArr[i]);
  picsDiv.appendChild(myPicture);
}
