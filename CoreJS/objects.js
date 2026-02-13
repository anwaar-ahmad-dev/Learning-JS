// objects  in JS 

// let obj = {
//     name: "ariz",
//     age: 20,
//     "is Student": true, // connot be accesed by Dot notation.
//     cource: "CSE"
// };

// let key = "cource";

// console.log(obj.name); // Dot Notation
// console.log(obj["age"]); // Bracket Notation
// console.log(obj["is Student"]); // Bracket Notation
// console.log(obj[key]); // Accessing by a Variable


// Nesting
// let user = {
//     name: "ariz",
//     address: {
//         city: "Raebareli",
//         pin: 229206,
//         location: {
//             lat: 23.2,
//             lng: 77.4
//         },
//     },
// };

// console.log(user.address.location.lng); // Deep Access

//----------------- Destructuring --------------

// const {lat,lng} = user.address.location;
// console.log(lat);
// console.log(lng);
//--------------------------------------------

// const {
//     address :{
//         location: {lat,lng}
//     }
// } = user;

// console.log(lat);

// Destructuring with different variable name------------------ 

// const {lat : latitude, lng: longitude} = user.address.location;
// console.log(latitude);


//-------------------------------------------------------------

//  Extract name and age from the object.
// const person = {
//     name: "Ariz",
//     age: 20,
//     city:"Raebareli"
// };

// let {name, age} = person;
// console.log(name, age);

// Extract City and store it in a variable named -- Location

// const user = {
//     username: "admin",
//     city: "Lucknow",
// };
// let  {city: location} = user;
// console.log(location);

// Destructure email with default value

// const account = {id: 101, username: "ariz", email:"ariz@gmail.com"};
// const {email = "not provided"} = account;
// console.log(email);

// Destrucuture pincode from a nested object

// const data = {
//     address:{
//         city: "Mumbai",
//         pincode: 400001,
//     },
// };

// const {
//     address:{
//         pincode,
//     },
// } = data;

// console.log(pincode);

// pass object values as function parameters 

// const obj1 = {name: "ariz", age:20};
// const obj2 = {city: "Raebareli", pincode: 229206};

// function getValues({name, age},{city,pincode}){
//     console.log(name, age, city, pincode);
// }
// getValues(obj1, obj2);

//------------------------------------------------------

// Looping on Objects
// for-in , Object.keys() , Object.entries()
// for-in 

// const person = {
//     name: "Ariz",
//     age: 20,
//     city: "Raebareli"
// };
// for(let keys in person){
//     console.log(keys, person[keys]);
// }

// Object.keys()
// Object.keys(person).forEach(key => console.log(key, person[key]));

// Object.entries()

// console.log(Object.entries(person));

// for(const [key, value] of Object.entries(person)){
//     console.log(key, value);
// } 

// using Object.keys() count the number of keys in the object 

// const student = {
//     name: "ariz",
//     rollNo: 15,
//     cource: "CSE",
//     city: "Lucknow",
//     // pinCode: 229206,
// }
// let result = Object.keys(student).length;
// console.log(result);

// Print only those keys which are Number
// Object.keys(student).forEach(key => {
//     if (typeof student[key] === "number"){
//         console.log(key);
//     }
// });


// Printing keys and values using Object.entries()

// Object.entries(student).forEach(([key, value])=> {
//     console.log(key ,value);
// });

// print only values 
// Object.entries(student).forEach(([_, value]) => {
//     console.log(value);
// });

// convert object into array of key : value strings

// let result = Object.entries(student).map(([key, value]) => `${key} : ${value}`);
// console.log(result);

//................... Spread Operator............................

// const users = {
//     name: "ariz",
//     age: 20,
//     email: "test@test.com"
// };

// const copy = {...users};
// console.log(copy);

//.................. Object.assign()............................

// const users = {
//     name: "ariz",
//     age: 20,
//     email: "test@test.com",
//     address: {city: "Raebareli"},
// };

// const person = {
//     salary: 20000,
//     adress: "lucknow",
// };

// const copy = Object.assign({price: "Bhot Saara"}, users, person);
// console.log(copy);

// .........................Deep copy......................

// Method 1

// const copy = JSON.parse(JSON.stringify(users));
// copy.address.city = "Lucknow";

// Method 2

// const copy = structuredClone(users);

// const users = {
//     name: "ariz",
//     age: 20,
//     email: "test@test.com",
//     address: {city: "Raebareli"},
// };

// console.log(users.addresses.city);  // Throws and error 
// console.log(users.addresses?.city); // returns undefind 
// console.log(users.address?.pincode); // there is no pincode so it returns undefined

// computed Properties 

// const role = "admin";

// const users = {
//     name: "ariz",
//     age: 20,
//     email: "test@test.com",
//     address: {city: "Raebareli"},
//     [role]: "Anwaar",
// };

// console.log(users.admin); // Anwaar

// using expressions 

// const suffix = "Name";

// const person = {
//     ["first" + suffix]: "Ariz",
//     ["last" + suffix]: "Siddiqui",
// };

// console.log(person.firstName);
// console.log(person.lastName);


// Computer properties with functions 

let createObj = (prop, value)=>{
    return {
        name: "ariz",
        [prop] :value,
    };
};
console.log(createObj("city", "Raebareli"));

