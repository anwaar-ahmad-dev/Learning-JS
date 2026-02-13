let select = document.querySelector("#colorSelect");
let container = document.querySelector(".container");


let savedColor = localStorage.getItem("bgColor");
if(savedColor){
    container.style.backgroundColor = savedColor;
}else{
    container.style.backgroundColor = "white";
}


select.addEventListener("change", function(e){
    let color = e.target.value;
    container.style.backgroundColor = color;
    localStorage.setItem("bgColor", color);
});
