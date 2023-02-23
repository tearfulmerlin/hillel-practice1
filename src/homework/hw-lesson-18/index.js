/**
 * Task 1 (focused-input)
 * When focusing on input show
 * span under the input with text message "focused".
 *
 * When input lose the focus status
 * hide the span with text message.
 */
const nameInput = document.getElementById("nameInput");
const focusSpan = document.createElement("span");
focusSpan.textContent = "focused";

nameInput.addEventListener("focus", () => {
  nameInput.parentElement.appendChild(focusSpan);
});

nameInput.addEventListener("blur", () => {
  focusSpan.remove();
});


/**
 * Task 2 (table)
 * Generate table 10x10 filled with numbers from 1 to 100.
 * Table should generate dynamicly.
 */
const tableDiv = document.querySelector(".table");

const table = document.createElement("table");
for (let i = 1; i <= 10; i++) {
  const row = document.createElement("tr");
  for (let j = 1; j <= 10; j++) {
    const cell = document.createElement("td");
    const cellText = document.createTextNode((i - 1) * 10 + j);
    cell.appendChild(cellText);
    row.appendChild(cell);
  }
  table.appendChild(row);
}

tableDiv.appendChild(table);

/**
 * Task 3 (button-links)
 * Create 2 buttons on the page with js
 * When clicking on the first button ask user to enter in prompt a url.
 * When clicking on the second button redirect to the that url.
 * Add protocol (http/https) if entered url doesn't contain one.
 * If user click on the second button before clicking on the first one
 * show message: "Please click on the first button"
 */
const buttonLinksDiv = document.querySelector(".button-links");
const button1 = document.createElement("button");
const button2 = document.createElement("button");
button1.textContent = "Enter URL";
button2.textContent = "Go to URL";
buttonLinksDiv.appendChild(button1);
buttonLinksDiv.appendChild(button2);

let enteredUrl = "";
let urlEntered = false;

button1.addEventListener("click", () => {
  enteredUrl = prompt("Enter a URL:");
  if (enteredUrl) {
    urlEntered = true;
    if (!enteredUrl.includes("http://") && !enteredUrl.includes("https://")) {
      enteredUrl = "http://" + enteredUrl;
    }
  }
});

button2.addEventListener("click", () => {
  if (!urlEntered) {
    alert("Please click on the first button");
  } else {
    window.location.href = enteredUrl;
  }
});

/**
 * Task 4 (random-pics)
 * Display pictures from "images" folder in a random order
 * (using Math.random)
 */
const randomPicsDiv = document.querySelector(".random-pics");

const images = [
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg",
  "images/5.jpg",
  "images/6.jpg",
  "images/7.jpg",
  "images/8.jpg",
  "images/9.jpg",
  "images/10.jpg",
];

const randomOrder = [];
while (randomOrder.length < images.length) {
  const randomIndex = Math.floor(Math.random() * images.length);
  if (!randomOrder.includes(randomIndex)) {
    randomOrder.push(randomIndex);
  }
}

for (let i = 0; i < images.length; i++) {
  const img = document.createElement("img");
  img.src = images[randomOrder[i]];
  randomPicsDiv.appendChild(img);
}
