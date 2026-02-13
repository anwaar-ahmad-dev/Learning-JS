let main = document.querySelector(".container");

window.addEventListener("mousemove",(dets)=>{
    let circle = document.createElement("div");
    circle.classList.add("circle");
    circle.style.top = dets.pageY + "px";
    circle.style.left = dets.pageX + "px";
    main.appendChild(circle);

    setTimeout(()=>{
        circle.remove();
    }, 300);
});