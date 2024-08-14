// const promiseOne = new Promise(function(resolve,reject){
//     // Do an async task
//     // DB calls, cryptography, network call
    
//     setTimeout(function(){
//         console.log("Async task is complete");
//         resolve()
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("promise consumed");
    
// })

// // another method
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("New Task");
//         resolve()
//     },1000)
    
// }).then(function(){
//     console.log("New Method resolve");
    
// })

// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({ username: "Mohd" , email: "mohd@example.com" })
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
    
// })

// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false;
//         if (!error) {
//             resolve({username: "Wasique", password: "wasique@123"});
//         } else {
//             reject(`ERROR: Something went wrong`);
//         }
//     }, 1000)
// })

// promiseFour
// .then((user) => {
//     console.log(user);
//     return user.username;
// })
// .then((myUsername) => {
//     console.log(myUsername);
// })
// .catch((error) => {
//     console.log(error);
    
// })
// .finally( () => {
//     console.log(`The promise is either resolved or rejected `);
// })

// const promiseFive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false;
//         if (!error) {
//             resolve({username: "Wasique2502", password: "wasique@123"});
//         } else {
//             reject(`ERROR: Something went wrong`);
//         }
//     }, 1000)
// })

// async function promiseFiveConsume() {
//      try {
//         const response = await promiseFive;
//         console.log(response);
//      } catch (error) {
//         console.log(error);
        
//      }
     
// }

// promiseFiveConsume()

// // async function getAllUsers() {
// //     try {
// //         const response = await fetch('https://jsonplaceholder.typicode.com/users');

// //         const data = await response.json()
// //         console.log(data);
        
// //     } catch (error) {
// //         console.log(`Error: ${error}`);
        
// //     }
// // }

// // getAllUsers()

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(function(response){
//     return response.json()
// }).then(function(data){
//     console.log(data);
    
// }).catch(function(error){
//     console.log(`ERROR: ${error}`);
    
// })