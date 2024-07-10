// const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Wasique"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email:"exmaple@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Mohd",
            lastname: "Wasique"
        }
    }
} 
// console.log(regularUser.fullname.userfullname);

const obj1 = {1:"name", 2:"email" }
const obj2 = {3:"name", 4:"email" }
// const obj3 = {obj1,obj2}
// console.log(obj3);
//const obj3 = Object.assign({},obj1,obj2) //assign method
//console.log(obj3);
const obj3 = {...obj1,...obj2}
// console.log(obj3);

const users =[
    {
        id:25,
        name:"mohd"
    },
    {
        id:15,
        name:"momin"
    }
]

// console.log(users[0].name);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('id'));

// +++++++++ Object de-structure  ++++++++++

const course = {
    name: "Javascript",
    price: "999",
    courseInstructor: "Hitesh"
}

const {courseInstructor:instructor} = course
console.log(instructor);

// ++++++++++++  JSON  +++++++++++++++
// {
//     "name": "Wasique",
//     "id": 512,
//     "email": "momin@gmail.com"
// }

[
    {},
    {},
    {}
]