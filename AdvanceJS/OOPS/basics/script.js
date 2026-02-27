// OOPS in javascript. 
// first lets understand what is reusability of components.


// this here is a constructor function..
// the first letter of the name of a constructor function has to be in capital letters..


// function CreatePencil(name, price, color) {
//     this.name = name;
//     this.price = price;
//     this.color = color;
//     // this.company = company; // instead of this we are using a prototype.
//     this.write = function (text) {
//         let h1 = document.createElement("h1");
//         h1.textContent = text;
//         h1.style.color = color;
//         document.body.appendChild(h1);
//     };
// }

// here we are creating a prototype for the instances..
// CreatePencil.prototype.company = "Ariz's company";

// here for pencil1 object is created by the new keyword and this object consists of all the fields that are in the CreatePencil function.....
// let pencil1 = new CreatePencil("Natraj", 10, "black");

// same happens with the pencil2.. object is created with all the properties in it.
// let pencil2 = new CreatePencil("Doms", 10, "red");

// now we can call the method inside the object..
// pencil1.write("Hey how are you?"); // A heading withe the text in black color is created in the body


// prototypes...
// so if the constructor function attaches a field to its {{prototype}} , then all the instances or objects will have that field to them automatically ...
// it provides a shared a memory space for all the instances for the similer field./
// it removes the need for taking memory again and again for different instances..

// taking the above example..
// how to access-->
// console.log(pencil1.company);

// actual use case of the prototype.
function CreatePencil(name, price, color, company) {
    this.name = name;
    this.price = price;
    this.color = color;
    this.company = company;
}

// here we are taking the write function as the prototype.
CreatePencil.prototype.write = function (text) {
    let h1 = document.createElement("h1");
    h1.textContent = text;
    h1.style.color = this.color; // referring to the object.
    document.body.appendChild(h1);
};

let pencil1 = new CreatePencil("Natraj", 10, "black", "natraj");
let pencil2 = new CreatePencil("Doms", 10, "red", "doms");

// accessing the write function...
pencil1.write("Hey kaise ho?")// uisng the pencil1 instance.
pencil2.write("Mai badhiya hu..!")// uisng the pencil2 instance.
