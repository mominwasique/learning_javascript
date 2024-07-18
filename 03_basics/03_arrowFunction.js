const user = {
    username: "Wasique",
    id: 2502,

    welcomeToPage: function() {
        console.log(`${this.username}, Welcome to login page`);
        // console.log(this);
    }
}
// user.welcomeToPage()
// user.username = "Wasiq"
// user.welcomeToPage()
// console.log(this); 
// output is {} because we are using node environment..
// If we use browser output is Window

// function simple(){
    // id: 2502
    // console.log(this.id);
    // We cannot access any value in function using this
    // output: undefined
// }
// simple()

// const simple = function(){
//     username: "Wasique"
//     console.log(this.username);
//     // output:undefined
// }

// const simple = () =>{
//     price: 999
//     console.log(this.price);
//     console.log(this);
// }

// simple()

// const add = (num1, num2) => {
//     return num1 + num2
// }

          //Implicit return           
// const add = (num1, num2) =>  num1 + num2 
// const add = (num1, num2) =>  ( num1 + num2 ) 
const add = (num1, num2) =>  ( {username: "Wasique"} ) 

console.log(add(3,6));