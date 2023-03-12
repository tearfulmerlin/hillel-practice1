const startTime = document.querySelector('div.start');
const stopTime = document.querySelector('div.stop');
const resetTime = document.querySelector('div.reset');
const time = document.querySelector('input.time');

let minutes = 0;
let seconds = 0;

const defaultTime = 300;

function convertTime(second) {
  const countTime = second;

  seconds = countTime % 60;
  minutes = (second - seconds) / 60;
}

convertTime(defaultTime);


function showTime(someM, someS) {
  // eslint-disable-next-line no-return-assign
  if (someS >= 10) return time.value = `${someM}:${someS}`;
  // eslint-disable-next-line no-return-assign
  if (someS < 10) return time.value = `${someM}:0${someS}`;
}


showTime(minutes, seconds);

let set;

function startTimer() {
  set = setInterval(() => {
    if (seconds === 0 && minutes === 0) {
      clearInterval(set);
    }
    if (seconds === 0) {
      // eslint-disable-next-line no-plusplus
      minutes--;
      seconds = 59;
    } else {
      // eslint-disable-next-line no-plusplus
      seconds--;
    }
    showTime(minutes, seconds);
  }, 1000);
}

startTime.addEventListener('click', startTimer);

function stopTimer() {
  clearInterval(set);
}

stopTime.addEventListener('click', stopTimer);

function resetTimer() {
  clearInterval(set);
  convertTime(defaultTime);
  showTime(minutes, seconds);
}

resetTime.addEventListener('click', resetTimer);

function changeTime() {
  const value = time.value.split(':');
  if (value.length === 2 && !isNaN(value[0]) && !isNaN(value[1])) {
    minutes = parseInt(value[0]);
    seconds = parseInt(value[1]);
    showTime(minutes, seconds);
  }
}

time.addEventListener('change', changeTime);
