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

const formElement = document.getElementById('form');


formElement.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(formElement);

  const name = formData.get('user');
  const date = formData.get('date');
  const sex = formData.get('sex');
  const city = formData.get('city');
  const email = formData.get('email');
  const password = formData.get('password');
  const languages = formData.get('languages');


  const table = document.createElement('table');
  document.body.appendChild(table);

  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');

  table.appendChild(thead);
  table.appendChild(tbody);

  const row1 = document.createElement('tr');
  const row1data1 = document.createElement('td');
  row1data1.innerHTML = 'user name :';

  const row1data2 = document.createElement('td');
  row1data2.innerHTML = name;

  row1.appendChild(row1data1);
  row1.appendChild(row1data2);
  tbody.appendChild(row1);

  const row2 = document.createElement('tr');
  const row2data1 = document.createElement('td');
  row2data1.innerHTML = "date of birth :";

  const row2data2 = document.createElement('td');
  row2data2.innerHTML = date;

  row2.appendChild(row2data1);
  row2.appendChild(row2data2);
  tbody.appendChild(row2);

  const row3 = document.createElement('tr');
  const row3data1 = document.createElement('td');
  row3data1.innerHTML = "sex :";

  const row3data3 = document.createElement('td');
  row3data3.innerHTML = sex;

  row3.appendChild(row3data1);
  row3.appendChild(row3data3);
  tbody.appendChild(row3);

  const row4 = document.createElement('tr');
  const row4data1 = document.createElement('td');
  row4data1.innerHTML = "city :";

  const row4data4 = document.createElement('td');
  row4data4.innerHTML = city;

  row4.appendChild(row4data1);
  row4.appendChild(row4data4);
  tbody.appendChild(row4);

  const row5 = document.createElement('tr');
  const row5data1 = document.createElement('td');
  row5data1.innerHTML = "email :";

  const row5data5 = document.createElement('td');
  row5data5.innerHTML = email;

  row5.appendChild(row5data1);
  row5.appendChild(row5data5);
  tbody.appendChild(row5);

  const row6 = document.createElement('tr');
  const row6data1 = document.createElement('td');
  row6data1.innerHTML = "password :";

  const row6data6 = document.createElement('td');
  row6data6.innerHTML = password;

  row6.appendChild(row6data1);
  row6.appendChild(row6data6);
  tbody.appendChild(row6);

  const row7 = document.createElement('tr');
  const row7data1 = document.createElement('td');
  row7data1.innerHTML = "languages :";

  const row7data7 = document.createElement('td');
  row7data7.innerHTML = languages;

  row7.appendChild(row7data1);
  row7.appendChild(row7data7);
  tbody.appendChild(row7);
});
