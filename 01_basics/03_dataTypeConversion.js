let score = "33abcd"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33    // convert in number
// "33abcd" =>  Nan (Not a Number)
// true => 1; false => 0
// undefined => Nan
// String => Nan
// null => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false 
// "Wasique" => true

let numberIs = 45
let stringNumber = String(numberIs)
console.log(stringNumber);
console.log(typeof stringNumber);








