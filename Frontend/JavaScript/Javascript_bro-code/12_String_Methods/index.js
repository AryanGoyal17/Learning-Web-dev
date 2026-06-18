//Using different String Methods

//1-- .charAt

let string1 = "Hello"

console.log(string1.charAt(4)); //output = o
console.log(string1.charAt(-1)) //returns an empty string
console.log(string1.charAt(50)) //returns an empty string

//2, //3-- .indexOf, .lastIndexOf

let string2 = "Hello"

console.log(string2.indexOf("l"))
console.log(string2.lastIndexOf("l"))
console.log(string2.indexOf("z")) //.indexOf, .lastIndexOf returns -1 if character not present


//For strings inside indexOf, lastIndexOf
console.log(string2.indexOf("el"))
let string2_b = "HelloHello"
console.log(string2_b.lastIndexOf("el"))

//4--.length

console.log(string1.length)

//5-- .trim()

let string5 = "    Hello    "
console.log(string5)
console.log(string5.trim())

//6-- .toUpperCase(), .toLowerCase()

console.log(string2.toUpperCase())
console.log(string2.toLowerCase())
console.log(string2) //Changes are made to a copy... original string doesnt change by string Methods (IMPORTANT!!!!)

//7-- .repeat()

console.log(string2.repeat(3))

//8-- .startsWith(), .endsWith()

console.log(string2.startsWith("He"))
console.log(string2.startsWith("l"))
console.log(string2.endsWith(" "))
console.log(string2.endsWith("O"))
console.log(string2.endsWith("o"))

//9-- .includes()

console.log(string2.includes("ell"))
console.log(string2.includes("e"))
console.log(string2.includes("z"))

//10-- .replaceAll

console.log(string2.replaceAll("l", 0))
console.log(string2) //Original string doesnt change by string methods

//11-- .padStart, .padEnd

console.log(string2.padStart(8, 0))
console.log(string2.padEnd(8, 0))

console.log(string2.padStart(3, 0))//doesnt pad anything if number of characters specified in first argument < string length
console.log(string2.padEnd(3, 0))//doesnt pad anything if number of characters specified in first argument < string length