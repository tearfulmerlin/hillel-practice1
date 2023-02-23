let store = [
  {title: 'todo', id: 1, done: true},
  {title: 'remove', id: 2, done: false},
];

const input = document.querySelector('input');
const list = document.querySelector('ul');
const counter = document.querySelector('#counter');

function renderItems(data) {
  list.innerHTML = '';

  data.forEach((item) => {
    list.innerHTML += `
      <li class="${item.done ? 'done' : ''}" data-id="${item.id}">
        ${item.title}
        <button id="${item.id}">delete</button>
      </li>
    `;
  });

  updateCounter();
}

renderItems(store);

function generateId() {
  return Math.random(1000) + new Date().getTime();
}

function updateCounter() {
  const count = store.reduce((acc, item) => {
    return item.done ? acc : acc + 1;
  }, 0);

  counter.textContent = count;
}

input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    const item = {title: event.target.value, id: generateId()};

    event.target.value = '';
    store.push(item);
    renderItems(store);
  }
});

list.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    store = store.filter((item) => item.id !== +event.target.id);
    renderItems(store);
  } else if (event.target.tagName === 'LI') {
    const id = +event.target.dataset.id;
    store = store.map((item) =>
      item.id === id
        ? {
          ...item,
          done: !item.done,
        }
        : item
    );

    renderItems(store);
  }
});

document.querySelector('#controls').addEventListener('click', (event) => {
  if (event.target.id === 'all') {
    renderItems(store);
  }
  if (event.target.id === 'active') {
    const filtered = store.filter((item) => !item.done);
    renderItems(filtered);
  }
  if (event.target.id === 'completed') {
    const filtered = store.filter((item) => item.done);
    renderItems(filtered);
  }
  if (event.target.id === 'clear') {
    store = store.filter((item) => !item.done);
    renderItems(store);
  }
});
