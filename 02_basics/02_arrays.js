const fruits = ["Mango", "Banana", "Orange"]
const colours = ["Red","Green","Black"]

// console.log(colours);
// console.log(colours[3][2]);
// colours.push(fruits);

// const allElem = fruits.concat(colours)
// console.log(allElem);

const all_new_elem = [...fruits, ...colours]
//console.log(all_new_elem);
// Mostly used Spread Method

// flat method
const new_array = [1,2,3,[4,5,6],7,8,[5,6,[2,4]]]
const all_array = new_array.flat(Infinity)
//console.log(all_array);

//console.log(Array.isArray("Wasique")) 
// return true or false

console.log(Array.from("Wasique"))
console.log(Array.from({name : "Wasique"})) 
// interesting

let num1 = 546
let num2 = 564
let num3 = 456

console.log(Array.of(num1,num2,num3));