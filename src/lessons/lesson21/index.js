let store = [
  { title: 'todo', id: 1, done: true },
  { title: 'remove', id: 2, done: false },
];
const input = document.querySelector('input');
const list = document.querySelector('ul');

function renderItems(data) {
  list.innerHTML = '';
  data.forEach((item) => {
    list.innerHTML += `
        <li class="${item.done ? 'done' : ''}">
            ${item.title}
            <button id="${item.id}">delete</button>
        </li>`;
  });
}
// initial load
renderItems(store);

function generateId() {
  return (Math.random(1000) + new Date().getTime());
}

const counterElement = document.createElement('span');
function counter() {
  const itemsLeft = store.filter((item) => !item.done);
  counterElement.innerText = `${itemsLeft.length} items left`;
}
counter();
document.querySelector('#controls').insertBefore(counterElement, document.querySelector('#all'));

input.addEventListener('keypress', (event) => {
  if (event.code === 'Enter') {
    const item = { title: event.target.value, id: generateId() };
    event.target.value = '';
    store.push(item);

    counter();

    renderItems(store);
    console.log(store);
  }
});

list.addEventListener('click', (event) => {
  console.dir(event.target);
  if (event.target.tagName === 'BUTTON') {
    store = store.filter((item) => item.id !== +event.target.id);
    counter();
    renderItems(store);
  } else if (event.target.tagName === 'LI') {
    store = store.map((item) => (item.id === +event.target.firstElementChild.id
      ? {
        ...item,
        done: !item.done,
      }
      : item));
    counter();
  }
  renderItems(store);
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
    const filtred = store.filter((item) => item.done);
    renderItems(filtred);
  }
  if (event.target.id === 'clear') {
    store = store.filter((item) => !item.done);
    renderItems(store);
  }
});
