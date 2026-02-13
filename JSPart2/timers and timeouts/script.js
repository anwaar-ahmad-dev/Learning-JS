// ------------setTimeout()------------------

// const timeoutID = setTimeout(()=>{
//     console.log("Hello")
// },5000);


// ---------------setInterval()----------------
// const intervalID = setInterval(()=>{
//     console.log("hello");
// },3000);


// counting from 10 - 0 using setInterval.
// let count = 10;
// let intervalID = setInterval(()=>{
//     if (count >= 0){
//         console.log(count);
//         count--;
//     }
//     else clearInterval(intervalID)
// },1000);




// setInterval(() => {
//     let color = "#000000".replace(/0/g, function(){
//         return (~~(Math.random() * 16)).toString(16);
//     });
//     document.querySelector("body").style.background = color;
// }, 2000);

let h1 = document.querySelector("h1");

let counter = 0;
let intervalId = setInterval(() => {
    if (counter <= 2) {
        counter++;
        let span = document.createElement("span");
        span.textContent = " .";
        h1.appendChild(span);
    }
    if (counter === 3){
        // let spans = document.querySelectorAll();
        // spans.forEach((s)=>{
        //     h1.removeChild(s);
        // });
        // counter = 0;
        // h1.removeChild(span);
    }
}, 1000);