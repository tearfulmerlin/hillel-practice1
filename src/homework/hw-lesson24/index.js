/* eslint-disable no-unused-expressions */
/* eslint-disable no-use-before-define */
const output = document.getElementById('output');
const input = document.getElementById('input');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');
const cursorElement = document.createElement('span');
const progressBar = document.getElementById('progress-bar');
cursorElement.innerText = 's';

let refreshInterval = null;
let setSeconds = 0;
let seconds = input.value;

// 598 -> 6m 38s; 128 -> 1m 28s
const convStartTime = (second) => {
  const arrSeconds = [...second.toString().split('').reverse()];
  if (arrSeconds[1] > 5) {
    arrSeconds[1] -= 6;
    arrSeconds[2] ?? (arrSeconds[2] = 0);
    arrSeconds[2] = +arrSeconds[2] + 1;
  }

  return [arrSeconds[0] ?? '  ', (arrSeconds[1] ?? '  '), (arrSeconds[2] ?? '  '), (arrSeconds[3] ?? '  ')];
};

// sec = s + m * 60
function setSec(arr) {
  return +arr[0] + +arr[1] * 10 + +arr[2] * 60 + +arr[3] * 60;
}

function render(second, divider) {
  const minutes = Math.floor(second / divider);
  let remainingSeconds = second % divider;
  if (remainingSeconds < 10) {
    remainingSeconds = `0${remainingSeconds}`;
  }

  output.innerText = `${minutes}m ${remainingSeconds}`;
  output.appendChild(cursorElement);

  document.title = `${minutes}m ${remainingSeconds}s`;

  const progress = (1 - (second / setSec(convStartTime(input.value)))) * 100;
  progressBar.style.width = `${progress}%`;
}

render(setSec(convStartTime(input.value)), 60);
progressBar.style.width = '0%';

function startCountdown() {
  progressBar.style.backgroundColor = '#4CAF50';
  if (setSeconds === 0) {
    setSeconds = setSec(convStartTime(seconds));
  }
  refreshInterval = setInterval(() => {
    setSeconds -= 1;
    render(setSeconds, 60);
    startBtn.style.display = 'none';
    stopBtn.style.display = 'inline';
    if (setSeconds === 0) {
      stopCountdown();
      progressBar.style.backgroundColor = 'red';
    }
  }, 1000);
}

function stopCountdown() {
  clearInterval(refreshInterval);
  startBtn.style.display = 'inline';
  stopBtn.style.display = 'none';
}

function resetCountdown() {
  stopCountdown();
  setSeconds = setSec(convStartTime(input.value));
  render(setSeconds, 60);
}

input.addEventListener('input', () => {
  input.value = input.value.replace(/\D+/g, '');
  render(input.value, 100);
  setSeconds = setSec(convStartTime(input.value));
  seconds = input.value;
});

input.addEventListener('focus', function () {
  stopCountdown();
  this.select();
  output.style.cssText = 'color: #cccccc;';
  cursorElement.className = 'cursor';
});

input.addEventListener('keyup', ({ key }) => {
  if (key === 'Enter') {
    startCountdown();
    input.blur();
  }
});

startBtn.addEventListener('click', startCountdown);
stopBtn.addEventListener('click', stopCountdown);
resetBtn.addEventListener('click', resetCountdown);
output.addEventListener('click', () => {
  input.focus();
});

input.addEventListener('blur', () => {
  output.style.color = '#000';
  cursorElement.classList.remove('cursor');
});
