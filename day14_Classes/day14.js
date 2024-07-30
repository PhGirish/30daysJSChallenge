// task1 (class)
// task2 (add age updation method)
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greetings() {
    console.log(`hello ${this.name}, you are currently ${this.age}`);
  }
  updateAge() {
    this.age++;
    console.log(this.age);
  }
}

const Person1 = new Person("girish", 23);

Person1.greetings(); //task1
Person1.updateAge(); //task2

//------------------------------------------------------------------------------------------------

//task3 (class extension)
//task4 (overriding method)
class Student extends Person {
  constructor(name, age, studentID) {
    super(name, age);
    this.studentID = studentID;
  }

  //task4
  greetings() {
    super.greetings();
    console.log(
      `hello ${this.name}, you are currently ${this.age}, your id is ${this.studentID}`
    );
  }
}

const student1 = new Student("girish", 23, "22mcaa49");
student1.greetings();

//------------------------------------------------------------------------------------------------

//task5 (static class)

class NewPerson {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greetings() {
    console.log(`hello ${this.name}, you are currently ${this.age}`);
  }
  static greeting() {
    return `wooo comon`;
  }
  updateAge() {
    this.age++;
    console.log(this.age);
  }
}

const Dolkar = new NewPerson("Dokar", 24);
Dolkar.greetings();
console.log(NewPerson.greeting());

//task6 (incrementing using static )

class OfficeStaff {
  static count = 0;
  constructor(name, age) {
    this.name = name;
    this.age = age;
    OfficeStaff.count += 1;
  }

  keepTrack() {
    console.log(`the total no of people is ${OfficeStaff.count}`);
  }
}

const staff1 = new OfficeStaff("Bharat", 21);
const staff2 = new OfficeStaff("Bharat", 21);
const staff3 = new OfficeStaff("Bharat", 21);

console.log(staff1.keepTrack());

// task7
class Account {
  constructor(balance) {
    this.balance = balance;
  }
  checkBalance() {
    return `your balance is ${this.balance}`;
  }
  withdraw(amount) {
    this.balance -= amount;
    return this.balance;
  }
}

const Banker = new Account(2000);
console.log(Banker.checkBalance());
console.log(Banker.withdraw(1000));
console.log(Banker.checkBalance());
