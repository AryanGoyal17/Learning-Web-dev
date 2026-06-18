const subscribe = document.getElementById("subscribe");
const Visa = document.getElementById("Visa");
const MasterCard = document.getElementById("MasterCard");
const Paypal = document.getElementById("Paypal");

const p1 = document.getElementById("Subscription_choice");
const p2 = document.getElementById("Payment_mode_choice");

const submit = document.getElementById("submit");

submit.onclick = function(){

if(subscribe.checked){
    p1.textContent = `You have Subscribed!`;

    if(Visa.checked){
        p2.textContent = `You chose Visa as your payment mode!`;
    }

    else if(MasterCard.checked){
        p2.textContent = `You chose MasterCard as your payment mode!`;
    }

    else if(Paypal.checked){
        p2.textContent = `You chose Paypal as your payment mode!`;
    }

    else{
        p2.textContent = `Thank you for subscribing! Please choose your payment mode!`;
    }
}

else{
    p1.textContent = `You haven't Subscribed yet!`
    p2.textContent = `Subscribe to choose a payment mode!!`
}

}