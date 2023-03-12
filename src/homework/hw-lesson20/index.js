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

const { form } = document.forms;

const result = document.querySelector('.resultForm');

function showUserForm(info) {
  const tableShow = document.createElement('table');
  result.appendChild(tableShow);

  for (let i = 0; i < info.length; i++) {
    const tr = document.createElement('tr');
    for (let j = 0; j < info[i].length; j++) {
      const td = document.createElement('td');
      tr.appendChild(td);
      td.style.border = '1px solid black';
      td.innerText = info[i][j];
    }
    tableShow.appendChild(tr);
  }
}
function copyUserForm(event) {
  event.preventDefault();
  const checkBoxes = [...document.getElementsByName('language')];
  const checked = ['languages'];
  for (let i = 0; i < checkBoxes.length; i += 1) {
    if (checkBoxes[i].checked === true) {
      checked.push(checkBoxes[i].value);
    }
  }
  const formData = [...new FormData(form)];
  for (let i = 0; i < formData.length; i += 1) {
    if (formData[i][0] === 'language') {
      formData[i] = [...checked];
      formData.splice(i + 1, formData.length - i);
    }
  }

  return showUserForm(formData);
}

form.addEventListener('submit', copyUserForm);
