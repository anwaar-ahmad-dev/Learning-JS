// call back

// function kuchDerBaadChalunga(fnc) {
//   // fnc - here is callback function
//   setTimeout(fnc, Math.floor(Math.random() * 10) * 1000);
// }

// kuchDerBaadChalunga(function () {
//   console.log('hey hey hey'); // this passed function through another function call is called the callback function.
// });

// Callback hell example (nesting of functions and running them one by one using timeout.)

// function profileLekarAao(username, cb) {
//   console.log('Fetching Profile data...');
//   setTimeout(() => {
//     cb({ _id: 12112, username, age: 26, email: 'test@test.com' });
//   }, 2000);
// }

// function saarePostLekarAao(id, cb) {
//   console.log('Fetching all the posts..');
//   setTimeout(() => {
//     cb({ _id: id, posts: ['hey', 'hello', 'good Morning'] });
//   }, 2000);
// }

// function savedPostNikaalo(id, cb) {
//   console.log('Fetching saved posts...');
//   setTimeout(() => {
//     cb({ _id: id, saved: [1, 2, 3, 4, 5, 5, 234, 56, 56774] });
//   }, 2000);
// }

// profileLekarAao('harsh', function (data) {
//   console.log(data);

//   saarePostLekarAao(data._id, function (posts) {
//     console.log(posts);

//     savedPostNikaalo(data._id, function (saved) {
//       console.log(saved);
//     });
//   });
// });

// Promises-------

let pr = new Promise((resolve, reject) => {
  setTimeout(() => {
    let rn = Math.floor(Math.random() * 10);
    if (rn > 5) resolve('Resolved with ' + rn);
    else reject('Rejected with ' + rn);
  }, 2000);
});

pr.then(function (val) {
  console.log(val);
}).catch(function (val) {
  console.log(val);
});
