class Timer {
  timeSet;

  #mSeconds = 0;

  #startButton;

  #stopButton;

  #clearButton;

  #timerField;

  #interval;


  constructor(
    buttonStartClass,
    buttonStopClass,
    buttonClearClass,
    timerFieldClass,
    secSetFielId,
  ) {
    this.#startButton = document.querySelector(buttonStartClass);
    this.#stopButton = document.querySelector(buttonStopClass);
    this.#clearButton = document.querySelector(buttonClearClass);
    this.#timerField = document.querySelector(timerFieldClass);
    this.timeSet = document.getElementById(secSetFielId);
    this.setEventHandlers();
    this.render();
  }

  #setStartTyme() {
    const arrTime = this.timeSet.value.split(':');
    console.log(arrTime);
    this.#mSeconds = (+arrTime[0] * 3600 + +arrTime[1] * 60 + +arrTime[2]) * 1000;
    console.log('oll sec', this.#mSeconds);
  }

  #decrementTimer() {
    if (this.#mSeconds > 0) {
      this.#mSeconds -= 100;
    }
    this.render();
  }

  #startTimer() {
    if (this.#interval) {
      clearInterval(this.#interval);
    }
    if (!this.#mSeconds) {
      this.#setStartTyme();
    }
    this.#interval = setInterval(() => this.#decrementTimer(), 100);
  }

  #stopTimer() {
    clearInterval(this.#interval);
  }

  #clearTimer() {
    clearInterval(this.#interval);
    this.#setStartTyme();
    this.render();
  }

  setEventHandlers() {
    this.#startButton.addEventListener('click', () => this.#startTimer());
    this.#stopButton.addEventListener('click', () => this.#stopTimer());
    this.#clearButton.addEventListener('click', () => this.#clearTimer());
  }

  static zeroPad(num) {
    const formatter = new Intl.NumberFormat('en-GB', { minimumIntegerDigits: 2, maximumFractionDigits: 0, roundingMode: 'floor' });

    return formatter.format(num);
  }

  #formatTimeString() {
    const formattedhours = Timer.zeroPad(this.#mSeconds / 3600000);
    console.log(formattedhours);
    const formattedMinutes = Timer.zeroPad(((this.#mSeconds / 1000) % 3600) / 60);
    const formattedSeconds = Timer.zeroPad((this.#mSeconds / 1000) % 60);
    const formattedMseconds = Timer.zeroPad((this.#mSeconds / 100) % 10);

    return `${formattedhours}:${formattedMinutes}:${formattedSeconds}:${formattedMseconds}`;
  }

  render() {
    this.#timerField.innerHTML = this.#formatTimeString();
  }
}

const timerElement = new Timer('.timerStart', '.timerStop', '.timerClear', '.timerTime', 'timerSet');
