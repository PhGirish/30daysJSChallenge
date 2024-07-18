//task1
function task1(num) {
  if (num % 2 == 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}
// task1(6);

// task2
function task2(num) {
  let square;
  square = num * num;
  return square;
}

// console.log(task2(4));

// task3
function task3(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
// console.log(task3(9, 5));\

// task4
function task4(a, b) {
  return a + "" + b;
}
// console.log(task4("gir", "ish"));

//task5
const sum = (a, b) => a + b;

// console.log(sum(1, 2));

// task6
const task6 = (str, chr) => {
  containChr = false;
  if (str.includes(chr)) {
    containChr = true;
    console.log("yes");
  } else {
    containChr = false;
    console.log("no");
  }
};
// task6("hello", "lo");

// task7
function task7(a) {
  let b = 1;
  return b * a;
}
// console.log(task7(7));

// task8
function task8(age) {
  let name = prompt("whats your name");
  console.log("hello" + " " + name + ".You are " + age + " years old");
}
// task8(18);

// task9
function task9(i, task91) {
  while (i < 5) {
    task91();
    i++;
  }
}
function task91() {
  console.log("hello");
}
// task9(1, task91);

// task10
const firstfn = (secondfn, thirdfn, i) => {
  const result1 = secondfn(i);
  const result2 = thirdfn(result1);
  console.log(result1);
  console.log(result2);
};

const secondfn = (num) => {
  return num * 2;
};

const thirdfn = (num) => {
  return num * num;
};

firstfn(secondfn, thirdfn, 3);
