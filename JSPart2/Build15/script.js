let progress = document.querySelector("#progressFill");
let progressPercent = document.querySelector("#progressPercent");

let count = 0;
let seconds = 10;
let intervalID = setInterval(()=>{
    if (count <= 99){
        count++;
        progress.style.width = `${count}%`;
        progressPercent.textContent = `${count}%`;
    }
    else{
        document.querySelector("#statusText").textContent = "Downloaded.";
        clearInterval(intervalID);
        document.querySelector("#progressCard").style.background = "green";
    }
},(seconds*1000)/100);