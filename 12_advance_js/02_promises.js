const promiseOne = new Promise(function(resolve,reject){
    // Do an async task
    // DB calls, cryptography, network call
    
    setTimeout(function(){
        console.log("Async task is complete");
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("promise consumed");
    
})

// another method
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("New Task");
        resolve()
    },1000)
    
}).then(function(){
    console.log("New Method resolve");
    
})