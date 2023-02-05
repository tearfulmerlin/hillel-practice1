/** DOM */
// DOM basic structures

// document.getElementById('app')
// console.dir(document.getElementById('app'));

// var text = 'test';
// var id = document.getElementById('app');
// console.dir(app);
// document.getElementsByClassName('main-button')
// console.dir(document.getElementsByClassName('bg'));
// document.getElementsByName('search-input')
// console.dir(document.getElementsByName('search'));
// console.dir(document.getElementsByName('search'));
// document.getElementsByTagName('h1')
// console.dir(document.getElementById('app'));
// console.log(document.getElementById('app'));
// document.querySelector('#app p')
// document.querySelectorAll('p')
// console.dir(document.querySelector('.modal'));
// console.dir(document.querySelectorAll('div'));

// styles
const modal = document.querySelector('.modal');
// modal.style.backgroundColor = 'red';
// modal.className += ' modal2';
// modal.classList.add('test-class');
// modal.classList.remove('modal');
// modal.classList.toggle('modal');
// modal.classList.toggle('modal');


// attributes
// modal.setAttribute('v-model', 'superModal');

// manipulating elements
const button = document.createElement('button');

button.innerText = 'click me!';
modal.appendChild(button);
button.style.fontSize = '24px';
button.style.marginTop = '24px';

const span = document.createElement('span');
const em = document.createElement('em');

span.innerHTML = '<b>info</b>';
em.innerHTML = 'replacer';
// modal.appendChild(span);
modal.insertBefore(span, button);
modal.replaceChild(em, span);
// modal.removeChild(em);

// console.log(modal.children);
// node.appendChild()
// node.insertBefore()
// node.replaceChild()


function clickButtonOriginal(event) {
  event.stopPropagation();
  console.dir(event.target);
  // alert('button clicked');
}

function clickButton(event) {
  console.dir(event.target);
  // alert('button clicked');
}
function showMovement(event) {
  console.log(event);
}

// button.onclick = clickButton;
button.addEventListener('click', clickButtonOriginal);
// modal.addEventListener('mousemove', showMovement);
modal.addEventListener('click', clickButton);
// app.addEventListener('click', clickButton);
// document.addEventListener('click', clickButton);

/** EVENTS */
// click
// mouseover
// mouseout
// mousedown
// mouseup
// mousemove
// submit
// focus
// blur
// keydown
// keyup

// prevent default
function handleSubmit(e) {
  // e.preventDefault();

  console.log(e.target);
}
document.querySelector('form').addEventListener('submit', handleSubmit);

document.querySelector('a').addEventListener('click', handleSubmit);
// document.querySelector('.modal').onclick=(e)=>console.log(e.target)
// document.querySelector('.bg').onclick=(e)=>console.log(e.target)
