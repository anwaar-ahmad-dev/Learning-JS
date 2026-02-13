let formulaOne = document.querySelector("#formula-one");
let card =  document.querySelector(".card");

formulaOne.addEventListener("mouseover",(dets)=>{
    formulaOne.style.color = "white";
    formulaOne.style.cursor = "pointer";
    card.style.display = "block";
    card.style.left = dets.pageX + "px";
    card.style.top = dets.pagey + "px";
});

formulaOne.addEventListener("mouseout",()=>{
    formulaOne.style.color = "black";
    card.style.display = "none";
});
