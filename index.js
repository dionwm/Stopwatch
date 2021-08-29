let seconds = 0;
let minutes = 0;
let time;

let startBtn = document.querySelector('.start-btn');
let resetBtn = document.querySelector('.reset-btn');
let pauseBtn = document.querySelector('.pause-btn');

let sec = document.querySelector('.sec');
let min = document.querySelector('.min')


let timer = () => {
    seconds++;

    // Seconds
    if(seconds < 10) {
        sec.innerHTML = '0' + seconds;
    } else {
        sec.innerHTML = seconds;
    }

    if(seconds === 60) {
        seconds = 00;
        minutes++;
    }

    // Minutes
    if(minutes < 10) {
        min.innerHTML = '0' + minutes;
    } else {
        min.innerHTML = minutes;
    }

    if(minutes === 60) {
        minutes = 00;
    }
}

startBtn.onclick = () => {
    time = setInterval(timer, 1000);
}

pauseBtn.onclick = () => {
    clearInterval(time);
}

resetBtn.onclick = () => {
    clearInterval(time);
    sec.innerHTML = '00';
    min.innerHTML = '00';
    seconds = 0;
    minutes = 0;
}