const increment_button = document.getElementById("increase");
const decrement_button = document.getElementById("decrease");
const reset_button = document.getElementById("reset");
const counter = document.getElementById("counter");

let count = 0;

increment_button.onclick =  function(){

    count++;
    counter.textContent = count;

}

decrement_button.onclick =  function(){

    count--;
    counter.textContent = count;
    
}

reset_button.onclick =  function(){

    count = 0;
    counter.textContent = count;

}