const min = 1;
const max = 6;

const roll_button = document.getElementById("roll");

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");

roll_button.onclick = function(){

    let RandomNum1 = Math.floor(Math.random() * (max - min + 1) + min);
    let RandomNum2 = Math.floor(Math.random() * (max - min + 1) + min);
    let RandomNum3 = Math.floor(Math.random() * (max - min + 1) + min);

    num1.textContent = RandomNum1;
    num2.textContent = RandomNum2;
    num3.textContent = RandomNum3;

}



