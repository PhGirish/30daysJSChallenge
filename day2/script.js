//Task 1
function add2numbers(a, b) {
  let result = a + b;
  console.log("addition :" + result);
  return result;
}

add2numbers(2, 7);

//Task 2
function sub(a, b) {
  console.log("subtraction : " + (b - a));
}

sub(5, 9);

//Task 3
function multiply(a, b) {
  console.log("multiplication " + b * a);
}

multiply(5, 9);

//Task 4
function divide(a, b) {
  console.log("division : " + b / a);
}

divide(5, 9);

//Task 5
function mod(a, b) {
  console.log("mod" + (b % a));
}

mod(5, 9);

//Task 6
function Task6(num) {
  num += 1;
  console.log(num);
}

Task6(5);

//Task 7
function Task7(num) {
  num -= 1;
  console.log(num);
}

Task7(5);

//task 8
function Task8(a, b) {
  if (a > b) {
    console.log("greater");
  } else if (a < b) {
    console.log("less");
  }
}

Task8(4, 7);

//task 9
function Task9(a, b) {
  if (a >= b) {
    console.log("greater");
  } else if (a <= b) {
    console.log("less");
  }
}
Task9(4, 7);

//task10
function task10(a, b) {
  console.log(`${a} == ${b}`, a == b);
  console.log(`${a} == ${b}`, a === b);
}

task10(5, "5");

//task 11
let num1 = 3;
let num2 = 5;
num1 > 0 ? console.log("positive") : console.log("negative");
