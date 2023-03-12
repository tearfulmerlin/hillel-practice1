let currInput = 1;

let seconds, minutes, hours;

function focusOnNextEl() {
  const nextInput = document.querySelector(`input[data-pos="${currInput}"]`);
  if (nextInput !== null) nextInput.focus();
}

function createMaskArray(num) {
  const amntZeros = 2 - num.length;
  const arr = [];

  for (let i = 0; i < amntZeros; i++) arr.push(0);
  if (amntZeros <= 1) arr.push(num);

  return arr;
}

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
    input.value = arr.join('');
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

document.querySelector('#timer-start').addEventListener('click', function () {
  const btn = this;
  if (btn.innerText === 'Старт') {
    btn.innerText = 'Стоп';
    seconds = +document.querySelector('.only-num.seconds').value;
    minutes = +document.querySelector('.only-num.minutes').value;
    hours = +document.querySelector('.only-num.hours').value;
    document.querySelector('.only-num.seconds').disabled = true;
  } else {
    btn.innerText = 'Старт';
  }

    
});

