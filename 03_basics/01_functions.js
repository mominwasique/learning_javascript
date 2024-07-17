// +++++++++++++++ Functions +++++++++++++++

// function addTwoNumbers(number1, number2){ ()parameter
//     console.log(number1 + number2);
// }
function addTwoNumbers(number1, number2){ // parameter
    // let result = number1 + number2
    // return result
    return number1 + number2
}

// const result = addTwoNumbers(4,6) // argument
// console.log("Result:",result);

function loginUserMsg(username = "Sam"){
    // if(username === undefined){ 
    //       OR
    if(!username){
        // console.log("please enter the username");
        return
    }
    

    return `${username} just logged in`
}

// console.log(loginUserMsg("Wasique"));

function calculateCartPrice(...num1){ 
    //--> Rest Operator
    // some time it is called Spread Operator
    return num1
}

// console.log(calculateCartPrice(200,500,999,550));

    // +++++++  Functions for Objects  +++++++     

const user = {
    username: "Wasique",
    price: 199
}

function handleObject(anyObject){
    // console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user)
// handleObject({
//     username: "Wasiq",
//     price:399
// })

//    ++++++++ Functions for Arrays ++++++++

const myNewArray = [100,200,300,400]

function returnValue(getArray){
    return getArray[1]
}

// console.log(returnValue(myNewArray));
// console.log(returnValue([200,400,361,123]));

