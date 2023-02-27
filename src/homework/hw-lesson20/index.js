/* eslint-disable no-shadow */
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
 * При кліку на кнопку "save", вивести таблицю з даними під формою
 */
const { forms } = document;
const form = forms[0];
const borderStyle = '1px solid black';

const createCell = (value, isHeader) => {
  const tagName = isHeader ? 'th' : 'td';
  const cell = document.createElement(tagName);
  cell.style.border = borderStyle;
  cell.style.padding = '5px';
  cell.innerText = value;

  return cell;
};

const addRowToTable = (table, firstCellValue, secondCellValues, isHeader = false) => {
  const row = document.createElement('tr');
  table.append(row);
  row.append(createCell(firstCellValue, isHeader));
  row.append(createCell(secondCellValues, isHeader));
};

const addTableToPage = (table) => {
  const div = document.querySelector('.form-result');
  div.innerHTML = table.outerHTML;
};

const createTable = () => {
  const table = document.createElement('table');
  table.style.border = borderStyle;

  return table;
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const table = createTable();
  addRowToTable(table, 'Field', 'Value', true);

  const formData = new FormData(e.target);

  for (const [key, value] of formData.entries()) {
    addRowToTable(table, key, value);
  }

  addTableToPage(table);
});

const button = document.getElementById('show-pwd');
button.addEventListener('click', (e) => {
  const pwdInput = document.getElementById('pwd');

  if (pwdInput.type === 'password') {
    pwdInput.type = 'text';
    e.target.value = 'Hide password';
  } else {
    pwdInput.type = 'password';
    e.target.value = 'Show password';
  }
});
