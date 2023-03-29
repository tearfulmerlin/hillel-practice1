const timer = document.getElementById('timer');
const startButton = document.getElementById('buttonStart');
const stopButton = document.getElementById('buttonStop');
const resetButton = document.getElementById('buttonReset');
let zeroDistance = [timer.value];
document.title = timer.value;


let interval = '';

function tokiYoTomare(minutes, seconds) {
  let distance = (minutes * 60000) + (seconds * 1000);
  interval = setInterval(() => {
    distance -= 1000;
    const setMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const setSeconds = Math.floor((distance % (1000 * 60)) / 1000);

    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    timer.value = `${numbers.includes(setMinutes) ? `0${setMinutes}` : setMinutes}:${numbers.includes(setSeconds) ? `0${setSeconds}` : setSeconds}`;
    document.title = timer.value;

    if (distance < 0) {
      clearInterval(interval);
      timer.value = '00:00';
    }
  }, 1000);
}

function zeroTime() {
  const zeroMinute = Number(timer.value.slice(0, timer.value.indexOf(':')));
  const zeroSeconds = Number(timer.value.slice(timer.value.indexOf(':')).replace(':', ''));
  tokiYoTomare(zeroMinute, zeroSeconds);
}

function checkDistance() {
  if (timer.value !== zeroDistance[zeroDistance.length - 1]) {
    zeroDistance = [];
    zeroDistance.push(timer.value);
  }
}

function Start(e) {
  e.preventDefault();
  checkDistance();
  zeroTime();
}

function Stop(e) {
  e.preventDefault();
  zeroDistance.push(timer.value);
  clearInterval(interval);
}


startButton.addEventListener('click', Start);
stopButton.addEventListener('click', Stop);
timer.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    Start(event);
  }
});

function Reset(e) {
  e.preventDefault();
  clearInterval(interval);
  [timer.value] = zeroDistance;
  zeroTime();
}

resetButton.addEventListener('click', Reset);
