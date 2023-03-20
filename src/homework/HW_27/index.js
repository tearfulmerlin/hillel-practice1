const timer = document.getElementById('timer');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

let countdownTime = 300;
let countdownIntervalId = null;
let isPaused = false;

function updateTimerDisplay() {
  const minutes = Math.floor(countdownTime / 60);
  const seconds = countdownTime % 60;
  timer.innerText = `${minutes.toString().padStart(2, '0')}:${seconds
    .toString()
    .padStart(2, '0')}`;
  document.title = `${minutes.toString().padStart(2, '0')}:${seconds
    .toString()
    .padStart(2, '0')} - Countdown Timer`;
}

function startCountdown() {
  countdownIntervalId = setInterval(() => {
    countdownTime--;
    updateTimerDisplay();

    if (countdownTime <= 0) {
      clearInterval(countdownIntervalId);
      document.title = "Countdown Timer - Time's Up!";
      alert("Time's up!");
    }
  }, 1000);
  isPaused = false;
}

function pauseCountdown() {
  clearInterval(countdownIntervalId);
  isPaused = true;
}

function resumeCountdown() {
  startCountdown();
}

function resetCountdown() {
  clearInterval(countdownIntervalId);
  countdownTime = 300;
  updateTimerDisplay();
  document.title = 'Countdown Timer';
  isPaused = false;
}

function setNewCountdownTime() {
  const currentTimerText = timer.innerText;
  const newTime = prompt('Enter new countdown time (mm:ss)', currentTimerText);
  if (newTime !== null) {
    countdownTime = parseInt(newTime.split(':')[0], 10) * 60
      + parseInt(newTime.split(':')[1], 10);
    updateTimerDisplay();
    if (!isPaused) {
      startCountdown();
    }
  }
}

startButton.addEventListener('click', () => {
  if (!isPaused) {
    startCountdown();
  } else {
    resumeCountdown();
  }
});

stopButton.addEventListener('click', pauseCountdown);
resetButton.addEventListener('click', resetCountdown);

timer.addEventListener('click', setNewCountdownTime);

updateTimerDisplay();
