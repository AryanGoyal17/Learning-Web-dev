//1---- Merge 2 arrays using spread operator and concat

//Incorrect ----- 

const arr1 = [1,2,3,4]
const arr2 = [5,6,7,8]

arr1.push(arr2) // doesnt merge the array as intended + does the change in original arr1

console.log(arr1) 

// M1-- correct(concat)

// concat returns a new array

arr1.pop()

const arr3 = arr1.concat(arr2)
console.log(arr3)

//M2-- correct(spread operator)

const arr4 = [...arr1, ...arr2]
console.log(arr4)

//2---- flat method for arrays

const arr5 = [1, 2, 3, 4, [5, 6, 7, [1, 2]], [3, 4]]
console.log(arr5.flat(Infinity)) //depth = infinity will flatten the array for all depths

//3---- use of Array.isArray, Array.from, Array.of

//Array.isArray

console.log(Array.isArray(1,2,3,4))
console.log(Array.isArray([1,2,3,4]))
console.log(Array.isArray("Aryan"))

//Array.from

console.log(Array.from("Aryan"))
console.log(Array.from({name : "Aryan"})) //when given data structure cant be converted to array, it returns empty array
                                          //we need to specify if we want array of keys/ array of values

//Array.of -- form an array from given set of elements

let s1 = 1
let s2 = 2
let s3 = 3

console.log(Array.of(s1, s2, s3))