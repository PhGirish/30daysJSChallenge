// task1
const book = {
    title : "atomic habits",
    author : "james dean",
    year : "2012",
    bookdetails : function(){
        return (`${this.title} at ${this.year}`)
    
    },
    booksome : function(){
        return (book.title +" by " + book.author)
    },
    bookyear : function(yr){
        return(this.year = yr)
    },
    book1 : {
        title:"something",
        year:2038,
        author:"girish"
    }
}

for(let keys in book){
    console.log(keys) //task 8
   
}

console.log(" ")

for(let keys in book.book1){
    console.log(keys,book.book1[keys])
}

console.log(book)
console.log(book.title) // task2
console.log(book.booksome());//task3
console.log(book.bookyear(2019)); //task4

console.log(book.bookdetails());//task7



const book1={
    title : "hero",
    author : "dooms"
}
const book2={
    title : "hero2",
    author : "dooms2"
}
console.log(" ")
console.log(Object.keys(book1),Object.values(book2))//task9
console.log("")

const library = {
    name:"section1",
    books : [book1,book2],
}
console.log(library)//task5

// console.log(`${library.name} ${library.books[1].title}`)

// task6
library.books.forEach((book)=>{
    console.log(book.title + book.author) 
})

//task7




