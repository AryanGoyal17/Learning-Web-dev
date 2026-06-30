//Summary--

///1-- Basic return fn
///2-- Handle the case when nothing is given in argument for username + NOTE
///3-- Rest parameter + NOTE
///4-- Passing objects into fn
///5-- Passing arrays into fn

//1-- Basic return function 

function add2numbers(number1, number2){
    return number1 + number2
}

let result = add2numbers(1,2);
console.log(result);

//2-- Handle the case when nothing is given in argument for username

function loggedIn(username){
    if(!username){ //undefined means false, !undefined = true, same as username === undefined//
        console.log("Please enter a valid username")
        return
    }

    return (`${username} has logged-in!`)
}

//NOTE: If in parameters we write username = "67", then if no username is given as argument, username becomes 67..
//      If we give a username as an argument, then it overwrites 67 and becomes the username..
//      Therefore, a username is never undefined and if statement never executed in this case

let status = loggedIn()
console.log(status)

//3-- Rest operator -- used when number of parameters is not known

function addNum(...num){ //Rest operator bundles the elements to form an array(packing), Spread operator(also ... can be used for unpacking)

    console.log(num)

    let size = num.length
    let sum = 0

    for(let i = 0; i < size; i++){
        sum += num[i]
    }
    return sum
}

let ans = addNum(1,2,3,4)
console.log(`Sum = ${ans}`)

//NOTE-- If parameters were val1, val2, ...num -- then val1 = 1, val2 = 2, and num = [3,4]

//4-- Passing objects into functions

function objPass(anyobject){
    console.log(anyobject.username)
}

let user = {
    username: 'Aryan',
    pass: 123
}

objPass(user)

//5-- Passing arrays into functions

function arrayPass(getarray){
    console.log(getarray[0])
}

let arr = [1,2,3,4]

arrayPass(arr)