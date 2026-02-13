// let box = document.querySelector(".box")
// let heading = box.querySelector("h1");
// heading.style.color = "green";
// heading.style.display = "none";

// box.style.color = "red";
// box.style.backgroundColor = "lightblue";
// box.style.height = "500px";
// box.style.width = "500px";
// box.style.border = "2px solid black";


// // classList.add()

// let box2 = document.querySelector(".box2");
// // box2.classList.add("temp"); 
// // box2.classList.remove("temp");
// box2.classList.toggle("temp");


// 

// let list = document.querySelector(".list");
// let lines = list.querySelectorAll("li");
// lines.forEach(val => console.log(val.textContent));


// let p = document.querySelector("p");
// p.innerHTML = "<b>Updated</b> by JavaScript";

// // Remove disabled attribute form the button

// let btn = document.querySelector("button");
// btn.removeAttribute("disabled");



// Create a new list item <li>new item </li> and add to the end of a <ul>

// let newitem = document.createElement("li");
// newitem.textContent = "Guava";
// document.querySelector(".list").appendChild(newitem)

// Create a new image element with a placeholder source and add it at the top of a div

let img = document.createElement("img");
img.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCmgkix4DEJoToCFKP-g8ztCYa9bIuxAC3pA&s");

document.querySelector(".box").prepend(img);

// Select the first item in a list and delete it form the DOM

// let list = document.querySelector(".list");
// let lis = list.querySelectorAll("li");
// list.removeChild(lis[0]);

//Add a highlight class to every even item in a list

let li = document.querySelectorAll("ul li:nth-child(2n)");
li.forEach(elem => elem.classList.add("highlight"));
