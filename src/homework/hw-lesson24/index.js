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

const timer = {
  seconds: 0,
  minutes: 0,
  hours: 0,
  interval: null,
};
const stopwatch = {
  seconds: 0,
  minutes: 0,
  hours: 0,
  interval: null,
};

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
  temp[0].value = createMaskArray(timer.hours);
  temp[1].value = createMaskArray(timer.minutes);
  temp[2].value = createMaskArray(timer.seconds);
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
    timer.seconds = +timeInput[2].value;
    timer.minutes = +timeInput[1].value;
    timer.hours = +timeInput[0].value;

    if (timer.hours || timer.minutes || timer.seconds) {
      if (timer.seconds > 60) {
        timer.minutes += Math.floor(timer.seconds / 60);
        timer.seconds -= 60 * Math.floor(timer.seconds / 60);
      }
      if (timer.minutes >= 60) {
        timer.hours += Math.floor(timer.minutes / 60);
        timer.minutes -= 60 * Math.floor(timer.minutes / 60);
      }
      if (timer.hours >= 100) {
        timer.hours = 99;
      }

      btn.innerText = 'Стоп';
      blockInputs(true);
      updateTimer(timeInput);
      timer.interval = setInterval(() => {
        if (!timer.hours && !timer.minutes && timer.seconds === 1) {
          document.querySelector('#timer-start').click();
          alert('Time out!');
          clearInterval(timer.interval);
        }
        if (timer.seconds === 0) {
          timer.seconds = 60;
          if (timer.minutes === 0) {
            timer.hours -= 1;
            timer.minutes = 60;
          }
          timer.minutes -= 1;
        }
        timer.seconds -= 1;
        updateTimer(timeInput);
      }, 1000);
    }
  } else {
    btn.innerText = 'Старт';
    clearInterval(timer.interval);
    blockInputs(false);
  }
});

// !deleting timer values
document.querySelector('#timer-reset').addEventListener('click', () => {
  const allInputs = document.querySelectorAll('.input-container input');
  allInputs.forEach((el) => {
    const element = el;
    element.value = '00';
    timer.seconds = 0;
    timer.minutes = 0;
    timer.hours = 0;
    document.querySelector('#timer-start').innerText = 'Старт';
    blockInputs(false);
    clearInterval(timer.interval);
  });
});

// *STOPWATCH
function updateStopWatch(displays) {
  displays[0].innerText = `${createMaskArray(stopwatch.hours)} h`;
  displays[1].innerText = `${createMaskArray(stopwatch.minutes)} min`;
  displays[2].innerText = `${createMaskArray(stopwatch.seconds)} sec`;
}

document
  .querySelector('#stopwatch-start')
  .addEventListener('click', function () {
    const displays = document.querySelectorAll('.input-container.stopwath div');
    const btn = this;
    if (btn.innerText === 'Старт') {
      btn.innerText = 'Стоп';
      stopwatch.interval = setInterval(() => {
        if (stopwatch.seconds === 59) {
          stopwatch.minutes += 1;
          stopwatch.seconds = 0;
        }
        if (stopwatch.minutes === 59) {
          stopwatch.hours += 1;
          stopwatch.minutes = 0;
        }
        if (stopwatch.hours === 59) {
          stopwatch.minutes = 0;
          stopwatch.seconds = 0;
          stopwatch.hours = 0;
        }
        stopwatch.seconds += 1;
        updateStopWatch(displays);
      }, 1000);
    } else {
      btn.innerText = 'Старт';
      clearInterval(stopwatch.interval);
    }
  });

document.querySelector('#stopwatch-reset').addEventListener('click', () => {
  const displays = document.querySelectorAll('.input-container.stopwath div');
  displays[0].innerText = '00 h';
  displays[1].innerText = '00 min';
  displays[2].innerText = '00 sec';

  stopwatch.seconds = 0;
  stopwatch.minutes = 0;
  stopwatch.hours = 0;

  document.querySelector('#stopwatch-start').innerText = 'Старт';
  clearInterval(stopwatch.interval);
});
