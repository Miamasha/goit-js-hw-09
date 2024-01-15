
const form = document.querySelector(".feedback-form");
let emailInput = form.querySelector('[name="email"]');
let messageInput = form.querySelector('[name="message"]');

form.addEventListener("input", handleInput);
function handleInput(event) {    
    localStorage.setItem("feedback-form-state", 
                        JSON.stringify(getCurrentState()))
    // form.removeEventListener("input", handleInput); after "change" ?    
}


function getCurrentState(){
    let email = emailInput.value.trim(); //target.value
    let message = messageInput.value.trim(); //target.value
    return {Email: email, Message: message};
}

//loading initial state from LocalStorage
if (localStorage.getItem("feedback-form-state")){
    try {
        let formState = localStorage.getItem("feedback-form-state");
        formState = JSON.parse(formState); 
        emailInput.value = formState.Email;
        messageInput.value = formState.Message; 
    } catch (error) {
        localStorage.removeItem("feedback-form-state");
    }
}


form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    localStorage.removeItem("feedback-form-state");
    console.log(getCurrentState());
    event.target.reset();
}