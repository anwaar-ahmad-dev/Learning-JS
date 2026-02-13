// PRACTICE OF OPERATORS

// ternary operator

// 12<13 ? console.log("True"):console.log("false")

// let x = 10;
// let y = 20;
// if (x > 5 && y < 25) {
//     console.log("A");
// }
// else {
//     console.log("B");
// }

// let num = 30;
// if (num < 50 && num > 20) {
//         console.log("In Between");
// }

// let username = true;
// let password = true;

// if(username && password){
//     console.log("Login Successful");
// }
// else{
//     console.log("Login Denied");
// }

// --------Ternary Operator------

// let a = 40;
// let b = 20;
// let c = 30;
// a > b && a > c ? console.log("A is greater") : b > a && b > c ? console.log("B is greater") : console.log("C is greater")

// control_floe questions.

// Write a program that prints A, B, C, D, or F based on marks

// let marks = 65;

// if (marks <= 100 && marks >= 90){
//     console.log("A");
// }
// else if (marks <= 89 && marks >= 80){
//     console.log("B");
// }
// else if (marks <= 79 && marks >= 70){
//     console.log("C");
// }
// else if (marks <= 69 && marks >= 60){
//     console.log("D");
// }

// function checkGrade(score) {
//     if (score >= 90 && score <= 100) return "A";
//     if (score >= 89 && score <= 90) return "B";
// }

// console.log(checkGrade(89));

// Rock,Paper Scissors

// function rps(user, computer) {
//     if (user === computer) return "Draw";
//     if (user === "rock" && computer === "scissors") return "User wins";
//     if (user === "paper" && computer === "rock") return "User wins";
//     if (user === "scissors" && computer === "paper") return "User wins";
//     return "Computer Wins";
// }

// console.log(rps("rock", "scissors"));

// Progrm to check if a number is positive negative or zero

// let num = '#';
// if (num > 0) {
//     console.log("Positive");
// }
// else if (num<0){
//     console.log("Negative");
// }
// else if(num === 0){
//     console.log("Zero");
// }
// else{
//     console.log("Invalid Number");
// }

// Leap Year

// let year = 2020;
// if(year%4===0){
//     console.log("Leap Year");
// }

// Bill Calculator
// First 100 units -> per unit -> 5Rs
// Next 100 units -> per unit -> 7Rs(Above 100)
// Next 100 units -> per unit -> 10Rs(Above 200)
// Next 100 units -> per unit -> 15Rs(Above 300)

// let units = 380;
// let remaining = 0;
// let total_amount = 0;

// if (units >= 100){

// }
// else{
//     console.log
// }


// for(let char in "Hello World"){
//     console.log(char);
// }

// let arr = ['a', 'b', 'c', 'd', 'e', 'f'];
// for (let values of arr) {
//     console.log(values);
// }

// let user = {name:"Harsh",age:26};
// for(let key in user) {
//     console.log(key, user[key]);
// }

// print even numbers from 1 to 20 using for loop 

// for (let i = 1; i<=20; i++){
//     if (i%2===0){
//         console.log(i);
//     }
// }

// print even numbers from 1 to 20 using while loop 

// let i = 1;
// while (i <= 20) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
//     i++;
// }

// find the sum of the numbers from 1 to 100 using a loop.

// let sum = 0;
// for(let i = 0; i<=100; i++){
//     sum = sum+i;
// }
// console.log(sum);
// let i = 0;
// while(i<=100){
//     sum = sum+i;
//     i++;
// }
// console.log(sum);

// print all numbers that are are divisible by 3 between 1 to 50.
// for(let i = 1; i<=50; i++){
//     if (i%3===0){
//         console.log(i);
//     }
// }
// let i = 1;
// while(i<=50){
//     if(i%3===0){
//         console.log(i);
//     }
//     i++;
// }

// ask the user for a number and print whether each number from 1 to that number is even or odd

// let num = prompt("Enter a number");
// for(let i = 1; i<=num; i++){
//     if(i%2===0){
//         console.log(`${i} Even`);
//     }
//     else{
//         console.log(`${i}Odd`);
//     }
// }

// print factorial of a number

// let num = prompt("Enter a number");
// let fact = 1;
// for (let i = num; i >= 1; i--) {
//     fact = fact * i;
// }
// console.log(fact);


// to check if the number is prime or not.

// let num = prompt("Enter a number");
// let count = 0;
// for (let i = 1; i <= num; i++) {
//     if (num % i === 0) {
//         count++;
//     }
// }
// count === 2 ? console.log(`${num} is prime`) : console.log(`${num} is not Prime`);

