//While Loop example

// let loggedIn = false;
// let username;
// let password;

// while(!loggedIn){

//     username = window.prompt("Enter your username: ")
//     password = window.prompt("Enter your password: ")

//     if(username == "Aryan" && password == 1234){
//         loggedIn = true;
//         console.log(`You have succesfully logged In!!`)
//     }

//     else{
//         console.log(`Username/Password is incorrect. Enter again to login!!`)
//     }
// }

//Same example as of while loop using Do-while Loop

let loggedIn;

let username;
let password;

do{

     username = window.prompt("Enter your username: ")
     password = Number(window.prompt("Enter your password: "))

     if(username === "Aryan" && password === 1234){ //While doing strict comparison, either write password as "1234" or typecast input
         loggedIn = true;
         console.log(`You have succesfully logged In!!`)
     }

     else{
        loggedIn = false;
        console.log(`Username/Password is incorrect. Enter again to login!!`)
     }
     
}while(!loggedIn)



//For Loop counter example(same in C)

for(let i = 10; i > 0; i--){
    console.log(i)
}

console.log("Happy Birthday!!")