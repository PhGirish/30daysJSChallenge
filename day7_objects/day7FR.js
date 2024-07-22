// task1 [object creation , using methods]
const book = {
    title : "atomic habits",
    author : "James Deen",
    year:"2012",
    quote : function(){
        return(`${(this.title).toUpperCase()} by ${this.author} written at ${this.year} is an absolute masterpiece`)
    }
}

console.log(book)
console.log('');

//task2 [array inside obj , obj inside obj]
const book1 = {
    title : "swiming pool",
    author : "kendrick",
    year:"2013",
}
const book2 = {
    title : "no role models",
    author : "JCole",
    year:"2014",
}
const library = {
    books : [book1,book2,book],
    sections : {
        java : {
            title : "Java 2012",
        },
        python : {
            title: " python basics"
        }
    }
}
console.log(library.books[1].title)
library.books.forEach(book=>{
    console.log(book.title+" by "+book.author)
})


console.log(' ');

//task3 [object keys and values]
console.log(Object.keys(library.sections));
console.log(Object.values(library.sections));

console.log('');

// [for...in loop]
for(let keys in library.sections.java){
    console.log(keys,library.sections.java[keys]);

}