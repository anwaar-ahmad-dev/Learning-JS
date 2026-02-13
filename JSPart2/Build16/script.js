let progress = 0; // example
let circle = document.querySelector("#circle");
let second = 10;

let intervalID = setInterval(() => {
    if (progress <= 99) {
        progress++;
        circle.style.background = `conic-gradient( #6ea8ff ${progress * 3.6}deg, #2c2c2c 0deg)`;
        document.getElementById("percentageText").textContent = `${progress}%`;
    }
    else {
        document.querySelector("#downloadText").textContent = "Downloaded ✔";
        document.querySelector("#downloadText").style.color = "green";
        clearInterval(intervalID);
    }
}, (second * 1000) / 100);



