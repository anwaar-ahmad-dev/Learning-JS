// data types 

// primitive -> aisi saari values jinko copy karne par tumhe real copy mil jaata hai.
// string, number, boolean, null, undefined, symbol, bigInt.

// reference -> inko copy karne par real copy nhi milti hai but tumhe reference milega parent ka. 
// arrays, objects, fuctions.


// there are three ways to create a string.
// '' -> single quotes.
// "" -> double quotes.
// `` -> backticks.

// "ariz" , 'ariz' , `ariz`

// ---Number---

// 12 - number
// 12.3 - number

// ---Booleans---

// true and false.
// let a = true;
// let b = false;

// ---null---

// aapne khud se koi value nhi di. 

// let selectedStudents = null;

// ---undefined---

// kisi variable ki default value agar ham use koi value na assign kare.

// let a; // the default value is undefined.

// ---symbol---

// unique immutable value

//future me jab ham koi libraries use karenge ab is case me un libraries me kayi baar kucch aisi fields hoti hai jinse similer ham bhi bana dete hai aur galti se hamari banai hui fields us library ki original files ko change kar deti hai.

// let u1 = Symbol("uid");
// let u2 = Symbol("uid");

// here both looks same but they are not as they are different symbols.

// ---bigInt---
// taking bigger values than integer.

// let a = 9007199254740991n;

// a = a+12n;

// ------------------- reference types --------------

// ----array----

// let a = [1, 2, 3]
// let b = a;

// b.pop() // it will change the actual value from a. 

// // ----object----

// let obj = {
//     name: "ariz"
// }

// let obj1 = obj;
// obj1.name = "ariz1"; // it will also gets changed in obj


// typeof quirks -> to check the type of the number.

// typeof "ariz" //string 
// typeof 12    //number.
// typeof null  //object
// typeof NaN  // number 

// type coercion (== vs ===)

// concept jisme ek type automatically doosre type me convrt ho jata hai.
// "5" + 1 ; (it gets Concatinated) -> it becomes "51".
// it is possible in JS. 

// "5" - 1 -> 4 (here 4 is a number)


// ------------- Truthy and falsy value.-------------------

// 0, false, "", undefined, NaN(Not a Number), document.all
// all these things return false value.
// apart form these all other are true

// to check true or false state of value
// !!0 -> false
// !!"" -> false


// Example -> if(null) {
//                              the value in if will be treated as false coz null returns false.
//              }


// Why NaN is a number?
// so if we check the typeof NaN -> number  (but NaN means not a number so How????????)

// so basically NaN is a failed number operation is JS.
// Eg --> 2*"Ariz" -> NaN (A mathematical operation that is not possible) 
// 2*"Ariz"  its a failed mathematical operation.


