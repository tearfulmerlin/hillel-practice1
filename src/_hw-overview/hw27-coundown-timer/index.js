const input = document.querySelector('input');
const value = {
  h: '00',
  m: '00',
  s: '00',
  position: 0,
};
input.addEventListener('keydown', (e) => {
  e.stopPropagation();
  e.preventDefault();

  console.log(e.key);
  console.log(typeof e.key);
  console.log(Number.isNaN(+e.key));

  if (Number.isNaN(+e.key)) {
    return;
  }

  // console.dir(e.key);
  value.push(e.key);

  e.target.value = `${value.h}h ${value.m}m ${value.s}s`;
});

// class Time {
//   time = 0;

//   constructor(time) {
//     if (time) {
//       this.time = time;
//     }
//   }

//   update(time) {
//     this.time = time;
//   }
//   get() {
//     return this.time;
//   }
//   parse(str) {
//     const arr = str.split(':')
//     this.time = 1
//   }
// }

class Timer {
  initialTime = 300;

  subscribers = [];

  constructor(time) {
    this.time = time ?? this.initialTime;
  }

  setTime(time) {
    this.time = time;
  }

  reset() {
    this.time = this.initialTime;
  }

  start() {
    this.timerId = setInterval(() => {
      this.time -= 1;
    }, 1000);
  }

  stop() {
    clearInterval(this.timerId);
  }

  subscribe(container) {
    this.subscribers.push(container);
  }

  update() {
    this.subscribers.forEach((item) => {
      item.innerText = 0;
    });
  }
}

const timer = new Timer();
