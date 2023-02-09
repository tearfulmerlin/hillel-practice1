function addSpan(e) {
  const span = document.createElement('span');
  span.innerText = 'New text';
  console.log(e);
}
document.querySelector('input').addEventListener('click', addSpan);
