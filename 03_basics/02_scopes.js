
let a = 350

 if(true) {
    let a = 10
    // const b = 20
    var c = 30
    // console.log("Inner Block:", a);
 }

//  console.log(a);
// console.log(b);
// console.log(c);

    //   +++++++++++++ Scopes in Functions ++++++++++++++ 

function one(){
    const username = "Wasique"

    function two(){
        const uniqueId = 2502
        console.log(username);
        console.log(uniqueId);
    }
    // console.log(uniqueId);

     two()
}

one()

//    +++++++++++++ Scopes in If Else Statement +++++++++++++

if(true){
    const username = "Wasique"
    if(true) {
        const id = 2002
        console.log(username + id);
    }
    // console.log(id); You do not access value outside the scope
}
// console.log(username); You do not access value outside the scope

//    ++++++++++++ Interesting Topic +++++++++++++

console.log(addOne(5));
function addOne(num) {
    return num + 1
}

// console.log(addTwo());
const addTwo = function(addOne) {
    return num + 2
}
