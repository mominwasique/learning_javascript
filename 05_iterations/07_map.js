// Map in js

const numbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = numbers.map( (num) => num + 10 )

const newNums = numbers
                .map( (num) => num * 10 )
                .map( (num) => num + 1 )
                .filter( (num) => num >= 30 )


console.log(newNums);