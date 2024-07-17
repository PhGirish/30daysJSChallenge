//task1
function task1() {
  for (i = 0; i <= 10; i++) {
    console.log(i);
  }
}
// task1();

//task2
function task2() {
  for (j = 1; j <= 10; j++) {
    mul = j * 5;
    console.log(mul);
  }
}
// task2();

//task3
function task3() {
  let num = 0;
  let sum = 0;
  while (num <= 10) {
    sum += num;
    num++;
  }
  console.log(sum);
}
// task3();

// task4
function task4() {
  let i = 10;
  while (i > 0) {
    console.log(i);
    i--;
  }
}
// task4();

//task5
function task5() {
  let i = 0;
  do {
    i++;
    console.log(i);
  } while (i < 5);
}
// task5();

// task6
function task6(a) {
  let i = 1;
  let fact = 1;
  do {
    fact *= i;
    i++;
    console.log(fact);
  } while (i <= a);
}
// task6(5);

//task7
function task7() {
  for (i = 0; i < 5; i++) {
    for (j = 0; j <= i; j++) {
      console.log("*");
    }
    console.log("");
  }
}
// task7();

// task8
function task8() {
  for (i = 0; i < 10; i++) {
    if (i == 5) {
      continue;
    }
    console.log(i);
  }
}
// task8();

//task9
function task9() {
  for (i = 0; i < 10; i++) {
    if (i == 7) {
      break;
    }
    console.log(i);
  }
}
task9();
