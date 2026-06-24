// Dates -----------

let date1 = new Date()

console.log(date1)

//1-- different formats to show date + typeof-- 
console.log(date1.toDateString())
console.log(date1.toISOString()) //default-- same o/p as console.log(date1)
console.log(date1.toLocaleString())
console.log(date1.toLocaleDateString())

//type -- object
console.log(typeof(date1)) 

//2-- different methods to assign a date to a variable

let date2 = new Date(2026, 5, 24)
console.log(date2.toLocaleString())

let date3 = new Date(2026, 5, 24, 5, 3)
console.log(date3.toLocaleString())

let date4 = new Date("2026-06-24")
console.log(date4.toLocaleString())

let date5 = new Date("06-24-2026")
console.log(date5.toLocaleString())

// NOTE: in js, months start from 0 , 5 = june
// NOTE: in js, days start from monday, 3 = wednesday

// 3-- Date methods

console.log(date1.getFullYear())
console.log(date1.getDay()) // 3 = wednesday
console.log(date1.getMonth() + 1) // 5 + 1 = 6 = june

// NOTE: above date methods can be used to print month, day etc. in string interpolation

// 4-- customizing the o/p while printing with LocaleString

console.log(date2.toLocaleString('default', { //default is the timezone
       weekday: 'long' //other customizations can also be done
}))

// Time -----------

//1--
const time1 = Date.now()
console.log(time1) // shows miliseconds passed since 1-jan, 1970

//NOTE: or comparing times, get the no of miliseconds for both the time and compare..

//2-- Converting time to seconds..
console.log(Math.floor(time1/1000)) //use floor/round, dont use ceil

//3-- To get the time for a particular date,

const time2 = date2.getTime()
console.log(time2) // now time1 and time2 can be compared