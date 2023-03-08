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
const form = document.forms;
const gotIt = form.formName;
const div = document.createElement('div');
document.body.appendChild(div);

const table = document.createElement('table');
const tableBlock = document.createElement('tbody');
gotIt.addEventListener('click', save);


function save(e) {
  e.preventDefault();
  const formArr = [...new FormData(e.target)];
  for (let rows = 0; rows < formArr.length; rows++) {
    const tr = document.createElement('tr');

    for (let columns = 0; columns < 2; columns++) {
      if (columns === 0) {
        const td = document.createElement('td');
        const cellText = document.createTextNode(`${formArr[rows][columns]}`);
        td.appendChild(cellText);
        tr.appendChild(td);
      } else {
        const td = document.createElement('td');
        const cellText = document.createTextNode(`${formArr[rows][columns]}`);
        td.appendChild(cellText);
        tr.appendChild(td);
      }
    }
    tableBlock.appendChild(tr);
  }
  table.appendChild(tableBlock);
  document.body.appendChild(table);
  table.setAttribute('border', '1');
}
