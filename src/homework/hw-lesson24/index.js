const output = document.getElementById('output');
const input = document.getElementById('input');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

let refreshInterval = null;

// 598 -> 6m 38s; 128 -> 1m 28s
const convStartTime = (seconds) => {
  const arrSeconds = [...seconds.toString().split('').reverse()];
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


function render(seconds, divider) {
  const minutes = Math.floor(seconds / divider);
  let remainingSeconds = seconds % divider;
  if (remainingSeconds < 10) {
    remainingSeconds = `0${remainingSeconds}`;
  }

  output.innerText = `${minutes}m ${remainingSeconds}s`;
}

render(setSec(convStartTime(input.value)), 60);
let setSeconds = 0;
let seconds = input.value;

function startCountdown() {
  if (setSeconds === 0) {
    setSeconds = setSec(convStartTime(seconds));
  }
  refreshInterval = setInterval(() => {
    setSeconds -= 1;
    render(setSeconds, 60);
    startBtn.style.display = 'none';
    stopBtn.style.display = 'inline';
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
  render(input.value, 100);
  setSeconds = setSec(convStartTime(input.value));
  seconds = input.value;
});
// input.addEventListener('focusout', renderingCountdown);
input.addEventListener('keyup', ({ key }) => {
  if (key === 'Enter') startCountdown();
});
startBtn.addEventListener('click', startCountdown);
stopBtn.addEventListener('click', stopCountdown);
resetBtn.addEventListener('click', resetCountdown);
