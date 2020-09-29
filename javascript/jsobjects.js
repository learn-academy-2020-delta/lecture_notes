// Objects - 9/4/2020

// JSON - JavaScript Object Notation
var myObject = {
  key1: "value",
  key2: "value2",
  key3: "value3",
  key4: 4,
  key5: true
}
// accessing a value by dot notation
// console.log(myObject.key3)
// console.log(myObject.key4)
// console.log(myObject.key5)
// console.log(myObject.key6)


// objects with nested objects
var breakfast = {
  item1: "eggs",
  item2: "bacon",
  item3: "toast",
  item4: {
    fruit1: "banana",
    fruit2: "blueberry",
    fruit3: "strawberry"
  }
}
// console.log(breakfast.item4.fruit1)

// console.log(breakfast.item4.fruit1)
// console.log(breakfast.item4.fruit2)
// console.log(breakfast.item4.fruit3)

// destructuring
var { fruit1, fruit2, fruit3 } = breakfast.item4
// console.log(fruit1)
// console.log(fruit2)
// console.log(fruit3)


// methods - function that belongs to an object
// this - reference to the object inside of itself
var friends = {
  friend1: "Monica",
  friend2: "Rachael",
  friend3: "Chandler",
  names: function(){
    return `Our friend's names are: ${this.friend1}, ${this.friend2}, and ${this.friend3}`
  }
}
// method calls need paraens
// console.log(friends.names())

// doesn't work - returns undefined
// console.log(this.friend1)


// Objects in an array

var cash = [
  {worth: 1, person: "George"},
  {worth: 5, person: "Lincoln"},
  {worth: 10, person: "Hamilton"},
  {worth: 20, person: "Jackson"}
]
// first iteration - gets array of objects that are odd
// const oddMoney = (array) => {
//   return array.filter(value => {
//     return value.worth % 2 !== 0
//   })
// }
// output: [ { worth: 1, person: 'George' }, { worth: 5, person: 'Lincoln' } ]

// second iteration - gets just the names
// const oddMoney = (array) => {
//   let odds = array.filter(value => {
//     return value.worth % 2 !== 0
//   })
//   return odds.map(value => {
//     return value.person
//   })
// }
// console.log(oddMoney(cash))

// output: [ 'George', 'Lincoln' ]

// joins to output strings
const oddMoney = (array) => {
  let odds = array.filter(value => {
    return value.worth % 2 !== 0
  })
  console.log(odds)
  let names = odds.map(value => {
    return value.person
  })
  console.log(names)
  return names.join(" ")
}
console.log(oddMoney(cash))
//
// const oddMoney = (array) => {
//   let odds = array.filter(value => {
//     return value.worth % 2 !== 0
//   })
//   return odds.map(value => {
//     return value.person
//   }).join(" ")
// }
// console.log(oddMoney(cash))




// extracting a single index from the array
// console.log(cash[0])

// creating a custom function that returns certain items in the object
const money = (array) => {
  return array.map(value => {
    // return `each value: ${value}`
    // return `each value: ${value.person}`
    return value
  })
}
// console.log(money(cash))



// Vocab:
// JSON
// key:value pairs
// methods
// how methods are different than functions
// dot notation
// destructuring
// this
// mixing arrays and objects
// iterating over arrays of objects
