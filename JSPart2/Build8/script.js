let button = document.querySelector("button");
let main = document.querySelector(".main");

let colors = [
    "#0F172A",
    "#1E293B",
    "#334155",
    "#3B82F6",
    "#22C55E",
    "#F59E0B",
    "#EF4444",
    "#A855F7"
];

// colors.forEach((color)=>{
//     button.addEventListener("click", ()=>{
//         main.style.backgroundColor = color;
//     });
// });

let counter = 0;

button.addEventListener("click", () => {
    main.style.backgroundColor = colors[counter];
    counter++;

    if (counter === colors.length){
        counter = 0;
    }
});