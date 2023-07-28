const daysElement = document.querySelector("#days");
const hoursElement = document.querySelector("#hours");
const minutesElement = document.querySelector("#minutes");
const secondsElement = document.querySelector("#seconds");
const heading = document.querySelector("h1");
const couterTimer = document.querySelector(".couterTimer")

const second = 1000,
    minute = 60 * second,
    hour = 60 * minute,
    day = 24 * hour;

const timerFunction = ()=> {
    let now = new Date(),
        dd = String(now.getDate()).padStart(2, "0"),
        mm = String(now.getMonth() + 1).padStart(2, "0"),
        yyyy = now.getFullYear();

    const enteredDay = prompt("Enter Day").padStart(2, "0");
    const enteredMonth = prompt("Enter Month").padStart(2, "0");

    if(enteredDay < 30 && enteredMonth < 12) {
            let targetDate = `${enteredMonth}/${enteredDay}/${yyyy}`;
        
            now = `${mm}/${dd}/${yyyy}`;
            if(now > targetDate) {
                targetDate = `${enteredMonth}/${enteredDay}/${yyyy + 1}`;
            }
        
            const inertervalId = setInterval(() => {
                const timer = new Date(targetDate).getTime();
                const today = new Date().getTime();
        
                const difference = timer - today;
                const leftDay = Math.floor((difference / day));
                const leftHour = Math.floor((difference % day) / hour);
                const leftMinute = Math.floor((difference % hour) / minute);
                const leftSeconds = Math.floor((difference % minute) / second);
        
                daysElement.innerText = leftDay;
                hoursElement.innerText = leftHour;
                minutesElement.innerText = leftMinute;
                secondsElement.innerText = leftSeconds;
        
                if(difference < 0) {
                    couterTimer.style.display = "none";
                    heading.innerText = "Time's Up";
                    clearInterval(inertervalId);
                }
        
            }, 0);
        }
        
        else {
            couterTimer.style.display = "none";
            heading.innerText = "Refresh and Please Enter valid Date and Month";
            heading.style.color = "chocolate";
        }       
};

timerFunction();