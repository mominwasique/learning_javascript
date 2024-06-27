//   ++++++++++++++++  NUMBER +++++++++++++++

const score = 100
console.log(score);

 const balance = new Number(400.45687)
console.log(balance);
console.log(balance.toString());
console.log(typeof balance);

console.log(balance.toFixed(2));
console.log(balance.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));


// ++++++++++++++++++ MATH IN JS ++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-5));
// Note: Only Negative Sign changed.

console.log(Math.round(4.49));
console.log(Math.ceil(4.1));
console.log(Math.floor(4.9));
console.log(Math.min(5,7,2,1,0));
console.log(Math.max(5,7,2,1,0));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min =10
const max =20

console.log(Math.floor(Math.random()*(max-min+ 1)) +min);
