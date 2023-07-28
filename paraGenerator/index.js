const input = document.getElementById("numberWords");
const myBtn = document.getElementById("myBtn");
const container = document.querySelector(".container");

const generateWord = (n)=> {
    let text = "";
    const letters = "ABC DEDF GabcdefgHIJKLMNh ijklmnOPQRST UopqurstuV WXYZvwxyz";

    for(let i = 0; i<n; i++) {
        const random = (Math.random() * (letters.length - 1)).toFixed(0);
        text += letters[random];
    }

    return text;
};

let numOfWords;
const generatePara = ()=> {
    numOfWords = Number(input.value);

    const p = document.createElement("p");

    let data = "";
    for(let i = 0; i<numOfWords; i++) {
        const randomNumber = (Math.random() * 10).toFixed(0); 
        data += generateWord(randomNumber);
        data += " ";
    }

    p.textContent = data;
    container.append(p);
    
    p.setAttribute("class", "paras");
};


const deletePara = ()=> {
    const para = document.querySelector("p");
    para.remove();
};


myBtn.onclick = generatePara;
myBtn2.onclick = deletePara;
console.log(numOfWords); 