let username = window.prompt(`Enter your username: `);
let age;

console.log(username);

document.getElementById("submit_button").onclick = function(){

    age = document.getElementById("user_input").value;
    document.getElementById("Heading1").textContent = `Hi ${username}, You are ${age} years old`;
}

//Learning the difference between .textContent , .innerHTML and .innerText is left