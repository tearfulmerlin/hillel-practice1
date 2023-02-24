/**
 * Task 1 (focused-input)
 * When focusing on input show
 * span under the input with text message "focused".
 *
 * When input lose the focus status
 * hide the span with text message.
 */
const bruh = document.createElement('br');
const spanBlock = document.createElement('span');

function focused() {
  spanBlock.innerHTML = 'focused!';
  document.querySelector('.focused-input').appendChild(bruh);
  document.querySelector('.focused-input').appendChild(spanBlock);
}
function unfocused() {
  document.querySelector('.focused-input').removeChild(document.querySelector('br:last-of-type'));
  document.querySelector('.focused-input').removeChild(document.querySelector('span'));
}
document.querySelector('input').addEventListener('focus', focused);
document.querySelector('input').addEventListener('blur', unfocused);

/**
 * Task 2 (table)
 * Generate table 10x10 filled with numbers from 1 to 100.
 * Table should generate dynamicly.
 */
const tableBlock = document.createElement('table');

document.querySelector('.table').appendChild(tableBlock);
function tableCreate() {
  for (let rows = 0; rows < 10; rows++) {
    const tr = tableBlock.insertRow();
    for (let columns = 0; columns < 10; columns++) {
      const td = tr.insertCell();
      td.appendChild(document.createTextNode((columns + 10 * rows) + 1));
      td.style.border = '1px solid black';
    }
  }
}

tableCreate();

/**
 * Task 3 (button-links)
 * Create 2 buttons on the page with js
 * When clicking on the first button ask user to enter in prompt a url.
 * When clicking on the second button redirect to the that url.
 * Add protocol (http/https) if entered url doesn't contain one.
 * If user click on the second button before clicking on the first one
 * show message: "Please click on the first button"
 */
const buttonRed = document.createElement('button');
buttonRed.innerHTML = 'click me first!';
document.querySelector('.button-links').appendChild(buttonRed);

const buttonBlue = document.createElement('button');
buttonBlue.innerHTML = 'click me second!';
document.querySelector('.button-links').appendChild(buttonBlue);

let url;
buttonRed.onclick = function prompty() {
  url = prompt('enter any url, please:', '');
  console.log(url);
  if (url == null || url === undefined || url === '') {
    buttonBlue.onclick = function youDidBad() {
      alert('>:(');
    };
  } else {
    buttonBlue.onclick = function youDidGood() {
      alert('thx a lot!!!! :)))');
      if (!/^https?:\/\//i.test(url)) {
        url = 'http://' + url;
        window.open(url, '_blank');
      }
      window.open(url, '_blank');
    };
  }
};

buttonBlue.onclick = function pressRedFirst() {
  alert('press left button first, please!');
};
/**
 * Task 4 (random-pics)
 * Display pictures from "images" folder in a random order
 * (using Math.random)
 */
function displayImage(src, width, height) {
  const img = document.createElement('img');
  img.src = src;
  img.width = width;
  img.height = height;
  document.body.appendChild(img);
}
const imagesArr = [
  '/src/homework/hw-lesson-18/images/1.jpg',
  '/src/homework/hw-lesson-18/images/2.jpg',
  '/src/homework/hw-lesson-18/images/3.jpg',
  '/src/homework/hw-lesson-18/images/4.jpg',
  '/src/homework/hw-lesson-18/images/5.jpg',
  '/src/homework/hw-lesson-18/images/6.jpg',
  '/src/homework/hw-lesson-18/images/7.jpg',
  '/src/homework/hw-lesson-18/images/8.jpg',
  '/src/homework/hw-lesson-18/images/9.jpg',
  '/src/homework/hw-lesson-18/images/10.jpg',
];

const imgLenght = imagesArr.length;
for (let amount = 0; amount < 10; amount++) {
  const randomOrder = Math.floor(imgLenght * Math.random());
  displayImage(imagesArr[randomOrder], 320, 250);
}
