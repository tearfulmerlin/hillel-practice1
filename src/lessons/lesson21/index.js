let store = [
  { title: 'todo', id: 1, done: true },
  { title: 'remove', id: 2, done: false },
];

function storeLength(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i].done === false || !arr[i].done) {
      count += 1;
    }
  }

  return count;
}

const input = document.querySelector('input');
const list = document.querySelector('ul');
const countControl = document.getElementById('item-left');

function renderItems(data, actiTask = data) {
  countControl.innerText = `${storeLength(actiTask)}`;
  list.innerHTML = '';

  data.forEach((item) => {
    list.innerHTML += `
      <li class="${item.done ? 'done' : ''}">
        ${item.title}
        <button id=${item.id}>delete</button>
      </li>
    `;
  });
}

// intial load
renderItems(store);

function generateId() {
  return Math.random(1000) + (new Date().getTime());
}

input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    const item = { title: event.target.value, id: generateId() };
    event.target.value = '';
    store.push(item);
    renderItems(store);
  }
});

list.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    store = store.filter((item) => item.id !== +event.target.id);
    storeLength(store);
    renderItems(store);
  } else if (event.target.tagName === 'LI') {
    store = store.map((item) => (item.id === +event.target.firstElementChild.id
      ? {
        ...item,
        done: !item.done,
      }
      : item));
    storeLength(store);
    renderItems(store);
  }
});

document.querySelector('#controls').addEventListener('click', (event) => {
  if (event.target.id === 'all') {
    renderItems(store);
  }
  if (event.target.id === 'active') {
    const filtred = store.filter((item) => !item.done);
    renderItems(filtred);
  }
  if (event.target.id === 'completed') {
    const activTask = store;
    const filtred = store.filter((item) => item.done);
    renderItems(filtred, activTask);
  }
  if (event.target.id === 'clear') {
    store = store.filter((item) => !item.done);
    renderItems(store);
  }
});
