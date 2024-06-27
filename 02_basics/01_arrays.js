// ARRAYS

const myArr = [0,1,2,3,4,5]

const myArr2 = new Array(1,2,4,9,5)
console.log(myArr);

// Array Methods

myArr.push(6) // add element in the ending of an array
myArr.pop()   // remove last element from array
console.log(myArr);

myArr.unshift(9)
myArr.shift()
console.log(myArr);

console.log(myArr.includes(4))
console.log(myArr2.indexOf(4));

const newaArr = myArr.join()
console.log(myArr);
console.log(typeof newaArr);
console.log(newaArr);

// slice , splice
console.log("A", myArr);
const myNewArr = myArr.slice(1,3)
console.log(myNewArr);
console.log("B", myArr);
const myNewArr2 = myArr.splice(1,3)
console.log(myNewArr2);
console.log("C", myArr);