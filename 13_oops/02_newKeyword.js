function multiplyBy5(num){
    return num * 5;
}

multiplyBy5.power = 2;

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);
// function is a function but it is also an object..

function createUser(username, price){
    this.username = username;
    this.price = price;
    // this keyword is used for current context..
}

createUser.prototype.increment = function(){
    this.price++;
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.price}`);
    
}

const tea = new createUser("Wasique", 20);
const coffee = new createUser("Wasiq" ,200);

tea.printMe()
coffee.printMe()