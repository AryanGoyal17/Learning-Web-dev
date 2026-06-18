let radius;
const PI = Math.PI;

document.getElementById("submit_r").onclick = function(){

    radius = document.getElementById("input_r").value;
    circumference = 2 * PI * radius;
    document.getElementById("answer").textContent = `Circumference(cm): ${circumference}`;
}