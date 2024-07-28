// task1
// function task1() {
//   let i = 10;
//   try {
//     if (i > 20) {
//       console.lg("correct");
//     } else {
//       console.lg("error");
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }
// // task1();

//task2
function task2(a, b) {
  try {
    if (b == 0) {
      throw new Error("division by 0 not allowed");
    }
    return a / b;
  } catch (error) {
    console.log(error.message);
  }
}
// console.log(task2(4, 0));

//task3
function task3(a, b) {
  try {
    if (b == 0) {
      throw new Error("should not be divisible by 0");
    }
    return a / b;
  } catch (error) {
    console.log(error);
    return null;
  } finally {
    console.log("done");
  }
}

console.log(task3(2, 0));

//task4 Custom Error
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "Custom Error";
  }
}

function throwCustomError() {
  try {
    throw new CustomError("this is custom error");
  } catch (error) {
    console.log("caught custom error", error.message);
  }
}
throwCustomError();

//task5 (custom error , try catch)
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "Validation Error";
  }
}

function ValidationInput(input) {
  if (input === "") {
    throw new ValidationError("input cannot be empty");
  }
  console.log("welldone");
}

try {
  ValidationInput("");
} catch (error) {
  console.log("caught error", error.message);
}

//task6 (promise errror catching)
const random = Math.floor(Math.random() * 10);
console.log(random);

function task6(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a > 5) {
        resolve("correct");
      } else {
        reject("wrong");
      }
    }, 1000);
  });
}

task6(random)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// task7(async await error catch)

async function task7(a) {
  try {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (a > 5) {
          resolve("correct2");
        } else {
          reject("wrong2");
        }
      }, 1000);
    });
    const result = await promise;
    console.log(result);
  } catch (error) {
    console.log("error" + error.message);
  }
}

task7(random);
// task8
function task8() {
  fetch("https://invalidulr.com")
    .then((response) => response.json())
    .catch((error) => console.log("couldnt find api" + error));
}

task8();
//task9
async function task9() {
  const url = "https://alexohlbruck.githb.io/ct-facts/";
  try {
    const data = await fetch(url);
    const response = await data.json();
    console.log(response);
  } catch (error) {
    console.log("api not found", error);
  }
}
task9();
