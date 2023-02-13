/* eslint-disable no-restricted-syntax */
/** Створити форму для реєстрації
 * Поля:
 * User name
 * Date of birth
 * Sex(m/f)
 * City
 * Email
 * Password
 * Languages (en, ru, ua ...)
 * Button "save"
 *
 * При кілку на кнопку "save", вивести таблицю з даними під формою
 */

const form = document.getElementById('regForm');
const dateArray = [];
const labelArray = [];

function createDateArray(arr) {
  for (const el of arr) {
    dateArray.push([el[0], el[1]]);
  }
}

function createLabelArray(arr) {
  for (const el of arr) {
    labelArray.push([el.htmlFor, el.innerText]);
  }
}

function addLabelArray(arr) {
  for (const el of arr) {
    labelArray.push([el.value, el.outerText]);
  }
}

function editDateArray() {
  for (const el of labelArray) {
    for (const val of dateArray) {
      if (el[0] === val[0]) {
        // eslint-disable-next-line prefer-destructuring
        val[0] = el[1];
      }
    }
  }
}

function printData() {
  const dataTabel = document.createElement('div');
  dataTabel.className = 'row';
  form.after(dataTabel);
  for (const el of dateArray) {
    for (const indx of el) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      dataTabel.appendChild(cell);
      cell.innerText = indx;
    }
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  createDateArray([...new FormData(form).entries()]);
  createLabelArray(document.querySelectorAll('label'));
  addLabelArray(document.querySelectorAll('option'));
  editDateArray();
  printData();
  document.getElementById('save').disabled = true;
});
