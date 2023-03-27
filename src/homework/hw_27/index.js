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
  if (timer.querySelector('input')) {
    return;
  }
  const input = document.createElement('input');
  input.type = 'text';
  input.value = timer.innerText;
  input.style.width = '80px';
  input.style.marginRight = '10px';
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      const newTime = input.value;
      countdownTime = parseInt(newTime.split(':')[0], 10) * 60
        + parseInt(newTime.split(':')[1], 10);
      updateTimerDisplay();
      if (!isPaused) {
        startCountdown();
      }
      timer.removeChild(input);
    } else if (event.key === 'Escape') {
      timer.removeChild(input);
    }
  });
  timer.appendChild(input);
  input.focus();
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
