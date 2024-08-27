
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(descriptor);

// console.log(Math.PI);
// Math.PI = 6;
// console.log(Math.PI);

const user = {
    name: "Wasique",
    email: "Wasique@.com",
    
    isAvailable: function(){
        console.log("Bura Hua");
        
    }
}

//  console.log(Object.getOwnPropertyDescriptor(user, "email"));

 Object.defineProperty(user, "email", {
    writable: false,
    enumerable: false,
    configurable: false,
 })

//  console.log(Object.getOwnPropertyDescriptor(user, "email"));

for (const [key, value] of Object.entries(user)) {
    if (typeof value !== 'function') {
        console.log(`${key}:${value}`);
    }
    
    
}
 



