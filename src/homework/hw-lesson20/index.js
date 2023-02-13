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
  const heading1 = document.createElement('th');
  heading1.innerHTML = "No.";
  const heading2 = document.createElement('th');
  heading2.innerHTML = "Name";

  row1.appendChild(heading1);
  row1.appendChild(heading2);
  thead.appendChild(row1);

  const row2 = document.createElement('tr');
  const row2data1 = document.createElement('td');
  row2data1.innerHTML = "user name";
  const row2data2 = document.createElement('td');
  row2data2.innerHTML = name;

  row2.appendChild(row2data1);
  row2.appendChild(row2data2);
  tbody.appendChild(row2);

  const row3 = document.createElement('tr');
  const row3data1 = document.createElement('td');
  row3data1.innerHTML = "date of Birth";
  const row3data2 = document.createElement('td');
  row3data2.innerHTML = date;

  row3.appendChild(row3data1);
  row3.appendChild(row3data2);
  tbody.appendChild(row3);

  const row4 = document.createElement('tr');
  const row4data1 = document.createElement('td');
  row4data1.innerHTML = "sex";
  const row4data2 = document.createElement('td');
  row4data2.innerHTML = sex;

  row4.appendChild(row4data1);
  row4.appendChild(row4data2);
  tbody.appendChild(row4);

  const row5 = document.createElement('tr');
  const row5data1 = document.createElement('td');
  row5data1.innerHTML = "city";
  const row5data2 = document.createElement('td');
  row5data2.innerHTML = city;

  row5.appendChild(row5data1);
  row5.appendChild(row5data2);
  tbody.appendChild(row5);

  const row6 = document.createElement('tr');
  const row6data1 = document.createElement('td');
  row6data1.innerHTML = "email";
  const row6data2 = document.createElement('td');
  row6data2.innerHTML = email;

  row6.appendChild(row6data1);
  row6.appendChild(row6data2);
  tbody.appendChild(row6);

  const row7 = document.createElement('tr');
  const row7data1 = document.createElement('td');
  row7data1.innerHTML = "password";
  const row7data2 = document.createElement('td');
  row7data2.innerHTML = password;

  row7.appendChild(row7data1);
  row7.appendChild(row7data2);
  tbody.appendChild(row7);

  const row8 = document.createElement('tr');
  const row8data1 = document.createElement('td');
  row8data1.innerHTML = "language";
  const row8data2 = document.createElement('td');
  row8data2.innerHTML = languages;

  row8.appendChild(row8data1);
  row8.appendChild(row8data2);
  tbody.appendChild(row8);

});
