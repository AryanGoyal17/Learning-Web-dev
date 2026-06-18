//If purchase amount exceeds some predefined amount, give 10% discount otherwise no discount...

let purchaseAmount = 105;

let discount = purchaseAmount >= 100 ? 10 : 0;

console.log(`The amount of money you have to pay is $${purchaseAmount - ((purchaseAmount * discount)/100)}`);

// print("\n") Dont use this in Js as it treats it as print() .. and then asks to print the webpage whenever webpage is reloaded

//Switches program(print grade of student after comparing with marks)::

let marks = 10;
let grade;

switch(true){

    case marks >= 90 && marks <=100:
        grade = 'A';
        // console.log(grade)
        break;

    case marks >= 70 && marks < 90:
        grade = 'B';
        // console.log(grade)
        break;

    case marks >= 50 && marks < 70:
        grade = 'C';
        // console.log(grade)
        break;

    default:
        grade = 'F';
        // console.log(grade)
        break;
}

console.log(grade);