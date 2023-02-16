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

form.username.value = 'John';

// const formData = new FormData(form);

// console.dir(formData.get('username'));
// console.dir(formData.get('pwd'));
// console.dir(formData.getAll('city'));
// console.dir(formData.get('fav_lang'));
// console.dir(formData.getAll('vehicle'));

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const submitData = new FormData(event.target);

  // console.dir(event.target.username.value);
  // console.dir(event.target.pwd.value);
  // console.dir(event.target.favcolor.value);
  console.log(submitData.get('username'));
  console.log(submitData.get('favcolor'));
  console.log(submitData.getAll('city'));
  console.log(submitData.get('fav_lang'));
  console.log(submitData.getAll('vehicle'));
});
