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

// console.log(jsUser["Full Name"]);
// console.log(jsUser["age"]);
// console.log(typeof jsUser["mySym"]);

jsUser.email = "wasique@gmail.com"
// Object.freeze(jsUser)  // freeze the objects
jsUser.email = "wasique@gpt.com"
// console.log(jsUser);

jsUser.greeting = function() {
    console.log("Hello JS User");
}
jsUser.greetingTwo = function() {
    console.log(`Hello JS User,${this.name}`);
}


console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());