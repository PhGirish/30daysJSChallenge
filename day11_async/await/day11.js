//task1 (promise & setTimeOut)

const task1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("successfully completed");
  }, 2000);
});

task1.then((data) => {
  console.log(data);
});

//task2
const task2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("sorry, we couldn't deliver");
  }, 3000);
});

task2.catch((data) => {
  console.log(data);
});

//task3 (chaining promises)

function getDough() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("dough ready🍞");
    }, 1000);
  });
}

function addCheese(dough) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(dough + "added cheese🧀");
    }, 1000);
  });
}

function bakePizza(cheese) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(cheese + "pizza ready🍕");
    }, 2000);
  });
}

getDough()
  .then((data) => {
    console.log("step1 " + data);
    return addCheese(data);
  })
  .then((data) => {
    console.log("step2" + data);
    return bakePizza(data);
  })
  .then((data) => {
    console.log("step3" + data);
  })
  .catch((data) => {
    console.error("error occured" + data);
  });

//task4 (async/await)
async function task4() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done");
    }, 1000);
  });
  const response = await promise;
  console.log(response);
}
task4();

//task5
async function task5() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("not done");
    }, 2000);
  });
  try {
    const message = await promise;
    console.log(message);
  } catch (error) {
    console.error(error);
  }
}
task5();

//task6 (fetch using asyn await & (!response.ok) throw new Error)
const url = "https://cat-fact.herokuapp.com/facts";
async function task6() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    console.log(data);
    console.log(data[0].text);
  } catch (error) {
    console.log(error);
  }
}
// task6();

//task7 (fetch using promises)
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

//task8
const task8 = [
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("step1");
    }, 1000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("step2");
    }, 3000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("step3");
    }, 3000);
  }),
];

Promise.all(task8)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

//task9
const task9 = [
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("step1");
    }, 5000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("step2");
    }, 4000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("step3");
    }, 6000);
  }),
];

Promise.race(task9)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
