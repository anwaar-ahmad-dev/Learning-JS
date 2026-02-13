// print numbers from 1 to 10 using a for loop

// for(let i = 1; i<11; i++){
//     console.log(i);
// }

// print numbers form 10 to 1 using while loop

// let i = 10;
// while(i>0){
//     console.log(i);
//     i--;
// }

// print even numbers from 1 to 20 using for loop 

// for(let i = 1; i<21; i++){
//     if (i%2 === 0) {
//         console.log(i);
//     }
// }

// print odd numbers from 1 to 15 using while loop

// let i = 1;
// while(i<16){
//     if(i%2 === 1){
//         console.log(i);
//     }
//     i++;
// }

// print the multiplication table of 5 (i.e.-- 5X1 = 5......5X10 = 50)

// for(let i = 1; i<11; i++){
//     let tab = 5*i;
//     console.log(`5 X ${i} = ${tab}`);
// }

//--------------------------------------------------------------------

// find the sum of the numbers from 1 to 100 using a loop.
// let sum = 0;
// for(let i = 1; i<101; i++){
//     sum = sum + i;
// }
// console.log(sum);

//----------------------------------------------------------------------

// print all numbers that are are divisible by 3 between 1 to 50.

// for(let i = 1; i<50; i++){
//     if(i%3 == 0){
//         console.log(i);
//     }
// }

// ----------------------------------------------------------------------

// ask the user for a number and print whether each number from 1 to that number is even or odd

// let val = prompt("Give a number: ");

// for(let i = 1; i<=val; i++){
//     if (i%2 === 0){
//         console.log(`${i} is Even`);
//     }
//     else{
//         console.log(`${i} is odd`)
//     }
// }

//-------------------------------------------------------------------------

// count how many numbers between 1 to 100 are divisible by both 3 and 5.

// let count = 0;
// for(let i = 1; i<101; i++){
//     if((i%3 === 0) && (i%5 === 0)){
//         count = count+1;
//         console.log(i);
//     }
// }

// console.log(`total = ${count}`);

//-------------------------------------------------------------------------------

// print first 5 odd numbers in a loop form 1 to 100.

// let count = 0;

// for(let i = 1; i<101; i++){
//     if(i%2 === 1){
//         count++;
//         console.log(i);
//     }

//     if(count === 5) break;
// }

//---------------------------------------------------------------------

// sum of even and odd numbers from 1 to 50

// sum_even = 0;
// sum_odd = 0;
// for(let i = 1; i<51; i++){
//     if (i%2 === 0){
//         sum_even = sum_even+i;
//     }
//     else sum_odd += i;
// }

// console.log(`The sum of even numbers = ${sum_even}`);
// console.log(`The sum of odd numbers = ${sum_odd}`);

//---------------------------------------------------------------------

// print factorial of a number

// let num = prompt("Enter a number:");
// let fact = 1;
// for (let i = 1; i<=num; i++){
//     fact = fact*i;
// }
// console.log(`The factorial of ${num} is ${fact}`);

//----------------------------------------------------------------------

// print the reverse of a given number.

// let num = prmpt("Enter a any number(two or more digits):")

//----------------------------------------------------------------------

// numbers that are divisible by 4 but not by 8 between 1 to 100

// let count = 0;
// for(let i = 1;i<101; i++){
//     if(i%4 === 0 && i%8 !== 0){
//         console.log(i);
//         count++;
//     }
// }

// console.log(count);

//---------------------------------------------------------------------------

// to check if the number is prime or not.

// let count = 0;
// let num = prompt("Enter a number:")
// for(let i = 1; i<=num; i++){
//     if(num%i === 0){
//         count++;
//     }
// }
// if(count === 2){
//     console.log(`${num} Is prime.`);
// }
// else{
//     console.log(`${num} Is not prime.`);
// }

// -------------------------------------------------------------

// Program to check all the prime numbers from 1 to 100

let total = 0;
for (let i = 1; i < 101; i++) {
    if(i>2 && i%2 === 0) continue; 
    let count = 0;
    for (let j = 1; j <= i; j++) {
        if (i % j === 0) {
            count++;
        }
    }
    if (count === 2) {
        total++;
        console.log(`${i}`);
    }
}
console.log(`The total number of prime numbers are: ${total}`);

//------------------------------------------------------------------------

// Print the reverse of a given number (e.g., 1234 → 4321) using a while loop.

// let num = prompt("Enter a number: ");
// let rev = 0;
// while(num>0){
//     let last_digit = num%10;
//     rev = rev*10 + last_digit;
//     num = Math.floor(num/10);
// }

// console.log(rev);

//----------------------------------------------------------------------

// Program to check palindrom.

// let num = Number(prompt("Enter a number: "));
// let initial_num = num;
// let rev = 0;
// while(num>0){
//     let last_digit = num%10;
//     rev = rev*10 + last_digit;
//     num = Math.floor(num/10);
// }
// console.log(initial_num);
// console.log(rev);
// if(initial_num === rev) console.log("Palindorm");
// else console.log("Not Palindorm");





