// 2 types of memory -- stack and heap

//1--
//Stack memory -- Primitive, Heap memory -- Non-primitive(reference)

//2--
//For values in stack memory, changes occur in a copy
//For values in heap memory, changes occur in the original(as reference of memory location is given)

//NOTE:: -- Diagramn of stack and heap -- DONE

//3--
//Example for stack

let name1 = "Aryan"
let name2 = name1 //copy of name1 is given here
name2 = "Goyal"

console.log(name1)
console.log(name2)
//name1 doesnt change due to change in name2

//4--
//Example of heap

let user1 = {
    email : "abc@gmail.com",
    pass: 123
}

let user2 = user1 
user2.email = "abc@yahoo.com"

console.log(user1, user2) 
//user1's info changes with change in user2's info


//MAIN DIFFERENCE -- in stack(for primitive) -- changes occur in a copy, not in original
//                -- in heap(for non-primitive) -- changes occur in original, not in a copy