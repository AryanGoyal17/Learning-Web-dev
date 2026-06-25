//1--- Creating objects through constructor method

const obj1 = new Object() //difference from object literals method -- this is a singleton, everything else is same

//2--- Objects inside objects

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "aryan",
            lastname: "goyal"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

//3--- Merging objects

//M1 -- returnedObj = Object.assign(target, source), here source is put inside target and given to returnedObj

const obj3 = {1 : "a", 2 : "b"}
const obj4 = {3 : "c", 4 : "d"}

const obj5 = Object.assign({}, obj3, obj4)
console.log(obj5)

const obj6 = Object.assign(obj3, obj4) //elements of obj4 are put inside obj3 and changes occur in original obj3
console.log(obj6)
console.log(obj3)
console.log(obj6 === obj3) //true

//M2 -- using spread operator

const obj7 = {1 : "a", 2 : "b"}
const obj8 = {3 : "c", 4 : "d"}
const obj9 = {...obj7, ...obj8}
console.log(obj9)

//4--- use of .keys, .values, .entries ---- used while getting users from databases etc..

const obj10 = {
    name: "Aryan",
    email: "aryan.goyal@gmail.com",
    pass : 123
}

console.log(Object.keys(obj10)) //returns an array of keys
console.log(Object.values(obj10)) //returns an array of values
console.log(Object.entries(obj10)) //returns an array of arrays(entries)

//5--- to check if user has a property/key -- hasOwnProperty() [returns true/false]

console.log(obj10.hasOwnProperty('name'))
console.log(obj10.hasOwnProperty('password'))