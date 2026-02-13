// function practice

// what is the difference between function declaration and expression in terms of hoisting?

/*abcd();

function abcd(){
    console.log("hello");
}*/
// its funnction expression and it will work for this because it is fully hoisted.

//---------------------------------------------------------------------------------------------
/*
abcd(); // error - cannot access abcd before initialization.

let abcd = function(){  // fuction expression.
    console.log("hey"); 
}
*/
//---------------------------------------------------------------------------------------------

// convert this function into an arrow function.
/*
function multiply(a, b){
    return a * b;
}

let multiply = (a, b) => {
    return a * b;
};
*/
//---------------------------------------------------------------------------------------------

// predict the output
/*
function sayHi(name = "Guest"){
    console.log("Hi", name);
}
sayHi(); // Hi Guest
*/
//---------------------------------------------------------------------------------------------

// use the rest parameter to accept any number of scores and return the total.
/*
function getScore(...scores){
    let total = 0;
    scores.forEach(function (val){
        total = total+val;
    });
    return total;
}

console.log(getScore(10, 12, 14, 18));
*/
//---------------------------------------------------------------------------------------------

// fix this function using early return.
/*
function checkAge(age) {
    if (age < 18) return "Too Young";
    return "Allowed";
}

console.log(checkAge(23));
*/
//---------------------------------------------------------------------------------------------

// what does it mean when we say functions are "First class citizens" ?

// functions can be treated as values.

//---------------------------------------------------------------------------------------------

// pass a function to another function and execute it inside.
/*
function abcd(val){
    val();
}

abcd(function(){
    console.log("Hey");
});
*/
// what is a closure? When it is created?
// what will below function return?

// question 1
/*
function outer(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    };
}
const counter = outer();
counter();
counter();
*/
// question 2
/*
function outer(){
    let count = 0;
    function inner(){
        count++;
        console.log(count);
    }
    return inner;
}

const fn = outer();
fn();
fn();
fn();
*/

// question 3

// function createMessage(msg){
//     return function(){
//         console.log("message: ",msg);
//     };
// }

// const sayHi = createMessage("Hi");
// const sayBye = createMessage("Bye");

// sayHi();
// sayBye();

// question 4

function outer() {
    let x = 10;
    return function inner() {
        let y = 5;
        console.log(x + y);
    }
}
const fn = outer();
fn();

// Create a pure function to transform a value.

