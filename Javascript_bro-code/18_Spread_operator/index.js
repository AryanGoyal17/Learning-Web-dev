//Spread operator with arrays

numbers = [1,5,3,2,4,6,7];

console.log(Math.max(numbers)) //Doesnt give correct o/p on passing whole array

console.log(Math.max(...numbers))
console.log(`Minimum value in numbers array:`, Math.min(...numbers))

//Spread operator with strings

name = "Aryan Goyal"

console.log([...name])
console.log([...name].join("-"))
console.log([...name].join(""))

//Spread operator to combine(merge) 2 arrays / append an element at end

fruits = ["mango", "apple", "pineapple", "orange"]
vegetables = ["carrot", "tomato", "onion"]

//Merging

food_merge = [...fruits, ...vegetables]
console.log(food_merge)

//Merge + append

food_merge_append = [...fruits, ...vegetables, "milk", "honey", 67]
console.log(food_merge_append)

//Creating a shallow copy of an array

fruits_copy = [...fruits]
console.log(fruits)
console.log(fruits_copy)

//Printing using spread operator

console.log(fruits)
console.log(...fruits)

