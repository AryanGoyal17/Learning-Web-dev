const submit_button = document.getElementById("submit_age");
const answer = document.getElementById("answer");

let age;


submit_button.onclick = function(){

    age = document.getElementById("age_input").value;

    if(age >= 18){
        answer.textContent = `You can apply for a driver's license!`
    }
    else if(age <= 0){
        answer.textContent = `Invalid age entered!`
    }
    else{
        answer.textContent = `You can't apply for a driver's license!`
    }
      
}