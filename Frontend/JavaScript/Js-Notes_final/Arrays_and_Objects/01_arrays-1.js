// Properties--

/// 1-- resizable
/// 2-- can contain diff data types
/// 3-- zero-indexed(js arrays are not associative)
/// 4-- js array-copy ops create shallow copies, not deep copies

// Array declaraton 

//M1

const arr1 = [1,2,3,4,true]

//M2

const arr2 = new Array(1,2,3,4, true, "Hi")
console.log(arr2)

// Array methods --

//1 -- push
//2 -- pop
//3 -- unshift -- not very computationally efficient
//4 -- shift

arr1.push(5)
console.log(arr1)

arr1.pop()
console.log(arr1)

arr1.unshift(91)
console.log(arr1)

arr1.shift()
console.log(arr1)

//5 -- includes--- arr_name.includes(element) -- returns true/false
//6 -- indexOf(if element isnt present it returns -1)
//7 -- join -- returns a string of array elements

console.log(arr1.join())
console.log(typeof(arr1.join()))

//8 -- slice
//9 -- splice

console.log("A ",arr1)
console.log(arr1.slice(1,3))
console.log("B ",arr1)

console.log("C ",arr1)
console.log(arr1.splice(1,3)) // last element included and elements included in splice are removed from original array
console.log("D ",arr1)

//10 -- length
console.log(arr1.length)