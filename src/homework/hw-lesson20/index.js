/** Створити форму для реєстрації
 * Поля:
 * User name
 * Date of birth
 * Sex(m/f)
 * City
 * Email
 * Password
 * Languages (en, ru, ua ...)
 * Button 'save'
 *
 * При кліку на кнопку 'save', вивести таблицю з даними під формою
 */

function saveData() {
  const username = document.getElementById('username').value;
  const dob = document.getElementById('dob').value;
  const gender = document.getElementById('gender').value;
  const city = document.getElementById('city').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const languages = Array.from(document.getElementById('languages').selectedOptions, option => option.value);

  const table = document.getElementById('data-table');
  const row = table.insertRow(-1);
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  const cell3 = row.insertCell(2);
  const cell4 = row.insertCell(3);
  const cell5 = row.insertCell(4);
  const cell6 = row.insertCell(5);
  const cell7 = row.insertCell(6);
  cell1.innerHTML = username;
  cell2.innerHTML = dob;
  cell3.innerHTML = gender;
  cell4.innerHTML = city;
  cell5.innerHTML = email;
  cell6.innerHTML = password;
  cell7.innerHTML = languages;

  document.getElementById('restoration-form').reset();
  table.style.display = 'table';
}
