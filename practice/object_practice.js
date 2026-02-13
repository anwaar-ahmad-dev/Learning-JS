// Object practice
// Question 1
// const user = {
//     name: "ariz",
//     address: {
//         city: "Lucknow",
//         zip: 229306,
//     },
// };
// console.log(user.address.city); // Access the user's city
// user.address.zip = "00000"; // change the zip 
// user.country = "India"; // add new element 
// // adding element dynamically
// let key = "isAdmin";
// user[key] = true;

// Question 2

// const product = {
//     title: "laptop",
//     price: 55000,
//     brand: "HP",
// };

// const {title, price: cost} = product; // extract title and price(price as cost)
// console.log(title);// title 
// console.log(cost);// cost(price)

// Question 3 
// Write a function that accepts an object and prints
// "Hello Ariz, your role is Developer"

// const person = {
//     name: "Ariz",
//     role: "Developer",
// }
// let greet = ({ name, role }) => {
//     console.log(`Hello ${name}, your role is ${role}`);
// };
// greet(person);

// Question 4 
// using Object.keys()--- count total properties, print all keys in upppercase
// const car = {
//     brand: "Toyota",
//     model: "Fortuner",
//     year: 2023,
// };
// let totalKeys = Object.keys(car).length; 
// Object.keys(car).forEach(key => console.log(key.toUpperCase()));

// Question 5
// Object.entries()

// Object.entries(car).forEach(([Key, value])=> {console.log(Key+":"+value)});

// Question 6
// create an object where key is dynamic.

// let createField = (key, value)=> {
//     return {
//         [key]: value,
//     }
// };
// console.log(createField("email", "test@test.com"));

// Question 7 
// spread operator 
// const user = {
//     name: "ariz",
//     age: 20,
// };

// const newUser = {status:"Active", ...user};
// console.log(newUser);

// Question 8
// Merge two arrays into one 

// const personal = {name: "Ariz"};
// const professional = {role: "Intern", domain: "WebDev"};
// const person = {...personal, ...professional};
// console.log(person);

// Question 9
// optional chaining 
// const user = {
//     profile: {
//         github: "ariz-dev",
//     },
// };

// console.log(user?.profile?.linkedin);// undefined

// Question 11 
// const students = [
//     { name: "Aman", marks: 75 },
//     { name: "Ariz", marks: 92 },
//     { name: "Ravi", marks: 85 }
// ];

// students.forEach(keys => {
//     if(keys.marks > 80){
//         console.log(keys.name);
//     }
// });

// Question 12
// remove password property
const user = {
    name: "ariz",
    password: 12345,
}

// delete user.passowrd;
// console.log(user);

// console.log("password" in user);
console.log(user.hasOwnProperty("name"));
