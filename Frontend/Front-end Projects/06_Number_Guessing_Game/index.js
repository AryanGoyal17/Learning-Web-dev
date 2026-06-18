let submit_btn = document.getElementById("submit_button");
// let input_val = Number(document.getElementById("number").value); //Putting this line first will set the input to 0 and it will never update again even if you enter a different number in input box and submit.
let output = document.getElementById("output");

let min = 1;
let max = 100;
let attempt_num = 0


const randomNum = Math.floor(Math.random() * (max - min + 1) + min)

submit_btn.onclick = function(){

    attempt_num++;

    let input_val = Number(document.getElementById("number").value);
     
    if(input_val < randomNum && input_val >= min){
        output.textContent = `TOO LOW!!, Attempts taken till now = ${attempt_num}`
        
        
    }

    else if(input_val > randomNum && input_val <= max){
        output.textContent = `TOO HIGH!!, Attempts taken till now = ${attempt_num}`
        
        
    }
    else if(input_val == randomNum){
        output.textContent = `Congratulations! You have guessed the number correctly. You took ${attempt_num} attempts!`
    }
    else{
        output.textContent =   `Please enter a valid number(1 - 100)!! Attempts taken till now = ${attempt_num} `
    }
}