// task1 Create an array of numbers from 1 to 5 and log the array to the console.
function task1() {
  const numbers = [1, 2, 3, 4, 5];
  console.log(numbers);
}
task1();

// task2  Access the first and last elements of the array and log them to the console.
function task2() {
  const numbers = [1, 2, 3, 4, 5];
  console.log(numbers[0]);
  console.log(numbers[numbers.length - 1]);
}
task2();

// task3 Use the push method to add a new number to the end of the array and log the updated array.
function task3() {
  const numbers = [1, 2, 3, 4, 5];
  numbers.push(11);
  console.log(numbers);
}
task3();

//task4 Use the pop method to remove the last element from the array and log the updated array.
function task4() {
  const numbers = [1, 2, 3, 4, 5];
  numbers.pop();
  console.log(numbers);
}
task4();

//task5 Use the shift method to remove the first element from the array and log the updated array.
function task5() {
  const numbers = [1, 2, 3, 4, 5];
  numbers.shift();
  console.log(numbers);
}
task5();

//splice to remove from 0 remove value 1
function task51() {
  const numbers = [1, 2, 3, 4, 5];
  numbers.splice(0, 1);
  console.log(numbers);
}
task51();

//task6 Use the unshift method to add a new number to the beginning of the array and log the updated array.
function task6() {
  const numbers = [1, 2, 3, 4, 5];
  numbers.unshift(1);
  console.log(numbers);
}
task6();

//task7 Use the map method to create a new array where each number is doubled and log the new array.
function task7() {
  const numbers = [1, 2, 3, 4, 5];

  numbers.map((num, index) => {
    num *= 2;
    console.log(num, index);
  });
}
task7();

//task8 Use the filter method to create a new array with only even numbers and log the new array.
function task8() {
  const numbers = [1, 2, 3, 4, 5, 6];

  const newnum = numbers.filter((num) => {
    return num % 2 == 0;
  });
  console.log(newnum);
}
task8();

//task9 Use the reduce method to calculate the sum of all numbers in the array and log the result.
function task9() {
  const numbers = [1, 2, 3, 4, 5];

  const newnum = numbers.reduce((a, b) => {
    return a + b;
  });
  console.log(newnum);
}
task9();

//task10  Use a for loop to iterate over the array and log each element to the console.
function task10() {
  const numbers = [1, 2, 3, 4, 5];
  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
  }
}
task10();

// task11 Use the forEach method to iterate over the array and log each element to the console.
function task11() {
  const numbers = [1, 2, 3, 4, 5];
  numbers.forEach((a) => {
    console.log(a);
  });
}
task11();

//task12 Create a two-dimensional array (matrix) and log the entire array to the console.
function task12() {
  const matrix = [
    [1, 2, 3],
    [2, 3, 4],
    [5, 6, 7],
  ];
  console.log(matrix);
  console.table(matrix);
  console.log(matrix[0][2]); //task13
}
task12();
