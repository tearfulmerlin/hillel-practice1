// accessing form data
const forms = document.forms;

const formName = 'sampleForm';
// console.dir(forms[formName].username.value = 'user');
// console.dir(forms[formName].fav_language.value);
// const checkedBoxes = [];
// for (let i = 0; i < forms[formName].vehicle.length; i++) {
//   if (forms[formName].vehicle[i].checked) {
//     checkedBoxes.push(forms[formName].vehicle[i].value);
//   }
// }


// console.dir(forms[formName].vehicle);
// console.dir(checkedBoxes);


// const newArr = Array.from(forms[formName].vehicle);
// console.log(newArr.filter((item) => item.checked).map(item => item.value))
// const filtered = [].filter
//   .call(forms[formName].vehicle, (item) => item.checked)
//   .map((item) => item.value);

// console.dir(filtered);

// console.dir(forms[formName].city.options[0].value);
// console.dir(forms[formName].city.options[0].text);
// console.dir([].filter
//   .call(forms[formName].city, (item) => item.selected)
//   .map(item => item.text));

//   console.dir(forms[formName].textarea.value);


const form = forms.sampleForm;
console.dir([...new FormData(form).entries()]);
form.username.value = 'John';
// console.dir(form.username.value);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.dir(event.target.username.value);
  console.dir(event.target.pwd.value);
  console.dir(event.target.favcolor.value);
});





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
