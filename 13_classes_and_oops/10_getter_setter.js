class User{
    constructor(email,password){
        this._email = email;
        this._password = password;
    }

    get email(){
        return this._email.toUpperCase();
    }

    set email(value){
        this._email = value;
    }

    get password(){
        return `${this._password}_123`
    }

    set password(value){
        this._password = value;
    }
}

const newUser = new User("w@code.com","Wasiq")
console.log(newUser.email);
console.log(newUser.password);
