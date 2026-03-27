// async/await - its a Better way to handle promises.

// let pr = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let rn = Math.floor(Math.random() * 10);
//     if (rn > 5) resolve('Resolved with ' + rn);
//     else reject('Rejected with ' + rn);
//   }, 2000);
// });

// async function abcd() {
//   try {
//     let val = await pr;
//     console.log(val);
//   } catch (err) {
//     console.log(err);
//   }
// }

// abcd();

// example---
// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Data Fetched');
//     }, 2000);
//   });
// }

// async function getData() {
//   let data = await fetchData();
//   console.log(data);
// }
// getData();

// example with try catch..

// function login(success) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (success) resolve('Login successful');
//       else reject('Login failed');
//     }, 3000);
//   });
// }

// async function checkLogin() {
//   try {
//     let result = await login(false);
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// }

// checkLogin();

// example--

function chaiBanao() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Chae bann gai hai!!!');
    }, 2000);
  });
}

function chaiServeKaro() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Chae Serve kar di!!!');
    }, 2000);
  });
}

async function chaiParty() {
  let chaiBanaoo = await chaiBanao();
  console.log(chaiBanaoo);
  let chaiServekaroo = await chaiServeKaro();
  console.log(chaiServekaroo);

  console.log('Saara kaam ho gya hai.');
}
chaiParty();

async function runParallel() {
  let results = await Promise.all([chaiBanao(), chaiServeKaro()]);
  console.log(results);
}

runParallel();
