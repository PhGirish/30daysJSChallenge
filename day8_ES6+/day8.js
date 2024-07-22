// task1
const person = {
    name : "Dolkar",
    age : 24
}

console.log(`the person is ${person.name} age ${person.age}`)

//task2
console.log(`ok bro,
    hello,
         sir`)

// task3 [array destructuring]
const [ tank, marksman , fighter] = ["john","mia","chau"];
console.log(tank + " "+fighter)

let numbers = [1,2,3,4,5]
let [ firstNum , secondNum,...restOftheNums] = numbers

console.log(firstNum+" "+secondNum)
console.log(restOftheNums);
console.log('');

//task4 [obj destructuring]
const book = {
    title : "atomic habits",
    author: "james clear",
    year: 2012
}

const {title, author="invalid"} = book;

console.log(title)
console.log('');

//task5 [spread operator]
let newnumbers = [9,7,...numbers]
console.log(newnumbers)

//task6  [rest operator]
function sum(...numbers){
    return numbers.reduce((a,b)=>a+b)
}
console.log(sum(1,2,3,4,5))

function multiply(a,...numbers){
    return numbers.map((n)=>a*n)
}
console.log(multiply(2,1,2,3))

//task7 [default values]
function product(a,b="5"){
    return a*b;
}
console.log(product(2,4))
console.log(product(2))

//task8 [enhanced obj literals]
const task8 = {
    numbers : numbers,
    newnumbers :  newnumbers,
    product : product(5)
}

console.log(task8)

// task9 [computer property names]
let name1  = "girish";
let age1 = 24;

const person2 = {
    [name1]: "name",
    [age1]: "age"
}

console.log(person2)