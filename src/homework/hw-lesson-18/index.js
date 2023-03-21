/**
 * Task 1 (focused-input)
 * When focusing on input show
 * span under the input with text message 'focused'.
 *
 * When input lose the focus status
 * hide the span with text message.
 */

const nameInput = document.getElementById('nameInput');
const focusMessage = document.getElementById('focusMessage');

nameInput.addEventListener('focus', () => {
  focusMessage.innerHTML = 'focused';
});

nameInput.addEventListener('blur', () => {
  focusMessage.innerHTML = '';
});


/**
 * Task 2 (table)
 * Generate table 10x10 filled with numbers from 1 to 100.
 * Table should generate dynamicly.
 */
const tableContainer = document.getElementById('tableContainer');

let tableH = '<table>';
for (let i = 1; i <= 10; i++) {
  tableH += '<tr>';
  for (let j = 1; j <= 10; j++) {
    const number = (i - 1) * 10 + j;
    tableH += `<td>${number}</td>`;
  }
  tableH += '</tr>';
}
tableH += '</table>';

tableContainer.innerHTML = tableH;

/**
 * Task 3 (button-links)
 * Create 2 buttons on the page with js
 * When clicking on the first button ask user to enter in prompt a url.
 * When clicking on the second button redirect to the that url.
 * Add protocol (http/https) if entered url doesn't contain one.
 * If user click on the second button before clicking on the first one
 * show message: 'Please click on the first button'
 */
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const message = document.getElementById('message');
let url = '';

button1.addEventListener('click', () => {
  url = prompt('Enter a URL:');
});

button2.addEventListener('click', () => {
  if (url === '') {
    message.innerHTML = 'Please click on the first button';
  } else {
    if (!/^https?:\/\//i.test(url)) {
      url = `http://${url}`;
    }
    window.location.href = url;
  }
});

/**
 * Task 4 (random-pics)
 * Display pictures from 'images' folder in a random order
 * (using Math.random)
 */

const imagesContainer = document.getElementById('imagesContainer');

// Function to display all images in random order
function displayRandomImages() {
  const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg'];
  const shuffledImages = shuffle(images); // shuffle the array of images

  let imagesHTML = '';
  for (let i = 0; i < shuffledImages.length; i++) {
    const image = shuffledImages[i];
    imagesHTML += `<img src='./images/${image}'>`;
  }

  imagesContainer.innerHTML = imagesHTML;
}

// Helper function to shuffle an array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

displayRandomImages();
