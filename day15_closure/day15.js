const buttonEl = document.getElementById("increment");
// task1&2 closure for incrementing counter
function task1() {
  let count = 0;

  return {
    increment: function () {
      count++;
    },
    getCount: function () {
      return count;
    },
  };
}
const counter = task1();

buttonEl.addEventListener("click", () => {
  counter.increment();
  console.log(counter.getCount());
});

//task3 if u take para at the outside fn you can give the arg while initialising the fn to the const
function task3(name) {
  return function () {
    console.log(`hello ${name}`);
  };
}
const greet = task3("grish");
console.log(greet());

// or if u take para at the inside fn you can give the arg on the const
function task4() {
  return function (name) {
    console.log(`hello ${name}`);
  };
}
const greeting = task4();
console.log(greeting("grish"));
