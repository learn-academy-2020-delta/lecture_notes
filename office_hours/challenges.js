// //Clean Function: Create a function that filters false, null, 0 and blank values from an array.

// var filterArrayValues = [58, " ", "abcd", true, null, false, 0]

// const dataFilter = ( array ) => {
//     let trimmedArray = array.map(value => {
//         if(typeof value === "string") {
//             return value.trim()
//         } else {
//             return value
//         }
//     } )
//     return trimmedArray.filter( value => value )
// } 

// console.log(dataFilter(filterArrayValues))


//In this challenge you will be given a relation between two numbers, written as a string.
//Write a function that determines if the relation is true or false.
//Example: isTrue("2 = 2") ➞ true


// function isTrue(relation) {
//     let splitArray = relation.split(" ")
//     if(splitArray[1] === "="){
//         return parseInt(splitArray[0]) == parseInt(splitArray[2])
//     } else if (splitArray[1] === "<"){
//         return parseInt(splitArray[0]) < parseInt(splitArray[2])
//     } else if (splitArray[1] === ">"){
//         return parseInt(splitArray[0]) > parseInt(splitArray[2])
//     }else if (splitArray[1] === "<"){
//         return parseInt(splitArray[0]) < parseInt(splitArray[2])
//     }
// }

// console.log(isTrue("2 > 10"))

// Edabit challenge solution 2: EVAL
const isTrue = (string) => {
    return eval(string.replace('=', '==='))
} 

console.log(isTrue("121=121"))

