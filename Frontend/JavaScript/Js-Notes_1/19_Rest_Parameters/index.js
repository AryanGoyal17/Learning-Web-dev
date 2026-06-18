//Rest parameters


//Example-1
function getFood(...foods){
    return foods
}

const food1 = "mango"
const food2 = "papaya"
const food3 = "apple"
const food4 = "grapes"
const food5 = "banana"
const food6 = "watermelon"

let foods = getFood(food1, food2, food3, food4, food5, food6)
console.log(foods)
console.log(...foods)


//Example-2(Creating a function which returns an average)

function average(...numbers){
    let result = 0;

    for(let number of numbers){
        result += number;
    }

    return (result / (numbers.length))
}

let average_final = average(1,2,3,4,5)

console.log(`Average = ${average_final}`);


//Example-3(Combining Strings)

function combineString(...string_combine){

    return string_combine.join(" ")
}

let fullName = combineString("Mr.", "Aryan", "Goyal");
console.log(`FullName = ${fullName}`);
