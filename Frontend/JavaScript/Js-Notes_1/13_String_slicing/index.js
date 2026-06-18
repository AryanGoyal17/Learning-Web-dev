//Example of string slicing

let username = "Aryan Goyal"

let firstName;
let lastName;

firstName = username.slice(0, username.indexOf(" "))
console.log(firstName);

lastName = username.slice(username.indexOf(" ") + 1)
console.log(lastName);


//Extra:(Code below results in an Uncaught syntax Error)

// let string = "Hello World"
// console.log(string.slice(,string.indexOf("o")))