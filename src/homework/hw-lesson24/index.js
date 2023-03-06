const countdonwn = document.getElementById('countdonwn');
const output = document.getElementById('output');

let refreshInterval = null;
let seconds = 300;
let setSeconds = seconds.toString();

function updateValue(e) {
  setSeconds = e.target.value;
  const minSec = setSeconds[setSeconds.length - 1];
  seconds = setSeconds;
}

countdonwn.addEventListener('input', updateValue);

function rendering() {
  const minSec = `${(seconds / 60).toFixed(0)}m ${(seconds % 60) ? (seconds % 60) : '00'}s`;
  countdonwn.value = minSec;
  document.title = minSec;
}

rendering();

function start() {
  refreshInterval = setInterval(() => {
    seconds -= 1;
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


//
const inpToArray = document.getElementById('inpToArray');

let newInp = '';

function updateArray(e) {
  newInp = e.target.value;
  let arrInp = [0,0,0,0];
  arrInp = newInp.split('').reverse();
  const minSec = setSeconds[setSeconds.length - 1];
  output.innerText = arrInp[3] + arrInp[2] + 'm ' + arrInp[1] + arrInp[0] + 's';
}

inpToArray.addEventListener('input', updateArray);

