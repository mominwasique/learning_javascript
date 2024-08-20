let myName = "Wasique    "

// console.log(myName.length);
// console.log(myName.trim(" ").length);

// console.log(myName.trueLength);

let programmingLang = ["javascript","java","python"]

let programmingExt = {
    javascript: "js",
    java: "java",
    python: "py",

    getProgrammingExt: function(){
         console.log(`Extention of Javascript is: ${this.javascript}`);
        
    }
}

Object.prototype.wasique = function(){
    // console.log(`Extention of java is (.java)`);
    
}

Array.prototype.heyWasique = function(){
    console.log(`This method is only accessible by Array`);
    
}

// programmingExt.wasique();
// programmingLang.wasique();

// programmingLang.heyWasique();
// programmingExt.heyWasique();

// I create a function in prototype. // i.e. "Object.prototype.functionName = function(){}"
// If Object access function , it will accessible by other  dataTypes such as
// "Array", "Strings" and "functions"..
// but If Array access function, it will accessible by only Array.

// Inheritance

const user = {
    name: "Wasique",
    password: "Wasique@123",
}
const teacher = {
    makeVideos: true
}

const teachingSupport = {
    isAvailable: false
}

teacher.__proto__ = user

// modern syntax
Object.setPrototypeOf(teachingSupport, teacher)
const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: teachingSupport
}

let anotherUsername = "Wasiqurrahim    "

String.prototype.trueLength = function(){
    console.log(this);
    console.log(this.name);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength();
"wasiq   ".trueLength();
"hazique    ".trueLength();