let btn = document.querySelector("#downloadBtn");


let spanCount = 10;
let seconds = 10;
let progressCount = 0;
btn.addEventListener("click", () => {
    let intervalID = setInterval(() => {
        if (spanCount >= 1) {
            spanCount--;
            document.querySelector("#countValue").textContent = spanCount;
        }
        else {
            document.querySelector("#countdownText").textContent = "Downloading started.";
            clearInterval(intervalID);
        }
    }, 1000);

    setTimeout(() => {
        let progressInterval = setInterval(() => {
            if (progressCount <= 99) {
                progressCount++;
                document.querySelector("#progressFill").style.width = `${progressCount}%`;
                document.querySelector("#progressPercent").textContent = `${progressCount}%`;
            }
            else {
                document.querySelector("#progressTitle").textContent = "Downloaded.";
                clearInterval(progressInterval);
            }
        }, (10 * 1000) / 100);
    }, 11000);


});