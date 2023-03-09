// !change tabs
document.querySelectorAll('.page-title').forEach((el) => {
  if (el.classList.contains('active')) {
    const pageNum = el.getAttribute('data-page');

    document
      .querySelector(`.body [data-page='${pageNum}']`)
      .classList.add('active');
  }

  el.addEventListener('click', () => {
    if (!el.classList.contains('active')) {
      document.querySelector('.page-title.active').classList.remove('active');
      el.classList.add('active');

      const pageNum = el.getAttribute('data-page');
      document.querySelector('.body .active').classList.remove('active');
      document
        .querySelector(`.body [data-page='${pageNum}']`)
        .classList.add('active');
    }
  });
});

let timerIntervalID;
let stopwatchIntervalID;

let secondsTimer;
let minutesTimer;
let hoursTimer;

let secondsStopWatch = 0;
let minutesStopWatch = 0;
let hoursStopWatch = 0;

let currInput = 1;
// *TIMER

// !find next input
function focusOnNextEl() {
  const nextInput = document.querySelector(`input[data-pos='${currInput}']`);
  if (nextInput !== null) nextInput.focus();
}

// !formatting time
function createMaskArray(num) {
  if (typeof num !== 'string') num = String(num);

  const amntZeros = 2 - num.length;
  const arr = [];

  for (let i = 0; i < amntZeros; i++) arr.push(0);
  if (amntZeros <= 1) arr.push(num);

  return arr.join('');
}

// !inputs validator
document.querySelectorAll('input.only-num').forEach((el) => {
  el.value = '00';

  el.addEventListener('focus', function () {
    currInput = +this.getAttribute('data-pos');
    this.value = '';
  });

  el.addEventListener('blur', function () {
    const input = this;
    const num = input.value;
    const arr = createMaskArray(num);
    input.value = arr;
  });

  el.addEventListener('keypress', function (e) {
    e.preventDefault();
    const input = this;

    if (!Number.isNaN(parseInt(e.key, 10)) && input.value.length < 2) {
      input.value += e.key;
      if (input.value.length === 2) {
        currInput += 1;
        focusOnNextEl();
      }
    }
  });
});

// !update dials
function updateTimer(timeInput) {
  const temp = timeInput;
  temp[0].value = createMaskArray(hoursTimer);
  temp[1].value = createMaskArray(minutesTimer);
  temp[2].value = createMaskArray(secondsTimer);
}

// !block or unblock input fields
function blockInputs(bool) {
  const timeInput = document.querySelectorAll('.input-container input');
  for (const el of timeInput) {
    el.disabled = bool;
  }
}

// !start timer
document.querySelector('#timer-start').addEventListener('click', function () {
  const btn = this;
  const timeInput = document.querySelectorAll('.input-container.timer input');
  if (btn.innerText === 'Старт') {
    secondsTimer = +timeInput[2].value;
    minutesTimer = +timeInput[1].value;
    hoursTimer = +timeInput[0].value;

    if (hoursTimer || minutesTimer || secondsTimer) {
      if (secondsTimer > 60) {
        minutesTimer += Math.floor(secondsTimer / 60);
        secondsTimer -= 60 * Math.floor(secondsTimer / 60);
      }
      if (minutesTimer >= 60) {
        hoursTimer += Math.floor(minutesTimer / 60);
        minutesTimer -= 60 * Math.floor(minutesTimer / 60);
      }
      if (hoursTimer >= 100) {
        hoursTimer = 99;
      }

      btn.innerText = 'Стоп';
      blockInputs(true);
      updateTimer(timeInput);
      timerIntervalID = setInterval(() => {
        if (!hoursTimer && !minutesTimer && secondsTimer === 1) {
          document.querySelector('#timer-start').click();
          clearInterval(timerIntervalID);
        }
        if (secondsTimer === 0) {
          secondsTimer = 60;
          if (minutesTimer === 0) {
            hoursTimer -= 1;
            minutesTimer = 60;
          }
          minutesTimer -= 1;
        }
        secondsTimer -= 1;
        updateTimer(timeInput);
      }, 1000);
    }
  } else {
    btn.innerText = 'Старт';
    clearInterval(timerIntervalID);
    blockInputs(false);
  }
});

// !deleting timer values
document.querySelector('#timer-reset').addEventListener('click', () => {
  const allInputs = document.querySelectorAll('.input-container input');
  allInputs.forEach((el) => {
    const element = el;
    element.value = '00';
    secondsTimer = 0;
    minutesTimer = 0;
    hoursTimer = 0;
    document.querySelector('#timer-start').innerText = 'Старт';
    blockInputs(false);
    clearInterval(timerIntervalID);
  });
});

// *STOPWATCH
function updateStopWatch(displays) {
  displays[0].innerText = `${createMaskArray(hoursStopWatch)} h`;
  displays[1].innerText = `${createMaskArray(minutesStopWatch)} min`;
  displays[2].innerText = `${createMaskArray(secondsStopWatch)} sec`;
}

document.querySelector('#stopwatch-start').addEventListener('click', function() {
  const displays = document.querySelectorAll('.input-container.stopwath div');
  const btn = this;
  if (btn.innerText === 'Старт') {
    btn.innerText = 'Стоп';
    stopwatchIntervalID = setInterval(() => {
      if (secondsStopWatch === 59) {
        minutesStopWatch += 1;
        secondsStopWatch = 0;
      }
      if (minutesStopWatch === 59) {
        hoursStopWatch += 1;
        minutesStopWatch = 0;
      }
      if (hoursStopWatch === 59) {
        minutesStopWatch = 0;
        secondsStopWatch = 0;
        hoursStopWatch = 0;
      }
      secondsStopWatch += 1;
      updateStopWatch(displays);
    }, 1000);
  } else {
    btn.innerText = 'Старт';
    clearInterval(stopwatchIntervalID);
  }
});

document.querySelector('#stopwatch-reset').addEventListener('click', () => {
  const displays = document.querySelectorAll('.input-container.stopwath div');
  displays[0].innerText = '00 h';
  displays[1].innerText = '00 min';
  displays[2].innerText = '00 sec';

  secondsStopWatch = 0;
  minutesStopWatch = 0;
  hoursStopWatch = 0;

  document.querySelector('#stopwatch-start').innerText = 'Старт';
  clearInterval(stopwatchIntervalID);
});
