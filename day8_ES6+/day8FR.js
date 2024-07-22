// Task1
let var1 = "template literals"
let var2 = 101
let task1 = `${var1}  ${var2}` 
console.log(task1)

//Task2
function task2(){
    let [name,age,sex] = ["girish",24,"M"]
    console.log(name)

    const greetingCommand = {
        greetings : "hello",
        name : name,
    }

console.log(greetingCommand.name)

const { greetings , end = "bye"} = greetingCommand

console.log(greetings, end)

}
task2()

//task3
function task3(){
    const arr1 = [1,2,3,4]
    const arr2 = arr1.reduce((a,b)=>a + b)
    console.log(...arr1)
    console.log(arr2)


}
task3()

function multipy(a,...numbers){
    const multiplication = numbers.map((num)=>num*a)
    console.log(multiplication);
}

multipy(2,2,3,4,5)

//task4
function task4(a,b="girish"){
    console.log(a+b)
}

task4("hell0 ")

//task5
function task5(){
    const arr = {
        name : var1,
        age: var2,
    }
console.log(arr.name)
    
}
task5()