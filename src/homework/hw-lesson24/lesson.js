const timerInput = document.forms.timerForm.timer;
// Buttons
const buttonStop = document.createElement('button');
buttonStop.innerText = 'Stop';
document.forms.timerForm.appendChild(buttonStop);

const buttonStart = document.createElement('button');
buttonStart.innerText = 'Start';
document.forms.timerForm.appendChild(buttonStart);
buttonStop.style.display = 'none';

let resetDistance = [timerInput.value];
const buttonReset = document.createElement('button');
buttonReset.innerText = 'Reset';
document.forms.timerForm.appendChild(buttonReset);
// Functions
let interval = '';
function timer(minutes, seconds) {
  let distance = (minutes * 60000) + (seconds * 1000);
  interval = setInterval(() => {
    distance -= 1000;
    const setMinutes = Math.floor(distance / 60000);
    const setSeconds = Math.floor((distance % (1000 * 60)) / 1000);

    const naturalNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    timerInput.value = `${naturalNumbers.includes(setMinutes) ? `0${setMinutes}` : setMinutes}:${naturalNumbers.includes(setSeconds) ? `0${setSeconds}` : setSeconds}`;
    document.title = `${naturalNumbers.includes(setMinutes) ? `0${setMinutes}` : setMinutes}:${naturalNumbers.includes(setSeconds) ? `0${setSeconds}` : setSeconds}`;
    // checking when timer is over
    if (distance < 0) {
      clearInterval(interval);
      timerInput.value = '00:00';
      document.title = '00:00';
      buttonStart.style.display = 'inline';
    }
  }, 1000);
}

function lastPoint() {
  const LastMinutes = Number(timerInput.value.slice(0, timerInput.value.indexOf(':')));
  const LastSeconds = Number(timerInput.value.slice(timerInput.value.indexOf(':')).replace(':', ''));
  timer(LastMinutes, LastSeconds);
}

function checkDistance() {
  if (timerInput.value !== resetDistance[resetDistance.length - 1]) {
    resetDistance = [];
    resetDistance.push(timerInput.value);
  }
}
// Listeners
buttonStart.addEventListener('click', (e) => {
  e.preventDefault();
  checkDistance();
  lastPoint();
  buttonStart.style.display = 'none';
  buttonStop.style.display = 'inline';
});

buttonStop.addEventListener('click', (e) => {
  e.preventDefault();
  resetDistance.push(timerInput.value);
  clearInterval(interval);
  buttonStop.style.display = 'none';
  buttonStart.style.display = 'inline';
});

buttonReset.addEventListener('click', (e) => {
  e.preventDefault();
  clearInterval(interval);
  timerInput.value = resetDistance[0];
  lastPoint();
  buttonStart.style.display = 'none';
  buttonStop.style.display = 'inline';
});

document.querySelector('input').addEventListener('click', () => {
  resetDistance.push(timerInput.value);
  clearInterval(interval);
  buttonStop.style.display = 'none';
  buttonStart.style.display = 'inline';
});

document.querySelector('input').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    checkDistance();
    const minutes = Number(e.target.value.slice(0, e.target.value.indexOf(':')));
    const seconds = Number(e.target.value.slice(e.target.value.indexOf(':')).replace(':', ''));
    timer(minutes, seconds);
    document.querySelector('input').blur();
    buttonStart.style.display = 'none';
    buttonStop.style.display = 'inline';
  }
});

document.querySelector('input').addEventListener('focusout', () => {
  checkDistance();
});
