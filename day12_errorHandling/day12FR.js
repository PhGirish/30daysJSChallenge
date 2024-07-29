// task1
function task1(a) {
  try {
    if (a > 5) {
      console.log("error");
    } else {
      console.log("u r good");
    }
  } catch (error) {
    console.log(error);
  }
}
task1(4);

// task2
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "Custom Error";
  }
}

function task2() {
  try {
    throw new CustomError("you should fix this error");
  } catch (error) {
    console.log(error);
  }
}

task2();

// task3(promises errors)

function task3(a) {
  return new Promise((resolve, reject) => {
    try {
      if (a > 5) {
        resolve("not error 3");
      } else {
        reject("error3");
      }
    } catch (err) {
      console.log(err);
    }
  });
}

task3(4)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

//task3.1
async function contTask3(a) {
  try {
    const promise = new Promise((resolve, reject) => {
      if (a > 5) {
        resolve("good3.2");
      } else {
        reject("not good 3.2");
      }
    });
    const response = await promise;
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}

contTask3(8);

// task4
const url = "https://invalidurl.com";
function task4() {
  fetch(url)
    .then((response) => response.json())
    .catch((err) => console.log(err));
}

task4();

async function task4new() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
task4new();
