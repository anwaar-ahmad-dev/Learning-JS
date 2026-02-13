// let h1 = document.createElement("h1");
// h1.textContent = "Hey this is dynamic h1 tag.";
// document.body.prepend(h1);

// 

// let h1 = document.createElement("h1")
// h1.textContent = "mai js se aaya hu div ke andar";

// document.querySelector("#div1").append(h1);


// Adding multiple elements at once

// let para = document.createElement("p");
// para.textContent = "hey this is JS para";

let para2 = document.createElement("p").textContent = "JS para 2";

document.querySelector("#div2").append(
    document.createElement("p").textContent = "hey this is JS para"
);

// appendChild()
let heading = document.createElement("h1");
heading.textContent = "Added inside div 3 by JS";
document.querySelector("#div3").appendChild(heading);

// removeChile()
let parent = document.querySelector("#div1");
let child = parent.querySelectorAll("h1");
parent.removeChild(child[1]);

