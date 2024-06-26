              // ** STRINGS ** //
   
const name = "Wasique"
const count = 35
// console.log(name + count + " Value");

console.log(`My name is ${name} and count is ${count}`);

const newName = new String('wasique-ws co com')

// console.log(newName[0]);
// console.log(newName.__proto__);

console.log(newName.length);
console.log(newName.toUpperCase());
console.log(newName.charAt(4));
console.log(newName.indexOf('s'));

const newString = newName.substring(1,9)
console.log(newString);

const anotherStr = newName.slice(-9,4)
console.log(anotherStr);

const newStr = "    waasique    "
console.log(newStr);
console.log(newStr.trim());

const url = "https://wasique.com/wasique%20"

console.log(url.replace('%20','25'));

console.log(url.includes('haziq'));

console.log(newName.split(' '))