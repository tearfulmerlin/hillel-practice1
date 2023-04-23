class Stapwatch {
  mSeconds = 0;

  startButton;

  stopButton;

  clearButton;

  timerField;

  #interval;


  constructor(
    buttonStartClass,
    buttonStopClass,
    buttonClearClass,
    timerFieldClass,
  ) {
    this.startButton = document.querySelector(buttonStartClass);
    this.stopButton = document.querySelector(buttonStopClass);
    this.clearButton = document.querySelector(buttonClearClass);
    this.timerField = document.querySelector(timerFieldClass);
    this.setEventHandlers();
    this.render();
  }

  #incrementTimer() {
    this.mSeconds += 100;
    this.render();
  }

  #startTimer() {
    if (this.#interval) {
      clearInterval(this.#interval);
    }
    this.#interval = setInterval(() => this.#incrementTimer(), 100);
  }

  #stopTimer() {
    clearInterval(this.#interval);
  }

  #clearTimer() {
    clearInterval(this.#interval);
    this.mSeconds = 0;
    this.render();
  }

  setEventHandlers() {
    this.startButton.addEventListener('click', () => this.#startTimer());
    this.stopButton.addEventListener('click', () => this.#stopTimer());
    this.clearButton.addEventListener('click', () => this.#clearTimer());
  }

  static zeroPad(num) {
    const formatter = new Intl.NumberFormat('en-GB', { minimumIntegerDigits: 2, maximumFractionDigits: 0, roundingMode: 'floor' });

    return formatter.format(num);
  }

  #formatTimeString() {
    const formattedMinutes = Stapwatch.zeroPad(Math.floor((this.mSeconds / 1000) % 3600) / 60);
    const formattedSeconds = Stapwatch.zeroPad((this.mSeconds / 1000) % 60);
    const formattedMseconds = Stapwatch.zeroPad((this.mSeconds / 100) % 10);

    return `${formattedMinutes}:${formattedSeconds}:${formattedMseconds}`;
  }

  render() {
    this.timerField.innerHTML = this.#formatTimeString();
  }
}

const stapwatchElement = new Stapwatch('.stapwatchStart', '.stapwatchStop', '.stapwatchClear', '.stapwatchTime');
