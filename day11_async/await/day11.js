//task1 (promise & setTimeOut)

// const task1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("successfully completed");
//   }, 2000);
// });

// task1.then((data) => {
//   console.log(data);
// });

//task2
// const task2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("sorry, we couldn't deliver");
//   }, 3000);
// });

// task2.catch((data) => {
//   console.log(data);
// });

//task3 (chaining promises)

// function getDough() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("dough ready🍞");
//     }, 1000);
//   });
// }

// function addCheese(dough) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(dough + "added cheese🧀");
//     }, 1000);
//   });
// }

// function bakePizza(cheese) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(cheese + "pizza ready🍕");
//     }, 2000);
//   });
// }

// getDough()
//   .then((data) => {
//     console.log("step1 " + data);
//     return addCheese(data);
//   })
//   .then((data) => {
//     console.log("step2" + data);
//     return bakePizza(data);
//   })
//   .then((data) => {
//     console.log("step3" + data);
//   })
//   .catch((data) => {
//     console.error("error occured" + data);
//   });

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

//task6
