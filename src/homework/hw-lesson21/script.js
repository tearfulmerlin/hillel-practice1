const list = [];


const input = document.querySelector('.input');
const addTaskBtn = document.querySelector('.add-task');
const taskList = document.querySelector('.tasks ul');

function showError() {
  input.classList.add('error');
  input.placeholder = 'Enter task here first!';
  setTimeout(() => {
    input.placeholder = 'Type task here...';
    input.classList.remove('error');
  }, 3000);
}
function deleteAllSelected() {
  document.querySelectorAll('.control-panel button').forEach((el) => {
    el.classList.remove('selected');
  });
}
function getRndNum() {
  const date = new Date();
  const str = (date.getDay() + date.getMinutes() + date.getMilliseconds()).toString();

  return Math.random(99999).toString() + str;
}
function calculateProgress() {
  const slider = document.querySelector('.slider');
  const amntComplete = list.reduce((accum, el) => {
    if (el.complete) {
      accum += 1;
    }

    return accum;
  }, 0);
  const counter = document.querySelector('.slider-counter');

  const deleteCompleteBtn = document.querySelector('#deleteCompl');
  if (amntComplete) {
    deleteCompleteBtn.classList.remove('disable');
  } else {
    deleteCompleteBtn.classList.add('disable');
  }
  counter.innerText = `${amntComplete}/${list.length}`;

  slider.style.width = `${list.length ? (amntComplete / list.length) * 100 : 0}%`;
}
function taskClick(e) {
  const elementName = e.target.nodeName;
  if (elementName !== 'LI') {
    const id = e.target.parentElement.getAttribute('data-id');
    const index = list.findIndex((el) => el.id === id);

    if (elementName === 'LABEL') {
      list[index].complete = !list[index].complete;
      calculateProgress();
    }
    if (elementName === 'BUTTON') {
      list.splice(index, 1);
      renderTasks(list);
      taskList.style.maxHeight = `${taskList.scrollHeight}px`;
    }
  }
}
function renderTasks(arr) {
  calculateProgress();

  taskList.innerHTML = '';
  for (const elem of arr) {
    const li = document.createElement('li');
    const template = `
      <input type="checkbox" name="taskCheck" id="${elem.id}" ${elem.complete ? 'checked' : ''}>
      <label for="${elem.id}">${elem.text}</label>
      <button class="trash"></button>`;

    li.setAttribute('data-id', elem.id);
    li.insertAdjacentHTML('beforeend', template);
    li.addEventListener('click', taskClick);
    taskList.insertAdjacentElement('beforeend', li);
  }
}
function addTask(e) {
  if (e.target.nodeName === 'BUTTON' || e.key === 'Enter') {
    if (input.value.trim() === '') {
      showError();
      input.value = '';

      return 0;
    }
    const temp = {
      text: input.value.replace('\n', ''),
      complete: false,
      id: getRndNum(),
    };
    input.value = '';
    list.push(temp);
    deleteAllSelected();
    document.querySelector('#showAll').classList.add('selected');
    renderTasks(list);
    taskList.style.maxHeight = `${taskList.scrollHeight}px`;
  }

  return 0;
}

input.addEventListener('keyup', addTask);
addTaskBtn.addEventListener('click', addTask);

//! control btns
document.querySelector('#showAll').addEventListener('click', (e) => {
  if (list.length) {
    deleteAllSelected();
    e.target.classList.add('selected');
  }
  renderTasks(list);
});
document.querySelector('#showCompl').addEventListener('click', (e) => {
  if (list.length) {
    deleteAllSelected();
    e.target.classList.add('selected');
  }
  const temp = list.filter((el) => el.complete);
  renderTasks(temp);
});
document.querySelector('#showIncompl').addEventListener('click', (e) => {
  if (list.length) {
    deleteAllSelected();
    e.target.classList.add('selected');
  }
  const temp = list.filter((el) => !el.complete);
  renderTasks(temp);
});
document.querySelector('#deleteCompl').addEventListener('click', () => {
  for (let i = 0; i < list.length; i++) {
    if (list[i].complete) {
      list.splice(i, 1);
      i -= 1;
    }
  }
  renderTasks(list);
});
