const timerDisplay = document.getElementById('timer')
const startBtn = document.getElementById('startBtn')
const stopBtn = document.getElementById('stopBtn')
const resetBtn = document.getElementById('resettBtn')

let hours = 0;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;

let int = null;

startBtn.addEventListener('click', ()=>{
    if(int !== null) {
        clearInterval(int)
    }
    int = setInterval(startTimer, 10);
});

stopBtn.addEventListener('click', ()=>{
    clearInterval(int);
});

resetBtn.addEventListener('click', ()=>{
    clearInterval(int);
    hours = 0;
    minutes = 0;
    seconds = 0;
    miliseconds = 0;
    timerDisplay.innerHTML = '00 : 00 : 00 : 00';
})

function startTimer() {
    miliseconds++;
    if(miliseconds == 100) {
        miliseconds = 0
        seconds++;
        if(seconds == 60) {
            seconds = 0;
            minutes++;
            if(minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }
    let h = (hours < 10) ? '0' + hours : hours;
    let m = (minutes < 10) ? '0' + minutes : minutes;
    let s = (seconds < 10) ? '0' + seconds : seconds;
    let ms = (miliseconds < 10) ? '0' + miliseconds : miliseconds;

    timerDisplay.innerHTML = h + ' : ' + m + ' : ' + s + ' : ' + ms;
}