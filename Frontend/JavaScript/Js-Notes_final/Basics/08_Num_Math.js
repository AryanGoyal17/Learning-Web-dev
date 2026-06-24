//Numbers

// 1-- Forming a number by invoking the number object

const num1 = new Number(100)
console.log(num1)

// 2-- Number methods

/// a -- toString

console.log(num1.toString().length)

/// b -- toFixed (to reduce the number of places after decimal, when precision is very high)

console.log(num1.toFixed(2)) //returns a string

/// c -- toPrecision -- returns a string

const num2 = 123.8956

console.log(num2.toPrecision(4))
console.log(num2.toPrecision(3))
console.log(num2.toPrecision(5))

/// d -- toLocaleString

const num3 = 1000000

console.log(num3.toLocaleString()) //looks at default locale of computer(here, its -- india)
console.log(num3.toLocaleString('en-IN'))
console.log(num3.toLocaleString('en-US'))

// Math in Js

console.log(Math)
console.log(Math.PI)

// 1-- Math ops

console.log(Math.abs(-4.52))
console.log(Math.round(3.6))
console.log(Math.floor(3.9))
console.log(Math.ceil(4.1))
console.log(Math.min(1,2,3,4))
console.log(Math.max(1,2,3,4))

// 2-- Random number general formula

///eg -- for random number between 10 and 20

const min = 10
const max = 20

console.log(Math.floor((Math.random() * (max - min + 1)) + min))

