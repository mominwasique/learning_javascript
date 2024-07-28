            // Truthy and Falsy values

const useremail = []

if (useremail) {
    console.log("email registered");
} else {
    console.log("email not registered");
}

// Falsy Values
//  false,0,-0,BigInt 0n,"",null,undefined,Nan

// Truthy Values
//  "0","false"," ",[],{},function(){}

// if (useremail.length === 0) {
//     console.log("Empty Array");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Empty Object");
}