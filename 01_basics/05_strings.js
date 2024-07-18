              // ** STRINGS ** //
   
const name = "Wasique"
const count = 35
//  console.log(name + count + " Value");

// console.log(`My name is ${name} and count is ${count}`);

const newName = new String('wasique-ws co com')

// console.log(newName[0]); // first letter is 'w'
// console.log(newName.__proto__); // 

// console.log(newName.length); // length of String
// console.log(newName.toUpperCase());
//  console.log(newName.charAt(4)); // q 
// console.log(newName.indexOf('s')); // 2

const newString = newName.substring(1,9) 
// console.log(newString); // asique-w

const anotherStr = newName.slice(-8,-4)
//  console.log(anotherStr); // s co

const newStr = "    waasique    "
// console.log(newStr);
// console.log(newStr.trim()); // waasique

const url = "https://wasique.com/wasique%20"

// console.log(url.replace('%20','25'));
// replace %20 by 25
//  console.log(url.includes('haziq')); 
console.log(newName.split(' '))

// split method seperates the string using some seperators such as space, comma,hyphen,etc etc..