// Program to check all the prime numbers from 1 to 100

// for (let i = 2; i <= 100; i++) {
//     if(i%2===0){
//         continue;
//     }
//     let count = 0;
//     for (let j = 1; j <= i; j++) {
//         if (i % j === 0) {
//             count++;
//         }
//     }
//     if (count === 2) {
//         console.log(i);
//     }
// }

// Default , rest and spread parameters

// Default Parameters.

// let add = (value1 = 0, value2 = 0) => {
//     return value1 + value2;
// };
// console.log(add());

// Rest 
// let abcd = (...val)=>{
//     console.log(val);
// };
// abcd(1,2,3,4,5,6);

// let abcd = (a,b,c,...val)=>{
//     console.log(a,b,c,val);
// };
// abcd(1,2,3,4,5,6);


//  FIRST CLASS FUNCTIONS 

// Function assigned to a varible

// let abcd = function(){
//     console.log("hey");
// };
// abcd();

//  Function passed as an Argument

// function def(val){
//     val();
// }
// def(function(){
//     console.log("Hey Hey");
// });

// Returned form other function

// function fgh() {
//     return function () {
//         console.log("Hey hey hey");
//         return function () {
//             console.log("Hey");
//         }
//     };
// }

// fgh()()(); // prints {Hey hey hey} and also {Hey}


// Example :-

// function upperCase(msg){
//     return msg.toUpperCase();
// }
// function takeIt(fn){
//     console.log(fn("hello"));
// }
// takeIt(upperCase);

// Higher order functions 

// Takes function as argument
// function abcd(val) {
//     console.log("Main waala function");
//     val();
// }

// abcd(function () {
//     console.log("Argument waala function");
// });

// Returns function as an argument
// function def(){
//     return function(){
//         console.log("Return waala function");
//     }
// }
// def()(); // Called twice to invoke both main function and the returned function 

// Example----

// function abcd(value1){
//     return function(value2){
//         return value1*value2;
//     }
// }
// console.log(abcd(5)(5));

// let main = abcd(5);
// console.log(main(5));

// (function(){
//     console.log("IIFE Executed");
// })();

// Hoisting in function declation and expression.

// abcd(); // Is accessed.
// function abcd(){
//     console.log("Function declaration/Statement");
// }


// defg(); // Cannot access before initialization.
// let defg = function(){
//     console.log("Function exprression");
// }

// Closure Example

// function abcd() {
//     let count = 0;
//     return function () {
//         count++;
//         console.log(count);
//     }
// }
// let counter = abcd();
// counter(); // remebers count even after abcd() is finished executing.
// counter();
// counter();

//  Closure Example

// function initialize(name) {
//     let u_name = name;
//     return function () {
//         console.log("Hello " + u_name);
//     }
// }

// let greet = initialize("Ariz");
// greet();

//  Closure Example
// function test(){
//     let a = 5;
//     return function(){
//         a = a+2;
//         console.log(a);
//     }
// }
// let result = test();
// result(); // 7
// result(); // 9 It remebers the previous value of the variable although the test() is finished executing
//-----------------------------------------------------------
// for (let i = 1; i <= 3; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, 1000);
// }
//---------------------------------------
// let x = 100;
// function check(){
//     let x = 50;
//     return function(){
//         console.log(x);
//     }
// }
// check()();

//----------------------------------------------

// function makeAdder(x) {
//     return function (y) {
//         return x + y;
//     };
// }
// console.log(makeAdder(5)(3));
//--------------------------------------------------------
// function outer() {
//     let x = 5;
//     function inner() {
//         x++;
//         console.log(x);
//     }
//     return inner;
// }

// let fn1 = outer();
// let fn2 = outer();
// let fn3 = outer();

// fn1();
// fn1();
// // fn2();
// fn3();
// fn3();

//----------------------------------------
// function getScore(...score){
//     let total = 0;
//     score.forEach(function(val){
//         total = total+val;
//     });
//     return total;
// }

// console.log(getScore(10,20,30,40));

// Make a toUpperCase transformer using HOF

// function transformer(value){
//     return function(){
//         console.log(value.toUpperCase());
//     }
// }
// const transform = transformer("hello");
// transform();

// function transformer(value){
//     return value.toUpperCase();
// }
// function showMessage(fnc){
//     console.log(fnc("hello"));
// }

// showMessage(transformer);


// function discountCalculator(discount) {
//     return function (price) {
//         return price - price * (discount / 100);
//     }
// }

// let ten = discountCalculator(10);
// let twenty = discountCalculator(20);
// console.log(ten(100));
// console.log(twenty(100));
