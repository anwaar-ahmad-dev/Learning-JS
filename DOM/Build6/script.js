let card = document.querySelector(".card");

window.addEventListener("mousemove",(dets)=>{
    card.textContent = `X : ${dets.pageX} , Y : ${dets.pageY}`;
});