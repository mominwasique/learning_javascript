// singleton and literals

// literals

// Declararion
Object.create    // singleton/constructor

const mySym = Symbol("key1")
const jsUser = {
    name: "Wasique",
    "Full Name": "Mohd Wasique",
    [mySym]: "myKey1",
    age : 20,
    location : "Mumbai",
    email : "momin@gmail.com",
    isActive : false,
    isActiveDays : ["Monday", "Wednesday", "Friday"]
}

console.log(jsUser["Full Name"]);
console.log(jsUser["age"]);
console.log(typeof jsUser["mySym"]);