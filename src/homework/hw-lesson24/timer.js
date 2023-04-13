class Timer {
  #seconds = 0;

  #startButton;

  #stopButton;

  #clearButton;

  #timerField;

  #interval;

  constructor(buttonStartClass, buttonStopClass, buttonClearClass, timerFieldClass) {
    this.#startButton = document.querySelector(buttonStartClass);
    this.#stopButton = document.querySelector(buttonStopClass);
    this.#clearButton = document.querySelector(buttonClearClass);
    this.#timerField = document.querySelector(timerFieldClass);
    this.setEventHandlers();
    this.render();
  }

  #startTimer() {
    if (this.#interval) {
      clearInterval(this.#interval);
    }
    this.#interval = setInterval(() => this.#incrementTimer(), 1000);
  }

  #incrementTimer() {
    this.#seconds += 1;
    this.render();
  }

  #stopTimer() {
    clearInterval(this.#interval);
  }

  #clearTimer() {
    clearInterval(this.#interval);
    this.#seconds = 0;
    this.render();
  }

  setEventHandlers() {
    this.#startButton.addEventListener('click', this.#startTimer());
    this.#stopButton.addEventListener('click', () => this.#stopTimer());
    this.#clearButton.addEventListener('click', () => this.#clearTimer());
  }

  // eslint-disable-next-line class-methods-use-this
  #zeroPad(num, places) {
    return String(num).padStart(places, '0');
  }

  #formatTimeString() {
    const formattedMinutes = this.#zeroPad(Math.floor((this.#seconds % 3600) / 60), 2);
    const formattedSeconds = this.#zeroPad(this.#seconds % 60, 2);

    return `${formattedMinutes}:${formattedSeconds}`;
  }

  render() {
    this.#timerField.innerHTML = this.#formatTimeString();
  }
}

const timerElement = new Timer('.start', '.stop', '.clear', '.time');
console.log(timerElement);
