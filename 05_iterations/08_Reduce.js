
const nums = [1,2,3,4]

// const total = nums.reduce( (acc,currVal) => {
//     return acc + currVal
// },0)

// const total = nums.reduce( (acc,currVal) => 
//     acc + currVal, 0 )
// console.log(total);

const buyCourse = [
    {
        courseName: "Android Developement",
        price: 2000
    },
    {
        courseName: "Web Developement",
        price: 1000
    },
    {
        courseName: "Machine Learning",
        price: 5000
    },
    {
        courseName: "Artificial intelligence",
        price: 8000
    }
]

const totalPayment = buyCourse.reduce( (acc,item) => 
    acc + item.price, 0 )

console.log(totalPayment);