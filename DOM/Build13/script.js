let inputBox = document.querySelector('input[name = "number"]');
let startbutton = document.querySelector(".start");
let stopbutton = document.querySelector(".stop");
let resetbutton = document.querySelector(".reset");
let secondSpan = document.querySelector("#secondsSpan");
let minuteSpan = document.querySelector("#minutesSpan");



let seconds = 0;
let intervalId = null;
let isRunning = false;
// let secondsCounter = 60;
startbutton.addEventListener("click", () => {
    if (inputBox.value.trim() !== "" && !isRunning) {

        seconds = Number(inputBox.value) * 60; // total seconds

        intervalId = setInterval(() => {

            if (seconds <= 0) {
                clearInterval(intervalId);
                isRunning = false;
                return;
            }

            seconds--;

            let minutes = Math.floor(seconds / 60);
            let remainingSeconds = seconds % 60;

            minuteSpan.textContent = String(minutes).padStart(2, "0");
            secondSpan.textContent = String(remainingSeconds).padStart(2, "0");

        }, 1000);

        isRunning = true;
    }
});


stopbutton.addEventListener("click", () => {
    if (isRunning) {
        clearInterval(intervalId);
        isRunning = false;
    }
});

resetbutton.addEventListener("click", () => {
    clearInterval(intervalId);
    isRunning = false;
    secondsCounter = 60;
    secondSpan.textContent = "00";
    minuteSpan.textContent = inputBox.value;
    inputBox.value = "";
});