// ES6

class User {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}@02`
    }

    upperCaseUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const newUser = new User("Wasique","mohd@edu.com", "wasique")

// console.log(newUser.encryptPassword());
// console.log(newUser.upperCaseUsername());
// console.log(newUser);

// behind the scene..   

function NewUser(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}123`
}
User.prototype.upperCaseUsername = function(){
    return `${this.username.toUpperCase()}`
}

const UserTwo = new User("Wasiq","wasique@edu.com","wasiq_");

console.log(UserTwo.encryptPassword());
console.log(UserTwo.upperCaseUsername());

