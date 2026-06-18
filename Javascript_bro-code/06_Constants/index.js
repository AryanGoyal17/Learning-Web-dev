const PI = 3.14159

// PI = 1 (This line gives an error in console since PI is a constant)

let radius;
let Circumference;

radius = window.prompt(`Enter the radius of the circle: `)
radius = Number(radius) //The code works correctly even without Type-casting, because since a string cant be multiplied, Js converts it to a number automatically
Circumference = 2 * PI * radius

console.log(`The Circumference of the Circle is ${Circumference}`)