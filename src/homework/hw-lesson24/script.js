const watch = document.querySelector('#watch');
let milliSeconds = 0;
let timer;

const startWatch = () => {
    watch.classList.remove('paused');
    clearInterval(timer);
    timer = setInterval(() => {
        milliSeconds += 10;
        let dateTimer = new Date(milliSeconds);
        watch.innerHTML =
            ('0' + dateTimer.getUTCHours()).slice(-2) + ':' +
            ('0' + dateTimer.getUTCMinutes()).slice(-2) + ':' +
            ('0' + dateTimer.getUTCSeconds()).slice(-2) + ':' +
            ('0' + dateTimer.getUTCMilliseconds()).slice(-3, -1);
    }, 10);
};

const pausedWatch = () => {
    watch.classList.add('paused');
    clearInterval(timer);
};

const resetWatch = () => {
    watch.classList.remove('paused');
    clearInterval(timer);
    milliSeconds = 0;
    watch.innerHTML = '00:00:00:00';
};

document.addEventListener('click', (e) => {
    if (e.target.id === 'start') startWatch();
    if (e.target.id === 'pause') pausedWatch();
    if (e.target.id === 'reset') resetWatch();
});
