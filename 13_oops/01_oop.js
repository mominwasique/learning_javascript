
const user = {
    username: "Wasique",
    password: 2502,
    loggedIn: true,

    userDetails: function(){
        // console.log(`Got user details from database`);
        // console.log(`username: ${this.username}`);
    }
}

// console.log(user["username"]);
// console.log(user.userDetails());


// constructor function

function User(username,password,loggedIn){
    this.username = username;
    this.password = password;
    this.loggedIn = loggedIn;

    return this;
}

const userOne = new User("Wasique",2002, true);
const userTwo = new User("Wasiq",2511, false);
console.log(userOne);
console.log(userTwo);

