// +++++++++++++++ Function +++++++++++++++

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
        console.log("please enter the username");
        return
    }
    

    return `${username} just logged in`
}

console.log(loginUserMsg("Wasique"));

