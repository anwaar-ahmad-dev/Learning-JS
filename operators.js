12 == 13 // false
12 == 12 // true
12 == "12" // true (but it should be false coz one is string and other is number)
== // is less strict.

12 === "12" //false // More strict


//------------- Ternary Operator----------

//  condition ? <Code if the condition is true> : <Code is the conditions is false>

// 12>13 ? console.log("True") : console.log("False")

// typeof and instanceof

// typeof 12 // ---> Number
// typeof "Ariz" //---> String

// quirks in typeof.
// type of shows wrong types of some values 
// 1-- typeof null --> object
// 2-- typeof array --> object
// 3-- typeof NaN --> number

//-------- Instanceof---------
// it checks if the variable you are checking is of the identity that you are chekcking it with.

// let a = [];
// a instanceof Array;
// true.

// it only works with reference datatypes(array, object, function)

// Example 1

let x = 10;
let y = 20;

if (x > 5 && y < 25) {
    console.log("A");
}
else {
    console.log("B");
}

// Example 2

let isAdmin = true;
let isLoggedIn = false;

if (isAdmin || isLoggedIn){
    console.log("Access granted");
}
else{
    console.log("Access denied")
}

// Example 3

let temp = 35;

if (!(temp < 30)){
    console.log("Hot");
}
else{
    console.log("pleasant");
}

// Example 4

let a = 0;

if (a) {
    console.log("truthy");
}
else{
    console.log("falsy");
}

// example 5

let score = 95;

let grade = score >= 90 ? "A" : score >= 75 ? "B" : score >= 60 ? "C" : "Fail";

console.log(grade);

// Example 6

let points = 120;

let status = points > 90 ? "Gold" : points > 50 ? "Silver" : "Bronze";
console.log(status);

// Example 7

let loggedIn = true;
let hasToken = false;

let access = loggedIn && hasToken ? "Allowed" : "Deny";

console.log(access)