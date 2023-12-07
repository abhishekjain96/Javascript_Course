// Two types of Data Types
/*
1. Premitive Datatype
2. Reference Datatype(Non-Premitive Datatype)
*/

// 1. Premitive
/*
(i) String
(ii) Number
(iii) Boolean
(iv) Undefined
(v) Null
(vi) BigInt
(vii) Symbol
*/

const userName = "Abhishek Jain"
const age = 21
const isLoggedin = true
let email;
let money = null
let BigNumber = 1298765346n

const id = Symbol("123")
const userid = Symbol("123")
console.log(id==userid)

// 2. Non-Premitive
/*
(i) Array
(ii) Object
(iii) Function
*/
const car = ["maruti","scarpio","fortnuer"]

let myObj = {
    userName:"Abhishek Jain",
    age:21,
    email:"jainabhishekbcamca"
}

let myFunction = function(){
    console.log("Hello World");
}
myFunction();

console.table([typeof car,typeof myObj,typeof myFunction, typeof userName, typeof age, typeof isLoggedin, typeof email, typeof money, typeof BigNumber, typeof id])

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Premitive) , heap(Non-Premitive)

let myAcc = 12345;
let anoAcc = myAcc;
anoAcc = 6789
console.log(anoAcc)
console.log(myAcc)

// heap example

let userOne = {
    userName:"Abhishek",
    age: 20
}
let userTwo = userOne;
userTwo.age = 21

console.log(userTwo.age)
console.log(userOne.age)
