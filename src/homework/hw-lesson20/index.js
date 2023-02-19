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

const form = document.forms.myForm;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputsId = [...new FormData(form).entries()].filter(item => item[1] !== '');

  const table = document.createElement('div');
  table.style.display = 'flex';
  const column1 = document.createElement('div');
  column1.style.paddingRight = '5px';
  const column2 = document.createElement('div');
  column2.style.paddingRight = '5px';
  document.body.appendChild(table);
  table.appendChild(column1);
  table.appendChild(column2);

  inputsId.forEach((item) => {
    const labelElement = document.createElement('div');
    labelElement.innerText = item[0] + ':';
    labelElement.style.padding = '5px';
    labelElement.style.marginTop = '2px';
    labelElement.style.border = '1px solid black';
    column1.appendChild(labelElement);

    const categoryElement = document.createElement('div');
    categoryElement.innerText = item[1];
    categoryElement.style.padding = '5px';
    categoryElement.style.marginTop = '2px';
    categoryElement.style.border = '1px solid black';
    column2.appendChild(categoryElement);
  });
});