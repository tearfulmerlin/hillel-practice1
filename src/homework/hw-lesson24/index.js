/* eslint-disable no-restricted-syntax */

let time = 300; // 5 minutes in seconds
const controlsContainer = document.querySelector('.container__controls');
const timeContainer = document.querySelector('.container__time');
const timeSpan = document.querySelector('.time');
let intervalId;
let startButton;
let stopButton;
let resetButton;
let timeForm;

function displayTime() {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const mintuesStr = minutes > 0 ? `${minutes} m ` : '';
  const secondsStr = minutes > 0 && seconds < 10 ? `0${seconds} s` : `${seconds} s`;
  timeSpan.textContent = `${mintuesStr}${secondsStr}`;
}

function decreaseTime() {
  time -= 1;
}

function disableStartAndStopButtons() {
  startButton.setAttribute('disabled', '');
  stopButton.setAttribute('disabled', '');
}

function disableAllButtons() {
  disableStartAndStopButtons();
  resetButton.setAttribute('disabled', '');
}

function disableStartButton() {
  stopButton.removeAttribute('disabled');
  startButton.setAttribute('disabled', '');
}

function disableStopButton() {
  startButton.removeAttribute('disabled');
  stopButton.setAttribute('disabled', '');
}

function stopTimer() {
  clearInterval(intervalId);
  displayTime();
  disableStopButton();
  intervalId = null;
}

function updateTime() {
  decreaseTime();
  displayTime();

  if (time === 0) {
    clearInterval(intervalId);
    disableStartAndStopButtons();
  }
}

function resetTimer() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }

  disableStopButton();

  time = 300;
  displayTime();
}

function runTimer() {
  if (!intervalId && time > 0) {
    intervalId = setInterval(updateTime, 1000);
    disableStartButton();
  }
}

function createButton(textContent, onclickFunc) {
  const button = document.createElement('button');
  button.textContent = textContent;
  button.onclick = onclickFunc;

  return button;
}

function createStartButon() {
  startButton = createButton('Start', (e) => {
    e.stopPropagation();

    if (time > 0) runTimer();
  });
  controlsContainer.append(startButton);
}

function createStopButon() {
  stopButton = createButton('Stop', (e) => {
    e.stopPropagation();
    stopTimer();
  });
  stopButton.setAttribute('disabled', '');
  controlsContainer.append(stopButton);
}

function createResetButon() {
  resetButton = createButton('Reset', (e) => {
    e.stopPropagation();
    resetTimer();
  });
  controlsContainer.append(resetButton);
}

function hideTime() {
  timeSpan.setAttribute('hidden', '');
}

function unhideTime() {
  timeSpan.removeAttribute('hidden');
}

function processForm(formElement) {
  const formData = new FormData(formElement);

  let seconds = 0;
  for (const [key, value] of formData.entries()) {
    if (key === 'minutes') {
      seconds += +value * 60;
    } else {
      seconds += +value;
    }
  }

  time = seconds;
  timeForm.remove();
  timeForm = null;
}

function submitTimeForm(e) {
  e.preventDefault();

  processForm(e.target);
  unhideTime();
  displayTime();
  runTimer();
  resetButton.removeAttribute('disabled');
}

function creteForm() {
  timeForm = document.createElement('form');
  timeForm.setAttribute('name', 'set-time');
  timeContainer.append(timeForm);

  const inputMinutes = document.createElement('input');
  inputMinutes.setAttribute('id', 'time-minutes');
  inputMinutes.setAttribute('type', 'number');
  inputMinutes.setAttribute('name', 'minutes');
  inputMinutes.setAttribute('value', '0');
  inputMinutes.setAttribute('min', '0');

  const labelMinutes = document.createElement('label');
  labelMinutes.setAttribute('for', 'time-minutes');
  labelMinutes.textContent = 'm';

  const divMinutes = document.createElement('div');
  divMinutes.append(inputMinutes);
  divMinutes.append(labelMinutes);
  timeForm.append(divMinutes);

  const inputSeconds = document.createElement('input');
  timeForm.append(inputSeconds);
  inputSeconds.setAttribute('id', 'time-seconds');
  inputSeconds.setAttribute('type', 'number');
  inputSeconds.setAttribute('name', 'seconds');
  inputSeconds.setAttribute('value', '0');
  inputSeconds.setAttribute('min', '0');

  const labelSeconds = document.createElement('label');
  labelSeconds.setAttribute('for', 'time-seconds');
  labelSeconds.textContent = 's';

  const divSeconds = document.createElement('div');
  divSeconds.append(inputSeconds);
  divSeconds.append(labelSeconds);
  timeForm.append(divSeconds);

  const inputSubmit = document.createElement('input');
  inputSubmit.setAttribute('type', 'submit');
  inputSubmit.setAttribute('hidden', '');
  timeForm.append(inputSubmit);
  timeForm.onsubmit = submitTimeForm;
}

function loadTimer() {
  displayTime();
  createStartButon();
  createStopButon();
  createResetButon();

  document.addEventListener('click', (e) => {
    if (e.target.tagName === 'SPAN' && e.target.className === 'time') {
      hideTime();
      stopTimer();
      disableAllButtons();
      creteForm();
    } else if (!['LABEL', 'INPUT', 'FORM'].includes(e.target.tagName) && timeForm) {
      processForm(timeForm);
      unhideTime();
      displayTime();
      resetButton.removeAttribute('disabled');

      if (time > 0) disableStopButton();
    }
  });
}

loadTimer();
