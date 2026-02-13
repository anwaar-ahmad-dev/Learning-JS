let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");

form.addEventListener("submit",(dets)=>{
    dets.preventDefault();
    console.log(inputs[0].value);
}); 