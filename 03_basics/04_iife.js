 // Immediately Invoked Function Expression(IIFE)

 ( function newFunc(){
   // Named IIFE
    console.log(`Normal Function`);
 }) ();

//  ( function Func(){
//     console.log(`Error Function`);
//  })() 

// ( () => {
//    console.log(`Arrow Function`);
// })()
( (name) => {
   // Un named IIFE
   console.log(`User is ${name}`);
})("Wasique")