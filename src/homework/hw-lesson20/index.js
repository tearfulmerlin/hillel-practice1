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
const reg = form.formReg;
const tableData = document.createElement('div');
document.body.appendChild(tableData);

reg.addEventListener('submit', (e) => {
  e.preventDefault();
  const regArray = [...new FormData(e.target)];
  const tbl = document.createElement('table');
  const tblBody = document.createElement('tbody');

  for (let i = 0; i < regArray.length; i++) {
    const row = document.createElement('tr');

    for (let j = 0; j < 2; j++) {
      if (j === 0) {
        const cell = document.createElement('td');
        const cellText = document.createTextNode(`${regArray[i][j]}`);
        cell.appendChild(cellText);
        row.appendChild(cell);
      } else {
        const cell = document.createElement('td');
        const cellText = document.createTextNode(`${regArray[i][j]}`);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
    }
    tblBody.appendChild(row);
  }
  tbl.appendChild(tblBody);
  document.body.appendChild(tbl);
  tbl.setAttribute('border', '1');
});
