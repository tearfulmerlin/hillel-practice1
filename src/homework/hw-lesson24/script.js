// const btn = document.createElement('button');
// btn.innerHTML = '<span>Start</span>'
// document.body.appendChild(btn);

// const seconds = 300;


// function timer(time) {
//     const watch = time
    
//     const timerDiv = document.createElement('div');
//     timerDiv.innerText = watch
//     document.body.appendChild(timerDiv)
    
//     return setInterval(function(){
//         return this.watch--;
//     },1000)
// }

// // const play = timer(seconds);

// btn.addEventListener('click', timer(seconds))


// const count  = setInterval(function timer(time) {
//     console.log(time)
// }, 1000)

// btn.addEventListener('click', () =>{
//     const timer = document.createElement('div')
//     document.body.appendChild(timer)
    
//     for(let i = 300; i >= 0; i--){
//         setTimeout(function() {
//             console.log(i)
//             timer.innerText = i
//         },1000 )

//     }
// })



// const btn = document.createElement('button');
// btn.innerHTML = '<span class="btn">Start</span>';
// btn.innerHTML = '<span>Start</span>';
// document.body.appendChild(btn);













const btn = document.querySelector('div.on')
const timePlace = document.querySelector('div.seconds')
console.dir(btn)

const seconds = 10;

function timerStart(time) {
    let watch = time;
    
    const timerDiv = document.createElement('div');
    timerDiv.innerText = watch;
    timePlace.appendChild(timerDiv);

    btn.innerText = 'Stop';
    btn.setAttribute('id', 'flase');

    const intervalId = setInterval(function() {
        watch--;
        timerDiv.innerText = watch;
        if (watch <= 0) {
            clearInterval(intervalId);
        }
    }, 1000);

    return intervalId;
}

function timerStop(intervalId, time) {
    clearInterval(intervalId);

    btn.innerText = 'Start';
    btn.setAttribute('id', 'true');

    const timerDiv = document.createElement('div');
    timerDiv.innerText = time;
    timePlace.innerHTML = '';
    timePlace.appendChild(timerDiv);

    return timerDiv;
}


const start = () => timerStart(seconds);
const stop = () => timerStop(intervalId,seconds)

btn.addEventListener('click', () => {

    if(btn.id === 'true') return start();
    if(btn.id === 'false') return stop();
});

// btn.addEventListener('click', () => {
//     if (btn.id === 'true') {
//         const intervalId = start();
//         btn.setAttribute('data-interval-id', intervalId);
//     } else if (btn.id === 'false') {
//         const intervalId = btn.getAttribute('data-interval-id');
//         timerStop(intervalId, seconds);
//     }
// });





