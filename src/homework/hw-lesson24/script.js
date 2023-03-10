let time = 300; // 5 minutes by defolt
let intervalId = null; // variable to hold the interval id for the countdown

// select the elements we need from the DOM
const countdown = document.getElementById('countdown');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

// function to format the remaining time into MM:SS format
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

// function to update the title of the page with the remaining time
function updateTitle() {
  document.title = formatTime(time);
}

// function to start the countdown
function startCountdown() {
  intervalId = setInterval(() => {
    if (time === 0) {
      alert('I refuse to work!');
      clearInterval(intervalId);

      return;
    }
    // eslint-disable-next-line no-plusplus
    time--; // decrement the time by 1 second
    countdown.textContent = formatTime(time); // update the countdown display
    updateTitle();
    if (time === 0) { // if the time is up, stop the interval
      clearInterval(intervalId);
    }
  }, 1000); // run the interval every second (1000ms)
  startBtn.disabled = true;
  stopBtn.disabled = false;
  resetBtn.disabled = false;
}

// function to stop the countdown
function stopCountdown() {
  clearInterval(intervalId); // stop the interval
  startBtn.disabled = false; // enable the start button
  stopBtn.disabled = true; // disable the stop button
}

// function to reset the countdown
function resetCountdown() {
  time = 300; // reset the time to 5 minutes
  countdown.textContent = formatTime(time); // update the countdown display
  updateTitle();
  startBtn.disabled = false;
  stopBtn.disabled = true;
  resetBtn.disabled = true;
  // можливо код "відключеня" кнопок можно було якось спростити проте я не допетрав як саме
  clearInterval(intervalId); // stop the interval
}

// add event listeners to the start, stop, and reset buttons
startBtn.addEventListener('click', startCountdown);
stopBtn.addEventListener('click', stopCountdown);
resetBtn.addEventListener('click', resetCountdown);

// add event listener to the countdown display
countdown.addEventListener('click', () => {
  // replace the countdown display with an input element
  countdown.innerHTML = `
    <input type="number" min="1" max="60" value="${time / 60}">
  `;

  const input = countdown.querySelector('input'); // get a reference to the input element
  input.focus(); // focus the input element

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') { // Use 'key' instead of 'keyCode'
      const newTime = input.value * 60;
      if (newTime > 0) { // Check if the new time is greater than zero
        time = newTime;
        countdown.textContent = formatTime(time);
        updateTitle();
        resetCountdown();
        startCountdown();
      } else {
        alert('I refuse to work!');
      }
    }
  });

  input.addEventListener('blur', () => {
    time = input.value * 60; // update the time with the user's input
    countdown.textContent = formatTime(time); // update the countdown display
  });
});
