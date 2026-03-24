// CHECKING EVEN ODD USING PROMISES

// function checkEvenOdd(num) {
//   return new Promise((resolve, reject) => {
//     num % 2 === 0 ? resolve(num + ' is Even') : reject(num + ' id Odd');
//   });
// }

// checkEvenOdd(10)
//   .then(function (msg) {
//     console.log(msg);
//   })
//   .catch(function (msg) {
//     console.log(msg);
//   });

// FUNCTION delay(ms) - RETURNS A PROMISE WHICH RESOLVES AFTER GIVEN MILLISECOND.

// function delay(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Done');
//     }, ms);
//   });
// }

// delay(3000).then(function (msg) {
//   console.log(msg);
// });

// FAKE API CALL SIMULATION UISNG PROMISE

// function getAPIData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('DATA RECIEVED');
//     }, 3000);
//   });
// }

// getAPIData()
//   .then(function (msg) {
//     console.log(msg);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// LOGIN SIMULATOR

let userName = 'ariz';
let passWord = '123456';
function userLogin(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === userName && password === passWord)
        resolve('Login successful');
      else reject('Invalid Credentials');
    }, 2000);
  });
}

userLogin('ariz', '123456')
  .then(function (msg) {
    console.log(msg);
  })
  .catch(function (msg) {
    console.log(msg);
  });
