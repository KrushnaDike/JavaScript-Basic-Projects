const temperField = document.querySelector(".weather1");
const cityField = document.querySelector(".weather2 p");
const dateField = document.querySelector(".weather2 span");
const emojiField = document.querySelector(".weather3 img");
const weatherField = document.querySelector(".weather3 span");
const searchField = document.querySelector(".searchField");
const form = document.querySelector("form");

let target = "mumbai";
const fetchData = async(target)=> {
    try {
        const url = `https://api.weatherapi.com/v1/current.json?key=d6d73989b94f45b38b2205132232607&q=${target}`;
    
        const response = await fetch(url);
        const data = await response.json();
    
        console.log(data);
    
        updateDom(data.current.temp_c, data.location.name, data.current.last_updated, data.current.condition.text, data.current.condition.icon);
    }catch(error) {
        alert("Location Not Found");
    }
};

const updateDom = (temp, loc, date, weather, icon)=> {
    temperField.innerText = temp + "°";
    cityField.innerText = loc;

    const exactTime = date.split(" ")[1];
    const exactDate = date.split(" ")[0];
    const exactDay = new Date(exactDate).getDay();

    dateField.innerText = `${exactTime} - ${getDayFullName(exactDay)} ${exactDate}`;
    weatherField.innerText = weather;
    emojiField.src = icon;
};

function getDayFullName(num) {
    switch (num) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            break;
    }
}

fetchData(target);


form.addEventListener("submit", (e)=>{
    e.preventDefault();

    target = searchField.value;
    fetchData(target);
});

