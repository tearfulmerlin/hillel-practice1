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
const forms = document.forms;
const submit = document.querySelector('button.submit');

submit.addEventListener('click', (event) => {
  event.preventDefault();
  const newForm = [...new FormData(forms['myForm'])];
  const table = document.createElement('table');
  table.setAttribute('border', '1');
  newForm.forEach((item) => {
    const td = document.createElement('td');
    const th = document.createElement('th');
    const tr = document.createElement('tr');
    th.style.minWidth = '100px';
    td.innerText = item[0];
    th.innerText = item[1];
    table.appendChild(tr);
    tr.appendChild(td);
    tr.appendChild(th);
    document.body.appendChild(table);
  });
});
