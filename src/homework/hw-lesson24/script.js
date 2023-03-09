const start = document.getElementById('start');
const reset = document.getElementById('reset');

let hour = document.getElementById("hour");
let min = document.getElementById("minute");
let sec = document.getElementById("sec");


let startTimer = null;

start.addEventListener('click', function () {

    function startInterval() {
        startTimer = setInterval(function () {
            timer();
        }, 1000);
    }
    startInterval();
});

reset.addEventListener('click', function () {
    hour.value = 0;
    min.value = 0;
    sec.value = 0;

    clearInterval(startTimer);
});

function timer() {
    if (hour.value == 0 && min.value == 0 && sec.value == 0) {
        hour.value = 0;
        min.value = 0;
        sec.value = 0;
    } else if (sec.value != 0) {
        sec.value--;
    } else if (min.value != 0 && sec.value == 0) {
        sec.value = 59;
        min.value--;
    } else if (hour.value != 0 && min.value == 0) {
        min.value = 60;
        hour.value--;
    }
    return;
}