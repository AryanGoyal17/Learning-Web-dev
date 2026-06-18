//Variable declaration and assignment

let v1;
v1 = 100;
let price = 10.99;
let cgpa = 9.3;

let email = "aryan.goyaltiet@gmail.com";
let name = "Aryan";

let isOnline = true; 
let isForSale = false;

// true = 1, false = 0, is not there in JAVA-SCRIPT..

//Number data type

console.log(typeof v1);
console.log(v1);

console.log(typeof price);
console.log(`The price is $${price}`); //If you use "" instead of `` it will be treated as a string and price not printed

console.log(`The data type of cgpa is ${typeof cgpa}`);
console.log(`cgpa : ${cgpa}`);

//String data type

console.log(typeof email);
console.log(`E-mail: ${email}`);

console.log(`The data type of name is ${typeof name}`);
console.log(`Name: ${name}`);

//Boolean data type

console.log(typeof isOnline);
console.log(`Is he Online: ${isOnline}`);

console.log(typeof isForSale);
console.log(`Is the car for sale: ${isForSale}`);

//Displaying variables directly on webpage

let fullName = "Aryan Goyal";
let age = 18;
let email_2 = "aryan.goyaltiet@gmail.com";
let isStudent = true;

document.getElementById("p1").textContent = `Name: ${fullName}`;
document.getElementById("p2").textContent = `Age: ${age}`;
document.getElementById("p3").textContent = `E-mail: ${email_2}`;
document.getElementById("p4").textContent = `Student(true/false): ${isStudent}`;


