console.log('Primitive Data Type in JS')

// nn bb ss u
//null number bolean BigInt symbol string undefined

let a = null // it shows null
let b = 10 // it shows number
let c = true // it shows boolean : can be false also
let d = BigInt(10) // it shows number
let e = 'Rohit' // it shows string
let f = Symbol('Rohit') // it shows symbol
let g = undefined // it shows underdefined

console.log(a, b, c, d, e, f, g)

// o/p =  null 10 true 10n Rohit Symbol(Rohit) undefined

console.log(
  typeof a,
  typeof b,
  typeof c,
  typeof d,
  typeof e,
  typeof f,
  typeof g
)

// o/p =  object number boolean bigint string symbol undefined

//********************************************************************************************************* */

//Non Primitive Data types in JS - Object

//-------------------------object in JS---------------------------------------------------------------/

// const item = {
//     "Rohit" : true,
//     "Bikkad" : 23,
//     "Rohit" : "Rohit"
// }
// console.log(item)
//its gives O/p like this : { Rohit: 'Rohit', Bikkad: 23 } so the value of Rohit is printed only once in the output

const item = {
  Rohit: true,
  Bikkad: 23,
  Student: undefined,
}
console.log(item)
// o/p = { Rohit: true, Bikkad: 23, Student: undefined }

const item1 = {
  Rohit: true,
  Bikkad: 23,
  Student: undefined,
}
console.log(item1['Rohit'])
// o/p = true
console.log(item1['Bikkad'])
// o/p = 23
console.log(item1['Stu']) // stu is not defined in item1 that's why it gives undefined
// o/p = undefined
