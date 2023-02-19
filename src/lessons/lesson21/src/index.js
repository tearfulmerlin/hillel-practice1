/* eslint-disable consistent-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */

let store = [];
let activeControlsButtonId = 'all';

const input = document.querySelector('input');
const list = document.querySelector('ul');
const counterSection = document.querySelector('#counter');
const controlsButtonIdAll = document.querySelector('#all');

function renderItems(filter = 'all') {
  let data = store;

  if (filter === 'completed') {
    data = store.filter((item) => item.isCompleted);
  }
  if (filter === 'active') {
    data = store.filter((item) => !item.isCompleted);
  }

  list.innerHTML = '';

  data.forEach((item) => {
    list.innerHTML += `
    <li class="${item.isCompleted ? 'completed' : ''}">
    ${item.title}
    <button id=${item.id} class="delete-button">x</button>
    </li>
    `;
  });
}

function renderCounterNotCompletedTask() {
  const count = (store.filter(({ isCompleted }) => !isCompleted)).length;
  counterSection.innerText = `${count} item${count !== 1 ? 's' : ''} left`;
}

// initial load
renderItems(activeControlsButtonId);
renderCounterNotCompletedTask();

function generateId() {
  return new Date().getTime();
}

function replaceActiveButton(pressedButton = controlsButtonIdAll) {
  console.log('replacement run');

  const currentActiveButton = document.querySelector(`#${activeControlsButtonId}`);
  currentActiveButton.classList.remove('active');
  currentActiveButton.removeAttribute('disabled');
  pressedButton.classList.add('active');
  pressedButton.setAttribute('disabled', '');
  activeControlsButtonId = pressedButton.id;
}

input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    const title = event.target?.value.trim();

    if (title === '') {
      return alert('Value cannot be empty');
    }

    const item = { title, id: generateId() };

    event.target.value = '';
    store.push(item);
    renderItems(activeControlsButtonId);
    renderCounterNotCompletedTask();
  }
});

list.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    store = store.filter((item) => item.id !== +event.target.id);
    renderItems(activeControlsButtonId);
    renderCounterNotCompletedTask();
  } else if (event.target.tagName === 'LI') {
    store = store.map((item) => (item.id === +event.target.firstElementChild.id
      ? {
        ...item,
        isCompleted: !item.isCompleted,
      }
      : item));

    renderItems(activeControlsButtonId);
    renderCounterNotCompletedTask();
  }
});

document.querySelector('#controls').addEventListener('click', (event) => {
  if (event.target.id === 'all') {
    replaceActiveButton(event.target);
    renderItems();
  }
  if (event.target.id === 'active') {
    replaceActiveButton(event.target);
    renderItems('active');
  }
  if (event.target.id === 'completed') {
    replaceActiveButton(event.target);
    renderItems('completed');
  }
  if (event.target.id === 'clear') {
    replaceActiveButton();

    store = store.filter((item) => !item.isCompleted);
    renderItems();
  }
});
