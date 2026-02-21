// Learning About "this" keyword.
// this refers to the object that calls a function ..

// Used in global scope 
// console.log(this); // in global scope this returns window object.

//----------------------------------------------------------------------

// // this used in function scope.
// function useOfThis() {
//     console.log(this); // Beacuse of the <default binding rule>, "this" inside a simple function call returns a window object
// }

// useOfThis(); // Simple function call.

// Simple example of this - in terms of a object method.
// in case of function called as a <method of an object> this refers to the object that is calling the function.

// const user = {
//     name: {
//         firstName: "Mohd",
//         middleName: "Ariz",
//         lastName: "Siddiqui",
//     },
//     age: 20,
//     greet: function () {
//         console.log(this); // {name{...}, age: 20, greet: f()} user object
//     },
// };

// user.greet(); // here "this" refers to the user object, all the key-values can be accessed by the "this". 

//---------------------------------------------------------------------------------------------

// how "this" depends on the caller..

// object 1-- Actual function stays in this object.
// const user1 = {
//     name: "Ariz",
//     greet: function () {
//         console.log(this.name);
//     }
// };

// Object 2 -- using this object to call the function.
// const user2 = {
//     name: "Rahul"
// };

// user2.greet = user1.greet; //creating new greet key in object user2 from first object and storing the method.

// user2.greet(); // calling from the object2 <user2>. 
// Output-- Rahul. // its clear that the value of this depends on who is calling not from where it is written.
// Eventhough the function was originally in <user1>.


// Important concept --

// const user = {
//     name: "Ariz",
//     greet: function () {
//         console.log(this.name);
//     }
// };

// const fn = user.greet; // we stored the greet function in the fn constant .
// fn(); // Calling the greet function. //Output -- empty. beacuse it is a simple function call, not a object method call.

// one more important thing...

// const person = {
//     name: "ariz",
//     greet: function () {
//         console.log(this); // we know that it will return the <person> object{}.
//     }
// };

// but....

// const hey = {
//     name: "ariz",
//     greet: function () {
//         function hello() {
//             console.log(this); // Here "this" again becomes window object.. 
//         }
//         hello();
//     },
// };
// hey.greet();
// we can say that the value of "this" 
// inside an ES5 function inside of a object method is again window{...} object

// but we can bypass this too.. 
// by creating a ES6 arrow function inside of a object method..

// const pagal = {
//     name: "Sahil",
//     greet: function () {
//         let helloBolo = () => {
//             console.log(this.name);
//         }
//         helloBolo();
//     }
// };
// pagal.greet(); //Output -> Sahil.
// So by usign the arrow function inside of the object method we can use the property of "this".

//-----------------------------------------------------------------------------------------

// This in event handlers -- in event handlers, "this" refers to the element that is handling the event.
// Example--

// let h1 = document.querySelector("h1");
// h1.addEventListener("click", function () {
//     console.log(this); // -> <h1>Hello World!</h1>
// });

// Practical Example--

// let h1 = document.querySelector("h1");
// h1.addEventListener("click", function () {
//     this.style.color = "red"; // turn the text of h1 into red colors.
// });

//-------------------------------------------------------------------

// Use "this" in a class... 
//  In a class the value of this is blank object.
// class Abcd {
//     constructor() { // Its a constructor .. it gets called automatically when the class is called.
//         console.log("Heyhey");
//         this.a = 12; // A blank object is created "Abcd{a:12}". 
//     }
// }

// let val = new Abcd(); // Creating the instance of the class.


// the value of "this"

// In global scope -- Window object{}
// In function(){} -- window object{}
// In method with ES5 function -- calling object{}
// In method with ES6 arrow function -- window object{}
// In ES5 function inside ES5 method -- window object{}
// In arrow function inside ES5 method -- Calling object{}
// event handler -- element itself
//  In class -- Blank object


//---------------------------
// Call, Apply and Bind
//--------------------------

// call() --> it invokes the function immediately and allows you to set the value of "is".

// example-- 
const user = {
    name: "Umar",
} // its a object that we will use in the function binding.

// function that will be called at the time of binding.
function Abcd() {
    console.log(this.name); // here we are accessing the value using the this from the user object
} Abcd.call(user); // the actual call will be here // here we have done the manual binding.
// the output is --> Umar.

// example 2 of call using extra arguments.

const person = {
    name: "Ariz",
};

function def(age, city) {
    console.log(this.name + age + city);
}

def.call(person, 21, "Delhi"); // output --> Umar21Delhi

//---------------------------------
// apply()
// it is same as the call() but it takes the extra arguments inside an array.
// the call and apply both gets immediately invoked. 
const fello = {
    name: "Ariz",
}

function something(age, city) {
    console.log(this.name + age + city);
}

something.apply(fello, [21, "Delhi"]);

//---------------------------------------------------------------

// bind() // it does not invoke the function immediately instead increates a binded copy of the function and later that copy can be stored in a variable and that variable can  be called.

const heyhey = {
    name: "Someone",
}

function kuchhkuch(age, city) {
    console.log(this.name + age + city);
}

let newFnc = kuchhkuch.bind(heyhey, 21, "Delhi"); // does not gets invoked.
newFnc(); // we called this function to actually call the binded function.