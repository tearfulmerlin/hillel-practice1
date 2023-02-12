$(document).ready(() => {
  $('select').niceSelect();
  document.querySelector('tbody').innerHTML = '';
});

const users = [];

function renderTable() {
  const tableBody = document.querySelector('tbody');
  const lastUser = users.at(-1);
  const template = `<tr>
    <td>${lastUser.name}</td>
    <td>${lastUser.birthDate}</td>
    <td>${lastUser.sex}</td>
    <td>${lastUser.city}</td>
    <td>${lastUser.email}</td>
    <td>${lastUser.password}</td>
    <td>${lastUser.langs.join(', ')}</td>
  </tr>`;
  tableBody.innerHTML += template;
}
function CreateUser({
  name,
  birthDate,
  sex,
  city,
  email,
  password,
  langs,
}) {
  this.name = name;
  this.birthDate = birthDate;
  this.sex = sex;
  this.city = city;
  this.email = email;
  this.password = password;
  this.langs = langs;
}
function validation(form, langs) {
  let isCorrect = true;

  for (const el of form) {
    if (el.type === 'checkbox') {
      el.checked ? langs.push(el.id) : null;
    }

    if (el.type !== 'radio' && el.type !== 'checkbox' && el.localName !== 'button') {
      if (el.value === '') {
        isCorrect = false;
        el.classList.add('error');
        console.log('error:', el);
      }

      if (el.type === 'email' && !el.value.includes('@')) {
        isCorrect = false;
        el.classList.add('error');
        console.log('error:', el);
      }
    }
  }

  return isCorrect;
}

const cities = ['Kharkiv', 'Kyiv', 'Lviv', 'Nikolaev', 'Ternopyl', 'Dnipro'];

const cityField = document.querySelector('#userCity');
for (const el of cities) {
  const option = document.createElement('option');
  option.value = el.toLowerCase();
  option.innerText = el;
  cityField.appendChild(option);
}

const langsDefault = ['ru', 'en', 'ua', 'fr', 'deu'];

const langArea = document.querySelector('.checkboxes');
for (const el of langsDefault) {
  const label = document.createElement('label');
  label.setAttribute('for', el);
  label.innerText = el.toUpperCase();

  const input = document.createElement('input');
  input.type = 'checkbox';
  input.name = 'lang';
  input.id = el;
  input.style.display = 'none';

  langArea.appendChild(input);
  langArea.appendChild(label);
}

document.querySelector('.save-btn').addEventListener('click', (e) => {
  e.preventDefault();
  const form = document.forms[0];
  const langs = [];

  if (validation(form, langs)) {
    const name = form[0].value;
    const birthDate = form[1].value;
    const sex = form[2].checked ? 'Male' : 'Female';
    const city = form[4].value;
    const email = form[5].value;
    const password = form[6].value;
    document.querySelector('[type="reset"]').click();

    console.log(langs);
    const user = new CreateUser({
      name,
      birthDate,
      sex,
      city,
      email,
      password,
      langs,
    });
    console.log(user);

    users.push(user);
    renderTable();
  }
});
