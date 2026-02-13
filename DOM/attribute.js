let a = document.querySelector("a");
a.setAttribute("href", "https://www.google.com");


// Defining attributes of Button
let input = document.querySelector("input");
input.setAttribute("type", "button");
input.setAttribute("value", "Click Me");

// Uploading Image

let image = document.querySelector("img");
image.setAttribute("src", "https://images.unsplash.com/photo-1767081476096-350e18758625?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D");

// getting the values of an element by using the getAttribute

let youtube = document.querySelector("#youtube");
// console.log(youtube.getAttribute("href"));


// Remove Atrribute.
youtube.removeAttribute("href");

