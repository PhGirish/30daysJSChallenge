// task1
function task1(shouldResolve) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldResolve) {
        reject("didnt recieve");
      }
      resolve("received");
    }, 2000);
  });
}

task1(true)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

task1(false)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// task2
function getDough() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("step 1");
      resolve("getting dough🍞");
    }, 2000);
  });
}
function getCheese(Dough) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("step 2");
      //   resolve(Dough + "getting cheese🧀");
      reject("couldn't get dough");
    }, 2000);
  });
}
function bakePizza(Cheese) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("step 3");
      resolve(Cheese + "pizza baked🍕");
    }, 2000);
  });
}

getDough()
  .then((dough) => {
    console.log(dough);
    return getCheese(dough);
  })
  .then((data) => {
    console.log(data);
    return bakePizza(data);
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => console.log("whatever happened , happened"));

// task3
async function task3() {
  try {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("done");
      }, 3000);
    });

    const response = await promise;
    console.log(response);
  } catch (error) {
    console.log("error" + error);
  }
}
task3();

//task4
const url = "https://cat-fact.herokuapp.com/facts ";
async function task4() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
task4();

//task 5 (fetch using promise)
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });

//task6
const task6 = [
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("step1t6");
    }, 1000);
  }),
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("step2t6");
    }, 3000);
  }),
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("step3t6");
    }, 2000);
  }),
];

Promise.all(task6)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

Promise.race(task6)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
