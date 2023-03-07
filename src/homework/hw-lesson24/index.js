const output = document.getElementById('output');
const input = document.getElementById('input');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

let refreshInterval = null;
let seconds = '500';
let arrSeconds = ['0', '0', 5];
let setSeconds = seconds.toString();

function converted() {
  if (arrSeconds[1] > 5) {
    arrSeconds[1] -= 6;
    arrSeconds[2] ?? (arrSeconds[2] = 0);
    arrSeconds[2] = +arrSeconds[2] + 1;
  }
}

function renderingCountdown() {
  converted();
  const countdonwn = `${(arrSeconds[3] ?? '  ') + (arrSeconds[2] ?? '  ')}m ${(arrSeconds[1] ?? '  ') + (arrSeconds[0] ?? '  ')}s`;
  input.value = seconds;
  document.title = countdonwn;
  output.innerText = countdonwn;
}
renderingCountdown();

function updateArray(e) {
  setSeconds = e.target.value;
  seconds = setSeconds;
  arrSeconds = seconds.split('').reverse();
}

function startCountdown() {
  refreshInterval = setInterval(() => {
    seconds -= 1;
    arrSeconds = seconds.toString().split('').reverse();
    renderingCountdown();
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
  seconds = setSeconds;
  arrSeconds = seconds.split('').reverse();
  stopCountdown();
  renderingCountdown();
}

input.addEventListener('input', updateArray);
input.addEventListener('focusout', renderingCountdown);
input.addEventListener('keyup', ({ key }) => {
  if (key === 'Enter') startCountdown();
});
startBtn.addEventListener('click', startCountdown);
stopBtn.addEventListener('click', stopCountdown);
resetBtn.addEventListener('click', resetCountdown);
