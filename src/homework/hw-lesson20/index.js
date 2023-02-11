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
 * При кілку на кнопку "save", вивести таблицю з даними під формою
 */

const form = document.getElementById('regForm');
function printData(arr) {
  const dataTabel = document.createElement('div');
  form.after(dataTabel);
  for (let i = 0; i < arr.length; i++) {
    const cell = document.createElement('div');
    // eslint-disable-next-line prefer-destructuring
    cell.innerText = `${arr[i][0]} : ${arr[i][1]}`;
    dataTabel.appendChild(cell);
  }
}

function printLabel(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].innerText);
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  printData([...new FormData(form).entries()]);
  printLabel(document.querySelectorAll('label'));
});

console.log([...new FormData(form).entries()]);
