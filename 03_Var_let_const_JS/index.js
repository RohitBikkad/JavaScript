console.log('Const, Let , Var in JS')

// use let only because when we use var its update when you declare iton any where
// var b = "Rohit";
// {
//     var b = 'this'
//     console.log(b)
// }
// console.log(b)

// o/p =   this
//         this
//so this way its change the whole vriable

// let d = "Rohit";   here its global scope
// {
//     let d = 'this'   //here its local scope
//     console.log(d)   // that's why here print this
// }
// console.log(d)       //this is globa scope that's why here print Rohit

// // o/p =   this
// //         Rohit

console.log('const in JS')

const author = 'Rohit'
// let author = "Rohit"     //throws error as const variable can't be changed
//author = "Rohit" //throws error as const variable can't be changed
console.log(author)
