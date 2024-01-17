
const form = document.querySelector(".feedback-form");
const emailInput = form.querySelector('[name="email"]');
const messageInput = form.querySelector('[name="message"]');

form.addEventListener("input", handleInput);
function handleInput(event) {    
    localStorage.setItem("feedback-form-state", 
                        JSON.stringify(getCurrentState()))
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
    if (emailInput.value === "" || messageInput.value === "") {
        alert("All Form fields must be filled!")
        return false; //не дає сабміту завершитись і стерти ЛокалСторадж
    }
    localStorage.removeItem("feedback-form-state");
    console.log(getCurrentState());
    event.target.reset();
}

// Використання "let" для "emailInput" та "messageInput" може бути оновлено на "const",
// оскільки ці змінні пізніше не змінюються в коді. (Виправлено)

// Ключі об'єкта "Email" та "Message" повинні бути в нижньому регістрі,
// щоб відповідати конвенціям назв JavaScript.  (Поки що спеціально залишено для візуалізації)
// Критичні помилки: Неспівпадання ключів LocalStorage: Ключ, який ви використовуєте для зберігання
// значення, - "feedback-form-state", але під час отримання значень використовуються ключі об'єкта
// "Email" та "Message". Ця неузгодженість може призвести до проблем при парсингу даних.
// Ключі повинні бути в нижньому регістрі, щоб відповідати назвам полів форми. Вправлення назв
// ключів об'єкта забезпечить узгодженність з назвами полів форми та конвенціями JavaScript.