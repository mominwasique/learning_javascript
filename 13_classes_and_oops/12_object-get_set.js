
const User = {
    _name: "Wasique",
    _email: "Wasique@123",

    get name(){
        return this._name.toUpperCase();
    },
    set name(value){
        this._name = value;
    },

    get email(){
        return this._email.toUpperCase();
    },
    set email(value){
        this._email = value;
    }
}

const newUser = Object.create(User)
console.log(newUser.name);
console.log(newUser.email);
