// const coding = ["js","c++","java","python"] 

// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item
//     // forEach does not return any value 
//     // it gives undefined
// } )

// console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const updateNums = myNums.filter( (num) => num > 5 )//implicit return
// const updateNums = myNums.filter( (num) => {
//     return num > 5 // explicit return 
    // Both methods are acceptable
// } )

// using forEach method
// const updateNums = []

// myNums.forEach( (num) => {
//     if (num > 5) {
//         updateNums.push(num)
//     }
// } )
// console.log(updateNums);

const allBooks = [
    { title: "Book One", genre: "Fiction", publish: 1980, 
        edition: 1995 },
    { title: "Book Two", genre: "Non-Fiction", publish: 1990, 
        edition: 1999 },
    { title: "Book Three", genre: "Science", publish: 1986, 
        edition: 2004 },
    { title: "Book Four", genre: "History", publish: 2001, 
        edition: 2013 },
    { title: "Book Five", genre: "Science", publish: 2011, 
        edition: 2020 },
    { title: "Book Six", genre: "History", publish: 1968, 
        edition: 1979 },
    { title: "Book Seven", genre: "Science", publish: 2015, 
        edition: 2022 },
]

// const userBooks = allBooks.filter( (books) => 
//     books.genre === "Science" )

// const userBooks = allBooks.filter( (books) => {
//         return books.publish >= 1990
//     } )
// const userBooks = allBooks.filter( (books) => {
        // return books.edition >= 2015
    // } )

 const userBooks = allBooks.filter( (books) => {
    return books.publish >= 1995 && books.genre === "History"
 } )

console.log(userBooks);