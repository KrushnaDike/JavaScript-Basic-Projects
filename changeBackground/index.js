const myBtn = document.getElementById("myBtn");
const zodiac = document.getElementById("zodiac");

const body = document.body;

const changeBackground = ()=>{
    const val = String(zodiac.value);
    if(val === "arise") {
        body.style.backgroundColor = "#fff100";
    }
    else if(val === "tarus") {
        body.style.backgroundColor = "#ff8c00";
    }
    else if(val === "gemini") {
        body.style.backgroundColor = "#ffc0cb";
    }
    else if(val === "cancer") {
        body.style.backgroundColor = "#bad80a";
    }
    else if(val === "leo") {
        body.style.backgroundColor = "#009e49";
    }
    else if(val === "virgo") {
        body.style.backgroundColor = "#00b294";
    }
    else if(val === "libra") {
        body.style.backgroundColor = "#00bcf2";
    }
    else if(val === "scorpio") {
        body.style.backgroundColor = "#00188f";
    }
    else if(val === "capricorn") {
        body.style.backgroundColor = "#68217a";
    }
    else if(val === "pisces") {
        body.style.backgroundColor = "#ec008c";
    }
    else {
        body.style.backgroundColor = "#e81123";
    }
};

myBtn.onclick = changeBackground;