// // Event listeners

// let btn = document.querySelector("button");
// btn.addEventListener("click", ()=>{
//     console.log("Button Clicked");
//     document.querySelector("body").style.backgroundColor = "red";
// });



// // Adding and removing event listener 

// let heading = document.querySelector("#inputHeading");
// function handleClick(){
//     heading.style.color = "green";
// }
// heading.addEventListener("click", handleClick);
// // heading.removeEventListener("click", handleClick)

// // Input event.
// let nameInput = document.querySelector(".name");
// nameInput.addEventListener("input", (value)=>{
//     // console.log(value.data);// instead of this ....
//     if (value.data !== null){
//         heading.textContent = `Hello its me ${value.data}` // this method does not print <null> .
//     }
// });

// // Change event.

// let device = document.querySelector("#device");
// let deviceHeading = document.querySelector("#heading");

// device.addEventListener("change", (dets)=>{
//     deviceHeading.textContent = `${dets.target.value} Device Selected`;
// });

// // change event in radio 

// let genderHeading = document.querySelector("#gender");
// let genderRadio = document.querySelectorAll(".gender");
// genderRadio.forEach(radio => {
//     radio.addEventListener("change", (dits)=> genderHeading.textContent = `${dits.target.value} is selected`)
// });


// Event Bubbling

// let box = document.querySelector(".box");
// box.addEventListener("click", ()=>{
//     window.alert("Clicked");
// });

// Event capturing 

// let a = document.querySelector(".a");
// let b = document.querySelector(".b");
// let c = document.querySelector(".c");

// let btn = document.querySelector("button");

// btn.addEventListener("click", ()=> console.log("button Clicked."));
// a.addEventListener("click", ()=> console.log("a Clicked."),true); // Event Capturing activated
// b.addEventListener("click", ()=> console.log("b Clicked."));
// c.addEventListener("click", ()=> console.log("c Clicked."));


// event delegation 

let inp = document.querySelector("input");
let span = document.querySelector("span");

inp.addEventListener("input", ()=>{
    let left = 20 - inp.value.length;
    span.textContent = left

    left < 0 ? span.style.color = "red" : span.style.color = "black";
});