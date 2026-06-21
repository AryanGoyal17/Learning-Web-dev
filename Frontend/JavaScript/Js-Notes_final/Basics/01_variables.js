//Three types of variables -- const, let , var

//ending with ; not compulsory

const v1 = 3.14;
let v2 = "My name is Aryan"
var v3 = 400

console.log(v1, v2, v3)
console.table([v1, v2, v3]) //Another method to print variables

// v1 = 1; Error -- as value of a constant cant be changed

//--- Difference between let and var -- use of var is not encouraged due to its confusing scoping rules[in block scope, functional scope]

//Another method to create a variable(not encouraged--)

v4 = 12;
console.log(v4)


//Notes --

// 3 types of variables -- const, let, var[dont use var, use let]
// Value of const cant be changed
// use of console.table
// difference between let and var + why var shouldnt be used
