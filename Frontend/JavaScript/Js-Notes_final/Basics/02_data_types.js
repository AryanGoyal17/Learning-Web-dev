"use strict"; // treat all JS code as newer version

//Alert

// alert(3 + 3) This is for an alert on console only

console.log(3 
    +
     3) // Correct but code readability should be high

let state;
console.log(state) //undefined = output

//Data types

// number => 1 - 2^53 to 2^53 - 1
// bigint - for even large numbers
// string => ""
// boolean => true/false
// null => standalone value(temperature example...) -- intentionally empty(assigned as empty)
// undefined => declaration without assignment
// symbol => creating a unique value
// object -- stores multiple dtypes in key-value pairs

console.log(typeof undefined); // undefined
console.log(typeof null); // object - bug in js, but not fixed as it would break many websites

//Notes--

// use of -- "use strict";
// Alert while working with js in node.js terminal instead of console
// Declaration without assignment
// Data types(8)
// using typeof
// type of undefined = undefined and type of null = object