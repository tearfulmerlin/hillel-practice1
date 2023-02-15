/**
 * Task 1 (focused-input)
 * When focusing on input show
 * span under the input with text message "focused".
 *
 * When input lose the focus status
 * hide the span with text message.
 */
const divClass = document.querySelector('.focused-input');
const br = document.createElement('br');
divClass.appendChild(br);
const span = document.createElement('span');
span.innerHTML = 'focused';
const input = document.querySelector('input');
span.style.color = "red";

function clickInput() {
  divClass.appendChild(span);
}

function bluring() {
  divClass.removeChild(span);
}

input.onclick = clickInput;
input.onblur = bluring;

/**
 * Task 2 (table)
 * Generate table 10x10 filled with numbers from 1 to 100.
 * Table should generate dynamicly.
 */

const tableParent = document.querySelector('.table');
const br2 = document.createElement('br');
tableParent.appendChild(br2);
const table = document.createElement('table');
tableParent.appendChild(table);
table.style.border = "1px solid red";
table.style.width = "200px";
table.style.height = "200px";
table.style.margin = "0 auto";

table.classList.add('table-class');
let num = 1;

function tabled() {
  for (let i = 0; i < 10; i++) {
    const tr = document.createElement('tr');
    for (let j = 0; j < 10; j++) {
      const td = document.createElement('td');
      tr.appendChild(td);
      td.style.border = '1px solid red'
      td.innerText = num++;
    }
    table.appendChild(tr);
  }
}
tabled();

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
const button1 = document.createElement('button');
const button2 = document.createElement('button');
buttonLinks.appendChild(button1);
buttonLinks.appendChild(button2);

button1.innerText = 'button1';
button1.style.color = 'yellow';
button1.style.backgroundColor = 'blue';
button2.innerText = 'button2';
button2.style.color = 'blue';
button2.style.backgroundColor = 'yellow';

let url = '';
button1.addEventListener('click', () => {
  url = prompt('Enter your URL');
});

button2.addEventListener('click', () => {
  if (url) {
    if (!url.startsWith('https') || !url.startsWith('http')) {
      url = `https://${url}`;
    }
    window.location.replace(url);
  } else {
    alert('Enter url in button1');
  }
});

/**
 * Task 4 (random-pics)
 * Display pictures from "images" folder in a random order
 * (using Math.random)
 */

const picture = document.querySelector('.random-pics');
const image = document.createElement('img');
picture.appendChild(image);
const random = Math.floor(Math.random() * 10);
image.setAttribute('src', `images/${random}.jpg`);
