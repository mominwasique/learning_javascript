function setUsername(username){
    this.username = username
    console.log("called");
    
}

function createUser(username,password,email){
    setUsername.call(this, username)
    this.password = password
    this.email = email
    
}

const resultUser = new createUser("Wasique" ,1234, "wasique@exam.com")
console.log(resultUser);
