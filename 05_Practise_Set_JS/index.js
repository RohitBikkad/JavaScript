//Q1 -

let a = 'Rohit'
let b = 23
console.log(a + b)
//O/p - Rohit23

//Q2 -
console.log(typeof (a + b))

//O/p - string

//Q3 -

const a1 = {
  name: 'Rohit',
  age: 23,
  isStudent: false,
}
console.log(a1)
// a1 = 5  //it will throw an error because it is a constant and can't be changed

//Q4 -

a1['friend'] = true
console.log(a1)
// o/p = {name: 'Rohit', age: 23, isStudent: false, friend: true}
a1['friend'] = false
console.log(a1)
//o/p = {name: 'Rohit', age: 23, isStudent: false, friend: false}

//Q5 -
const dict = {
    symptom : "An indication of a disorder or disease",
    appreciate : "recognize the full worth of",
    random : "Something that happens",
}
console.log(dict)