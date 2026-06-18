let fruits = ["apple", "banana", "coconut"]

//Prints array with index and total array length
console.log(fruits)

//Accessing array elements

console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])
console.log(fruits[3])// index out of bounds returns undefined...
console.log(fruits[-1])// index out of bounds returns undefined

//Modifying array elements

fruits[1] = "pineapple"
console.log(fruits)

//Adding elements to array

//M1
fruits[3] = "Guava"
console.log(fruits)

//M2(push)
fruits.push("Orange")
console.log(fruits)

//Removing elements from last(pop)

fruits.pop();
fruits.pop();
fruits.pop();
console.log(fruits);

//To add and remove elements from beginning

fruits.unshift("mango")//add
console.log(fruits);

fruits.shift(); //remove
console.log(fruits)

//To find length of array

console.log(fruits.length)

//Finding the index of an element

let index1 = fruits.indexOf("apple")
console.log(index1)

let index2 = fruits.indexOf("aryan") //returns -1 if NOT found...
console.log(index2)

//Printing elements of array using for loop

//Adding more elements in array(just for better visualization later)
fruits.push("mango")
fruits.push("orange")

//a-- Normal order

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

//b-- Reverse order

for(let i = fruits.length - 1; i >= 0; i--){
    console.log(fruits[i])
}

//c-- For loop (enhanced version)



//IMPORTANT(***) -- for_in (prints the indexes), for_of(prints the values(elements))

for(let fruit in fruits){
    console.log(fruit)
}

numbers = [1,4,5,6,3,2]

for(let number in numbers){
    console.log(number)
}

for(let fruit of fruits){
    console.log(fruit)
}

for(let number of numbers){
    console.log(number)
}

//Sorting arrays

//Sorting in ascending order(as in dictionary for strings)

fruits.sort()

for(let fruit of fruits){
    console.log(fruit)
}

//Sorting in descending order

numbers.sort().reverse()
for(let number of numbers){
    console.log(number)
}

//EXTRA::(Js Arrays can store elements of different data-types...)

array1 = ["Hello", "Aryan", 1, 2, true]
console.log(array1)