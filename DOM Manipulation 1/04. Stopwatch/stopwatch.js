function stopwatch() {
    const timer = document.getElementById('time');
    const startBtn = document.getElementById('startBtn');
    const stopBtn = document.getElementById('stopBtn');

    startBtn.addEventListener('click', start);
    stopBtn.addEventListener('click', stop);

    let seconds = 0;
    let minutes = 0;
    let intervalId;

    function start() {
        startBtn.setAttribute('disabled', true);
        stopBtn.removeAttribute('disabled');

        intervalId = setInterval(function() {
            seconds++;
            
            seconds < 10 
                ? timer.innerText = `0${minutes}:0${seconds}`
                : timer.innerText = `0${minutes}:${seconds}`;
            
            if(seconds == 59) {
                if(minutes < 10) {
                    minutes++;
                    timer.innerText = `0${minutes}:0${seconds}`;
                } else {
                    minutes++;
                    timer.innerText = `${minutes}:${seconds}`;
                }
            }  
                         
        },1000)
    }

    function stop() {
        stopBtn.setAttribute('disabled', true);
        startBtn.removeAttribute('disabled');
        clearInterval(intervalId)   
    }
}