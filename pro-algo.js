class MyCustomPromise {
  constructor(callback) {
    this.callback = callback;
    this.onResolve = null;
    this.onReject = null;
    this.execute();
  }

  execute() {
    const resolve = (data) => {
      setTimeout(() => {
        if (this.onResolve) {
          this.onResolve(data);
        }
      }, 500);
    };

    const reject = (error) => {
      setTimeout(() => {
        if (this.onReject) {
          this.onReject(error);
        }
      }, 500);
    };

    this.callback(resolve, reject);
  }

  then(onResolve) {
    this.onResolve = onResolve;
    return this;
  }

  catch(onReject) {
    this.onReject = onReject;
    return this;
  }
}

const myCustomPromise = new MyCustomPromise((resolve, reject) => {
  setTimeout(() => {
    const data = 5;
    if (data >= 0) {
      resolve(data);
    } else {
      reject("Error!");
    }
  }, 1000);
});

myCustomPromise
  .then((result) => {
    console.log(result * 6);
  })
  .catch((error) => {
    console.log(error);
  });
