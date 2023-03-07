const output = document.getElementById('output');

const input = document.getElementById('input');
let refreshInterval = null;
let seconds = '500';
let arrInp = ['0', '0', 5];
let setSeconds = seconds.toString();

function rendering() {
  const countdonwn = `${(arrInp[3] ? arrInp[3] : '  ') + (arrInp[2] ? arrInp[2] : '  ')}m ${(arrInp[1] ? arrInp[1] : '  ') + (arrInp[0] ? arrInp[0] : '  ')}s`
  input.value = seconds;
  document.title = countdonwn;
  output.innerText = countdonwn;
}
rendering();

function updateArray(e) {
  setSeconds = e.target.value;
  seconds = setSeconds;
  arrInp = seconds.split('').reverse();
  rendering();
}

input.addEventListener('input', updateArray);

function start() {
  refreshInterval = setInterval(() => {
    seconds -= 1;
    seconds = `${seconds}`;
    arrInp = seconds.split('').reverse();
    rendering();
  }, 1000);
}

function stop() {
  clearInterval(refreshInterval);
}

function reset() {
  seconds = setSeconds;
  stop();
  rendering();
}
