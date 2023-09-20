const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task
  // DB Calls
  setTimeout(function () {
    console.log("Async Task Is Completed");
    resolve();
  }, 2000);
});

promiseOne.then(function () {
  console.log("Promise Consume ");
});

// New Promise Create

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async 2 Task Completed");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 Resolve");
});

// New Promise

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async 3 Task Completed");
  }, 3000);
  resolve({ useName: "Kausar Raza", email: "faizraza349@gmail.com" });
});

promiseThree.then(function (user) {
  console.log(user);
});

// promise Four

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise 4 REsolve");
    const error = false;
    if (!error) {
      console.log("Resolve Execute");
      resolve({ username: "Kausar", pass: 123 });
    } else {
      reject("SomeThing Went Wrong");
    }
  }, 4000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error); 
  }).finally(()=>console.log("The Promise is either resolve or rejected"));

   const promiseFive =  new Promise((resolve, reject)=>{
      setTimeout(()=>{
        const err = false;
        if(!err){
            resolve({user: "Raza", pass: 1234});
        }else{
            reject('Error Found')
        }
      }, 5000)
   })


  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((response)=>{
      return response.json();
  }).then((data)=>{
    console.log(data);
  }).catch((error)=>{
    console.log(error);
  })