// Creating objects -- 2 ways(object literals(doesnt form simpleton) and by constructor(forms a simpleton))

//1--- Forming objects by object literals

let symbol1 = Symbol("key1")

const user1 = {
    name: "Aryan", //here, name is automatically considered as a string -- "name"
    "full name": "Aryan Goyal",
    email : 'aryan.goyal@gmail.com',
    pass: 123,
    arr_info: [1,2,3,4],
    // symbol1 : "key1", -- here the type of symbol1 is string -- not symbol
    [symbol1] : "MyKey1"
}


//2--- Accessing elements from object--

//m1 -- 
console.log(user1.name)

//m2 -- 
console.log(user1["name"])

//NOTE -- m1 wont work for full name.. only m2 will work
console.log(user1["full name"])

//Accessing symbol element
console.log(user1[symbol1])

//3--- Modifying elements

user1.email = "aryan.goyal@abc.com"
console.log(user1.email)

//4--- freeze method -- we cant modify an object after freezing it

console.log(user1)
Object.freeze(user1)
user1.name = "Akash"
console.log(user1)

//5--- Functions inside objects, in js functions are also like a variable

const user2 = {
    name: "Aryan", //here, name is automatically considered as a string -- "name"
    "full name": "Aryan Goyal",
    email : 'aryan.goyal@gmail.com',
    pass: 123,
    arr_info: [1,2,3,4],
    [symbol1] : "MyKey1"
}

user2.fn1 = function(){
    console.log(`Hello ${this.name}`) //this is used to access the same object(user2) as in user2.fn1
}

console.log(user2.fn1)
console.log(user2.fn1())
console.log(user2)