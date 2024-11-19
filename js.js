// console.log("velkommen til en introduksjon til javascript")

// Variables

// let number = 5
// console.log(number)

// const y = 10
// console.log(y)

// in js we use camelCase - every word after the first one is capitalized, no space

// const introHeaderOne = document.getElementById("")

// Datatypes

//String

// let string = "text"

//Integer

// let number = 10

// Float 

// let float = 10.5

// Boolean
// let boolean = true

//Array`
// const fruits = ["Apple", "Orange", "Pear", "Banana"]
// console.log(fruits)

// const numbers = ["18", 15, 11.7]

//Object
// const person = {
//     firstName: "Lyub",
//     lastName: "Dim",
//     age: 35,
//     hobbies: ["painting", "gym", "dogs", "gaming"]
// }
// console.log(person)

//Operators

// let x = 6
// let y = 20
// let z = x + y
// console.log(z)

// let human = "lyumii"
// console.log(human)

// //Comparison operators
// if (x === y) {
//     console.log("x is equal to y");
// } else {
//      console.log("x is not equal to y");
// }


// conditionals

// let x = 10;

// if (x == 10) {
//     console.log("true")
// } else {
//     console.log("false")
// }

// age = 19;

// age >= 18 ? console.log("lovelig") : console.log("ulovlig")

// let drink = age >= 18 ? "beer" : "milk";

// console.log(drink);

// let userAge = 19;
// let userName = "";

    //both need to be true
// if (!userName && userAge >=18) {
//     console.log("User has a name and is over 18")
// } else {
//     console.log("User does not have a name or is under 18")
// }

    //one needs to be true
// if (userName || userAge >=18) {
//     console.log("drinks");
// } else {
//     console.log("No drink for you");
// }

// Functions

// function test() {
//     console.log("hei fra test funksjonen")
// }

// test()

// let arrow = () => {
//     console.log("hei fra arrow funksjoner")
// }

// arrow()

// let returnTest = () => {
//     console.log("return test")
//     return "hei"
//     // unreachable code
//     console.log("return test")
// }
// returnTest()

// let returnTestTwo = () => {
//     let hello = "Hello";
//     return hello
// }
//  console.log(returnTestTwo);

//  console.log(returnTestTwo());

//  let doubler = (num1, num2) => {
//     return num1*num2;
//  }
//  console.log(doubler(30,2));

//  const calculator = (num1, num2, operator) => {
//     let total = 0;
//     if (operator === "+") {
//         return num1 + num2;
//     } else if (operator === "-") {
//         return num1 - num2;
//     } else if (operator === "*") {
//         return num1*num2;
//     } else {
//         return "Invalid Operator";
//     }
//  }
 
//  

const calculator = (num1, num2,  operator) => {
    let total = 0;
    switch (operator) {
        case "+":
            return num1+num2;
        case "*":
            return num1*num2;
        case "-":
            return num1-num2;
    }
}

console.log(calculator(5, 2, "-"));