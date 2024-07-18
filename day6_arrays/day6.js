// task1
function task1() {
  const numbers = [1, 2, 3, 4, 5];
  console.log(numbers);
}
task1();

// task2
function task2() {
  const numbers = [1, 2, 3, 4, 5];
  console.log(numbers[0]);
  console.log(numbers[numbers.length - 1]);
}
task2();

// task3
function task3() {
  const numbers = [1, 2, 3, 4, 5];
  numbers.push(11);
  console.log(numbers);
}
task3();

//task4
function task4() {
  const numbers = [1, 2, 3, 4, 5];
  numbers.pop();
  console.log(numbers);
}
task4();

//task5
function task5() {
  const numbers = [1, 2, 3, 4, 5];
  numbers.shift();
  console.log(numbers);
}
task5();

function task51() {
  const numbers = [1, 2, 3, 4, 5];
  numbers.splice(0, 1);
  console.log(numbers);
}
task51();

//task6
function task6() {
  const numbers = [1, 2, 3, 4, 5];
  numbers.unshift(1);
  console.log(numbers);
}
task6();

//task7
function task7() {
  const numbers = [1, 2, 3, 4, 5];

  numbers.map((num, index) => {
    num *= 2;
    console.log(num, index);
  });
}
task7();

//task8
function task8() {
  const numbers = [1, 2, 3, 4, 5, 6];

  const newnum = numbers.filter((num) => {
    return num % 2 == 0;
  });
  console.log(newnum);
}
task8();

//task9
function task9() {
  const numbers = [1, 2, 3, 4, 5];

  const newnum = numbers.reduce((a, b) => {
    return a + b;
  });
  console.log(newnum);
}
task9();

//task10
function task10() {
  const numbers = [1, 2, 3, 4, 5];
  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
  }
}
task10();

// task11
function task11() {
  const numbers = [1, 2, 3, 4, 5];
  numbers.forEach((a) => {
    console.log(a);
  });
}
task11();

//task12
function task12() {
  const matrix = [
    [1, 2, 3],
    [2, 3, 4],
    [5, 6, 7],
  ];
  console.log(matrix);
  console.table(matrix);
  console.log(matrix[0][2]);
}
task12();
