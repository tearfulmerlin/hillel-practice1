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

const forms = document.forms.formPeople;

const formPersone = document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  const eachElement = [...new FormData(forms).entries()].filter((item) => item[1] !== '');

  const table = document.createElement('div');
  const col1 = document.createElement('div');
  const col2 = document.createElement('div');
  document.body.appendChild(table);
  table.style.cssText = `
    display: flex;
    margin-top: 5px;
  `;
  table.appendChild(col1);
  table.appendChild(col2);

  eachElement.forEach((item) => {
    const col1Items = document.createElement('div');
    col1Items.innerText = item[0] + ':';
    col1.appendChild(col1Items);
    col1Items.style.cssText = `
      border: 1px solid red;
      padding: 3px;
      font-weight: 600;
    `;

    const col2Items = document.createElement('div');
    col2Items.innerText = item[1];
    col2.appendChild(col2Items);
    col2Items.style.cssText = `
      border: 1px solid red;
      padding: 3px; 
    `;
  });
});
