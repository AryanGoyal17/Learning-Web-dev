//Functions example(check if @ is present in the email id or not)

function emailCheck(email){

    // if(email.includes("@")){
    //     return true;
    // }
    // else{
    //     return false;
    // }

    return email.includes("@") ? true : false;
}


if(emailCheck("aryan.goyaltietgmail.com")){
    console.log(`Valid E-mail Id`)
}
else{
    console.log(`Not a valid E-mail Id`)
}

//Variable Scope(priority(local vs global) example)..

let x = 3;

function check1(){
    let x = 2;
    console.log(x)
}

check1()// Preference -- (local > global)

//
