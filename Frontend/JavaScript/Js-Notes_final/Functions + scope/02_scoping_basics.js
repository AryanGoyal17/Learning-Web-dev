//1-----------var cant cross functional scope but can cross block scope
//2-----------example to understand scoping
//3-----------2 methods to create a fn and the difference while calling


//1-----------var cant cross functional scope but can cross block scope
function f1(){
    let a = 100;
    const b = 200;
    var c = 300;
    d = 400 //here d is created in global scope
}

f1();

//a,b,c throws an error---
// console.log(a)
// console.log(b) 
// console.log(c) 
console.log(d) 

//var cant cross functional scope...

if(true){

    let a1 = 100;
    const b1 = 200;
    var c1 = 300;
    d1 = 400 //here d1 is created in global scope

}

//a,b throw an error..
// console.log(a1)
// console.log(b1) 
console.log(c1) 
console.log(d1) 

//var can cross block scope

//2----------- example to understand scoping

function one(){
    const username = "aryan"

    function two(){
        const website = "google.com"
        console.log(username); //(username can be accessed since its inside scope of one)
    }
    // console.log(website); -- error(website is not present outside scope of two)

     two()

}

one()

if (true) {
    const username = "aryan"
    if (username === "aryan") {
        const website = "google.com"
        console.log(username + website); 
    }
    // console.log(website); -- cant be accessed
}

// console.log(username); -- cant be accessed

//3----------2 methods to create a fn + difference

//M1-- as done above
//M2-- by storing inside a variable

//m1--

three() //-- this works
function three(){
    return 1+1
}

//m2--

//fn4() -- unlike m1 this doesnt work here for m2....
const fn4 = function(){
    return 1+1
}
fn4()