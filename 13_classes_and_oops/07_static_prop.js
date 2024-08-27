
class User {
    constructor(username){
        this.username = username;
    }

    login(){
        console.log(`Username is ${this.username}`);
        
    }
    static createId(){
        return `1234`
    }
}

const newUser = new User("Wasique");
// console.log(newUser.createId());

class NewUser extends User{
    constructor(username, email){
        super(username)
        this.email = email;
    }
}

const anotherUser = new NewUser("Mohd Wasique","wasiq02@.com");

// console.log(anotherUser.createId());
anotherUser.login();


