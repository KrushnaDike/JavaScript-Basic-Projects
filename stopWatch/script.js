const clock = document.querySelector(".clock");

let sec = 0,
    min = 0,
    hr = 0,
    intervalId;

const startStopWatch = ()=> {
    intervalId = setInterval(() => {
        if(sec < 59) {
            sec++;
        }
        else if(min >= 59) {
            hr++;
            min = 0;
        }
        else {
            sec = 0;
            min++;
        }

        const hours = String(hr).padStart(2, "0");
        const minutes = String(min).padStart(2, "0");
        const seconds = String(sec).padStart(2, "0");

        clock.innerText = `${hours}:${minutes}:${seconds}`;

    }, 1000);
};

const stopStopWatch = ()=> {
    clearInterval(intervalId);
};

const restartStopWatch = ()=> {
    clearInterval(intervalId);
    sec = 0;
    min = 0;
    hr = 0;
    clock.innerText = `${String(hr).padStart(2, "0")}:${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
    startStopWatch();
};