// Dates

let myDate = new Date()
console.log(myDate.toString());
// Output: Day Month Date Year Hour Minutes Seconds
console.log(myDate.toDateString());
// Output: Day Month Date Year
console.log(myDate.toLocaleString());
// Output: m/dd/yyyy ,  Hour:Minute:Seconds Meridiem 
console.log(typeof myDate); 
// type of date is (Object)..

  let myCreatedDate1 = new Date(2023, 0, 23, 5, 3)
 let myCreatedDate2 = new Date(2023, 0, 23)
 let myCreatedDate3 = new Date("2023-01-14")
 let myCreatedDate4 = new Date("01-14-2023")
 console.log(myCreatedDate1.toLocaleString());
 console.log(myCreatedDate2.toLocaleString());
 console.log(myCreatedDate3.toLocaleString());
 console.log(myCreatedDate4.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate1.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

console.log(newDate.toLocaleString('default', {
    weekday: "long",
    
}))
