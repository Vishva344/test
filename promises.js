/*
    1. Print out "Program started" at the start of your code
    2. Create a Promise that resolves after 3 seconds
       and rejects after 2 seconds
    3. Log out the promise while it's pending
    4. Print out "Program in progress..." as well
    5. Print out "Program complete" if the promise fulfills
    6. Print out "Program failure" if the promise rejects*/

const promise3 = "viva";
const promise1 = 281;
const promise4 = "shyam";
let promise2 = new Promise((resolve, reject) => {
  const x = "vishva";
  const y = "vishva";
  if (x === y) {
    resolve(5);
  } else {
    reject(6);
  }
});

Promise.allSettled([promise1, promise2, promise3, promise4])
  .then(function (value) {
    console.log(value);
  })
  .catch((e) => {
    console.log("Error here ", e);
  });
