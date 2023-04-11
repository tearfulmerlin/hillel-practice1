const timerDisplay = document.querySelector('#timer');
const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const resetButton = document.querySelector('#reset');

let countdown;
let timerRunning = false;
let timeLeft = 300;

document.title = '5:00 - Countdown Timer'

const startTimer = () => {
    timerRunning = true;
    countdown = setInterval(() => {
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        if (seconds < 10) {
            seconds = `0${seconds}`;
        }
        document.title = `${minutes}:${seconds} - Countdown Timer`;
        timerDisplay.textContent = `${minutes}:${seconds}`;
        if (timeLeft === 0) {
            clearInterval(countdown);
            document.title = 'Countdown Timer';
            timerRunning = false;
        }
    }, 1000);
};

const stopTimer = () => {
    timerRunning = false;
    clearInterval(countdown);
};

const resetTimer = () => {
    timerRunning = false;
    clearInterval(countdown);
    timeLeft = 300;
    document.title = 'Countdown Timer';
    timerDisplay.textContent = '05:00';
};

const editTimer = () => {
    const input = document.createElement('input');
    input.type = 'text';
    input.value = `${Math.floor(timeLeft / 60)}:${timeLeft % 60 < 10 ? '0' : ''}${timeLeft % 60}`;
    timerDisplay.textContent = '';
    timerDisplay.appendChild(input);
    input.focus();

    input.addEventListener('change', (e) => {
        const [newMinutes, newSeconds] = e.target.value.split(':');
        const newTime = (parseInt(newMinutes) * 60) + parseInt(newSeconds);
        timeLeft = newTime;
        startTimer();
    });

    input.addEventListener('blur', () => {
        const [newMinutes, newSeconds] = input.value.split(':');
        const newTime = (parseInt(newMinutes) * 60) + parseInt(newSeconds);
        timeLeft = newTime;
        timerDisplay.textContent = `${Math.floor(timeLeft / 60)}:${timeLeft % 60 < 10 ? '0' : ''}${timeLeft % 60}`;
    });
};

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

timerDisplay.addEventListener('click', () => {
    if (!timerRunning) {
        editTimer();
    }
});
