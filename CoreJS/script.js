// var ,let const - line-by-line comparison
// Diclaraton and initialization

// var a; // Declaration
// var a = 12; // declare and initialize
// this does not cause any error.

// var window me add hota hai. 
// var function scoped hota hai. 
// var firse diclare kar sakte ho same name se aur error nhi aaega.

// let a = 12;
// let a = 12;
// This causes error.

const dulha = "lab";
const dulhan = "laby";
// these value cannot be changed coz they are constant.

// global scoped variable -- accessed in whole code.
// functional scoped -- accessed in the function.
//  block scoped -- accessed only within the block. 
// { 
    // let a = 12;
// }

// TDZ(Temporal Dead Zone)-- utna area jitne me JS ko pta to hai ki variable exist karta hai par aapko value nhi de sakta hai.


// console.log(a);

// let a = 12;

// here in other programming languages it says a is not defined 
// but in JS it says " Cannot access 'a' before initialization ".
// so it knows that a is created.
// but var does not have any TDZ.


// Hoisting impact per type
// Hoisting -> ek variable ko jab js me banate hai to wo variable do hisso me toot jata hai and uska declare part upar chala jata hai aur uska initialization part neeche reh jata hai .....

var a = 12; // this breaks into....

var a = undefined;// ye part upar chala jaata hai 

// yha beech me temporal dead zone hota hai.

a = 12;