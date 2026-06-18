//Example of nested-if statements

let age = 20;
let hasLicense = false;

if(age >= 18){
    console.log(`You are eligible to have a driving license`)

    if(hasLicense){
        console.log(`You have a driving license`)
    }

    else{
        console.log(`You dont have a driving license`)
    }
}

else if(age < 0){
    console.log(`Age is invalid`)
}

else{
    console.log(`You dont have a driving license`)
}