
class User{
    constructor(username) {
        this.username = username;
    }

    logMe(){
         console.log(`Username is ${this.username}`);
         
    }
}

// const newUser = new User("Wasique");
// newUser.logMe();


class AnotherUser extends User {
    constructor(username, email, password){
        super(username)
        this.email = email;
        this.password = password;
    }

    addInfo(){
        console.log(`Information added by ${this.username}`);
        
    }
}

const user = new AnotherUser("Wasique", "mohd@que.com", 123456);
// user.addInfo();
user.logMe();

const anotherUser = new User("Mohd")

// anotherUser.addInfo();
anotherUser.logMe();

// console.log(user === anotherUser); // false
// console.log(user === AnotherUser); // false
// console.log(user instanceof AnotherUser); // true
// console.log(user instanceof User); // true


