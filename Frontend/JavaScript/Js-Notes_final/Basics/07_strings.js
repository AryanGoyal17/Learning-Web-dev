// 1-- Using strings with placeholders(string interpolation)

let name = "Aryan"
let pass = 123

console.log(`My name is ${name} and the password is ${pass}`) // String methods can be used here

// 2-- Forming a string by invoking an object

const name2 = new String("Aryan")

console.log(name2) //see the o/p

// 3-- Checking the type of name2 by using __proto__ and typeof -- its an object

console.log(typeof(name2))
console.log(name2.__proto__)

// 4-- Accessing elements in string object

console.log(name2[4])

// 5 -- String methods

//a-- length
//b-- toLowerCase
//c-- charAt
//d-- indexOf
//e-- substring
//f-- slice
//g-- trim
//h-- replace
//i-- includes
//j-- split

/// a -- length

console.log(name2.length)

/// b -- to lower case

console.log(name2.toLowerCase)
console.log(name2.toLowerCase())
console.log(name2) //On using string methods, changes occur in a copy, not in the original (its still a string(in form of obj)) -- stack memory

/// c -- charAt

console.log(name2.charAt(2))

/// d -- indexof

console.log(name2.indexOf('y'))

/// e -- substring

console.log(name2.substring(0, 4)) //-ve indices cant be used with substring

/// f -- slice

console.log(name2.slice(-5, 3)) // -ve indices can be used with slicing

/// g -- trim

const name3 = "     Aryan    " //string methods can be used without invoking string as an object too

console.log(name3.trim()) //trim is used for whitespaces and line terminators

/// h -- replace

const url = "https://www.abc.com/web%20dev" //spaces in url are replaced by %20 automatically(urln encoding)

console.log(url.replace('%20', '-'))

/// i -- includes

console.log(name2.includes('Ary'))
console.log(name2.includes('abc'))

/// j -- split

console.log(url.split("-"))
console.log(name2.split('y'))