class MyTask {
  constructor() {
    this.resolve = null;
    this.reject = null;
  }
  resolve() {}
  reject() {}
}

const myTask = new MyTask((resolve, reject) => {
  setTimeout(() => {
    const data = 4;
    if (data >= 2) {
      resolve(data);
    } else {
      reject("Error!");
    }
  }, 100);
});

myTask
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
