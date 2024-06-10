// Primitive

// 7 types:
// String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.34

const isLoggedIn = false
const ousideTemp = null
let userEmail;

const id = Symbol('786')
const anotherId = Symbol('786')

console.log(id === anotherId);

const bigNumber = 888888884976464656655664n

console.log(typeof bigNumber);


// Reference (Non Primitive)

// Array, Objects, Functions

const fruits = ["Apple", "Mango", "Banana" ]    // Arrays

let myObj = {                                   // Objects
    name : "Wasique",
    age : 22
}

const myFunction = function(){                   // Functions                
    console.log("Hello World");
}

console.log(typeof fruits);
console.log(typeof anotherId);
