// arrays 

// -------------------------------------

// Push operation

// let arr = [1, 2, 3, 4, 5];
// arr.push(6); [1, 2, 3, 4, 5, 6]
// arr.pop(); [1, 2, 3, 4]
// arr.shift(); [2, 3, 4, 5]
// arr.unshift(0); [0, 1, 2, 3, 4, 5]
// arr.splice(2,2); [1, 2, 5]

// // ----------------------------------------
// // use of Slice
// let newarr = arr.slice(0,3);
// newarr
// (3) [1, 2, 3]
// arr
// (5) [1, 2, 3, 4, 5]



//----------------------forEach()--------------------------

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// arr.forEach(function (val) {
//     console.log(val); // 2 4 6 8 10
// });

// Print Squares 
// arr.forEach(function (val){
//     console.log(val*2);
// });

// add 5 to each elements
// arr.forEach(function(val){
//     console.log(val+5);
// });

// even Numbers
// arr.forEach(function(val){
//     if(val%2===0){
//         console.log(val);
//     }
// })

// Odd numbers
// arr.forEach(function(val){
//     if(val%2===1){
//         console.log(val);
//     }
// })

//find some of array
// let total = 0;
// arr.forEach(function(val){
//     total = total+val;
// });
// console.log(total);
// arr.forEach((val) => total = total+val);
// console.log(total);

// convert to uppercase 
// let names = ["ariz", "umar", "anwaar"];
// names.forEach(function(value){
//     let result = value.toUpperCase();
//     console.log(result);
// });
// using arrow function
// names.forEach((name) => {
//     console.log(name.toUpperCase())
// });

// let arr = [1, 2, 3, 4, 5];
// let newarr = [];
// arr.forEach(value => newarr.push(value * 2));
// console.log(newarr);


//-----------------------map()----------------------------
// let arr = [1, 2, 3, 4, 5];
// let doubled = arr.map(function (value) {
//     return value * 2;
// });
// console.log(doubled);

// let doubled = arr.map(value => value*2);
// console.log(doubled);

// Convert to uppercase
// let lower = ["ariz","umar","anwaar"];
// let upper = lower.map(names => names.toUpperCase());
// console.log(upper);

// Add 10 to Each element
// let marks = [40,55,60];
// let addedMarks = marks.map(mark => mark+10);
// console.log(addedMarks);

// Converting existing prices according to GST(18%)
// let prices = [100,200,300];
// let gstPrices = prices.map(price => price + price*(18/100));
// console.log(gstPrices);


// return true if value>10 else false
// let nums = [12, 5, 22, 55, 8];
// let boolValues = nums.map(value => value > 10 ? true : false);
// console.log(boolValues);

// index based mapping 
// let arr = ["a","b","c"];
// let newArr = arr.map(function(value,index){
//     return `${index}-${value}`;
// });
// console.log(newArr);

//---------------------filter()--------------------------

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
// let evenNums = nums.filter(function(num){
//     if(num%2===0) return true;
// });

// let evenNums = nums.filter(num => num % 2 === 0);
// console.log(evenNums);

// let values = [0, 1, "", "hello", null, undefined, 5];
// let truthyValues = values.filter(function (val) {
//     if (val) return true;
// });
// console.log(truthyValues);

// remove duplicate values
// let nums = [1, 2, 2, 3, 4, 4, 5];
// let uniqueNums = nums.filter((value,index)=>{
//     return nums.indexOf(value) === index;
// });
// console.log(uniqueNums);

//-----------------------reduce()---------------------------
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let total = nums.reduce((accumulator, num) => {
//     return accumulator + num;
// }, 0);

// Product of all elements
// let product = nums.reduce((accumulator, num) => {
//     return accumulator * num;
// }, 1);

// Use reduce() to count the total number of elements in an array.

// let totalNums = nums.reduce((accumulator) => {
//     return accumulator+1;
// }, 0);
// console.log(totalNums);

//Use reduce() to calculate the sum of even numbers in an array.
// let evenSum = nums.reduce((accumulator, num) => {
//     if (num % 2 === 0) return accumulator + num;
//     return accumulator;
// }, 0);

// Use reduce() to convert an array of strings into a single sentence.
// let arr = ["javascript", " is", " awesome."];
// let ans = arr.reduce((accumulator,str)=>{
//     return accumulator+str;
// });

// Find the difference of all numbers in an array using reduce().

// let arr = [20, 5, 3];
// let diff = arr.reduce((accumulator, val)=>{
//     return accumulator-val; // accumulator gets 20 and num starts from 5.(no initial value)
// });

// Use reduce() to count how many even numbers are present in an array.
// let arr = [20, 44, 35, 21, 3, 7, 18];
// let evenNums = arr.reduce((accumulator, num)=>{
//     if(num % 2 === 0) return accumulator+1;
//     return accumulator;
// }, 0);

// Write a reduce() function to check if all numbers are positive.
// let arr = [20, 44, 35, 21, 3, 7, 18];
// let ans = arr.reduce((accumulator) => {
//     if (accumulator > 0) return true;
// });

// Use reduce() to find the sum of squares of all numbers.
// let nums = [1, 2, 3, 4, 5];
// let result = nums.reduce((accumulator,num)=>{
//     return accumulator+(num*num);
// });

// Find the largest number in an array
// let nums = [10, 45, 23, 89, 100];
// let greatestNum = nums.reduce((accumulator, num) => {
//     return num > accumulator ? num : accumulator; // 100
// });

// let revArr = nums.reduce((acc, num)=>{
//     acc.unshift(num);
//     return acc;
// },[]);

// Merge two arryas into one .
// let arr1 = [1,2,3];
// let arr2 = [4,5,6];
// let mergedArr = arr2.reduce((acc,num)=>{
//     acc.push(num);
//     return acc;
// },[...arr1]);

//-----------------find()--------------------

// let arr = [5,10,55,16];
// let result = arr.find(num => num>10);
// console.log(result);

// find the first number divisible by 5
// let arr = [3, 7, 11, 20, 18];
// let result = arr.find(num=> num%5===0);
// console.log(result);

// let arr = [55, 7, 15, 97, 5];
// let result = arr.some(num => num % 2 === 0);
// console.log(result);// false

// let arr = [55, 7, 15, 97, 5];
// let result = arr.every(num => num % 2 === 1);
// console.log(result);

// insert "Red" and "Blue" at the index 1 of this array.
// let colors = ["Green", "Yellow"];
// colors.splice(1, 0, "Red", "Blue");
// console.log(colors);

// extract only middle three elements of this array.
// let items = [1, 2, 3, 4, 5, 6, 7];
// let newArr = items.slice(2,5);
// console.log(newArr);


// sort this array alphabatically and then reverse it.

let names = ["Zara", "Arjun", "Mira", "Bhavya"];
names.sort().reverse();