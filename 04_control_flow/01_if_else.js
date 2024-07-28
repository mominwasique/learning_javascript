// If else 
// Comparison operators
// <,>,<=,>=,==,!=,===,!==

// const isUserLoggedIn = true
// if (isUserLoggedIn) {
//     console.log("Welcome");
// }

// if ( 4 == "4") {
//     console.log("Equal");
// }

// const temperature = 37
// if (temperature !== 37) {
//     console.log("temperature is 37 degree");
// }else {
//     console.log("temperature is not 37 degree");
// }

// const score = 200
// if (score>100) {
//     const power = "fly"
//     console.log(`User power: ${power} `);
// }
// console.log(`User power: ${power} `);

// const balance = 1000
// if (balance>500)console.log("correct"),console.log("incorrect");
// It is not write syntax..

// const balance = 5000
// if (balance > 1000) {
//     console.log("Greater than 1000");
// } else if (balance > 2000) {
//     console.log("Greater than 2000");
// } else if (balance > 3000) {
//     console.log("Greater than 3000 ");
// } else {
//     console.log("Greater than 5000");
// }

    // AND OPERATOR
// const userLoggedIn = true
// const cardNumber = true

// if (userLoggedIn && cardNumber && 3 === 3) {
//     console.log("Allow to login");
// }


    // OR OPERATOR
// const loggedInFromGoogle = true
// const loggedInFromFacebook = false
// 
// if (loggedInFromGoogle || loggedInFromFacebook) {
    // console.log("Logged in Successfull");
// }

//  Nullish coalescing operator(??): null undefined

let val1;
// val1 = 5 ?? 10 // 5
// val1 = null ?? 10 // 10
val1 = undefined ?? 10 // 10

console.log(val1);

// Terniary Operator

//  condition ? true: false

const price = 100
price <=80 ? console.log("More than 80"):console.log("less than 80");
