let username = window.prompt("Enter your username: ")

/////////Without Method chaining

// username = username.trim();

// let firstLetter = username.charAt(0);
// firstLetter = firstLetter.toUpperCase();

// let RestLetters = username.slice(1);
// RestLetters = RestLetters.toLowerCase();

// username = firstLetter + RestLetters;

// console.log(username);

/////////With Method Chaining

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

console.log(username);


//NOTE: --- Uncomment code without method chaining and comment out the one with Method chaining to see the o/p without method chaining
// o/p comes the same .. its just that method chaining reduces lines of code and code complexity/



//EXTRA

const PI = 3.14;

console.log(PI == "3.14")
console.log(PI === "3.14")
console.log(PI != "3.14")
console.log(PI !== "3.14")
//

