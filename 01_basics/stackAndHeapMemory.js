// Stack (Primitive)
// Heap (Non-Primitive)

let myUsername = "wasique25"

let anotherUsername = myUsername
anotherUsername = "momin02"

console.log(anotherUsername);
console.log(myUsername);

let userOne = {
    email: "mohdwasique02@googledotcom",
    uniqueId: "mohd25"
}

let userTwo = userOne 

userTwo.email = "mominwasique02@googledotcom"

console.log(userOne.email);
console.log(userTwo.email);