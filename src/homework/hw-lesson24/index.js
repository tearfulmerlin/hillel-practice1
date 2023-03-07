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

function start1() {
  refreshInterval = setInterval(() => {
    seconds -= 1;
    rendering();
  }, 1000);
}

function stop1() {
  clearInterval(refreshInterval);
}

function reset1() {
  seconds = setSeconds;
  stop1();
  rendering();
}


//
const inpToArray = document.getElementById('inpToArray');

let newInp = '500';
let arrInp = ['0', '0', 5];

output.innerText = `${(arrInp[3] ? arrInp[3] : '  ') + (arrInp[2] ? arrInp[2] : '  ')}m ${(arrInp[1] ? arrInp[1] : '  ') + (arrInp[0] ? arrInp[0] : '  ')}s`;

function updateArray(e) {
  newInp = e.target.value;
  arrInp = newInp.split('').reverse();
  output.innerText = `${(arrInp[3] ? arrInp[3] : '  ') + (arrInp[2] ? arrInp[2] : '  ')}m ${(arrInp[1] ? arrInp[1] : '  ') + (arrInp[0] ? arrInp[0] : '  ')}s`;
}

inpToArray.addEventListener('input', updateArray);

