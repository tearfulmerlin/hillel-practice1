const timerDisplay = document.querySelector('#timer');
const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const resetButton = document.querySelector('#reset');

let countdown;
let timerRunning = false;
let timeLeft = 300;

document.title = '5:00 - Countdown Timer'

function startTimer() {
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
}

function stopTimer() {
    timerRunning = false;
    clearInterval(countdown);
}

function resetTimer() {
    timerRunning = false;
    clearInterval(countdown);
    timeLeft = 300;
    document.title = 'Countdown Timer';
    timerDisplay.textContent = '05:00';
}

function editTimer() {
    timerDisplay.innerHTML = '<input type="text" id="editTimerInput" />';
    const editTimerInput = document.querySelector('#editTimerInput');
    editTimerInput.value = `${Math.floor(timeLeft / 60)}:${timeLeft % 60 < 10 ? '0' : ''}${timeLeft % 60}`;
    editTimerInput.focus();

    editTimerInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            const [newMinutes, newSeconds] = editTimerInput.value.split(':');
            const newTime = (parseInt(newMinutes) * 60) + parseInt(newSeconds);
            timeLeft = newTime;
            startTimer();
        }
    });

    editTimerInput.addEventListener('blur', function () {
        const [newMinutes, newSeconds] = editTimerInput.value.split(':');
        const newTime = (parseInt(newMinutes) * 60) + parseInt(newSeconds);
        timeLeft = newTime;
        timerDisplay.innerHTML = `${Math.floor(timeLeft / 60)}:${timeLeft % 60 < 10 ? '0' : ''}${timeLeft % 60}`;
    });
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
timerDisplay.addEventListener('click', editTimer);