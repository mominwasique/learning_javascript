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
    console.log(`Extention of java is (.java)`);
    
}

Array.prototype.heyWasique = function(){
    console.log(`This method is only accessible by Array`);
    
}

// programmingExt.wasique();
// programmingLang.wasique();

programmingLang.heyWasique();
programmingExt.heyWasique();

// I create a function in prototype. // i.e. "Object.prototype.functionName = function(){}"
// If Object access function , it will accessible by other  dataTypes such as
// "Array", "Strings" and "functions"..
// but If Array access function, it will accessible by only Array.

// Inheritance


