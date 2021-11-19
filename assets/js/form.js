const btnSend = document.getElementById("btn-send");
const inputName = document.getElementById("input-name");
const inputEmail = document.getElementById("input-email");
const inputMessage = document.getElementById("input-message");

btnSend.addEventListener("click", () => {
    inputName.setAttribute("placeholder", "Seu nome:");
    inputEmail.setAttribute("placeholder", "Seu E-mail:");
    inputMessage.setAttribute("placeholder", "Sua mensagem:");

    if (!inputName.value) {
        inputName.setAttribute("placeholder", "Primeiro seu nome, amigão!");
        nameResult.focus();
    } else if (!inputEmail.value) {
        inputEmail.setAttribute("placeholder", "Como entrarei em contato?");
        emailResult.focus();
    } else if (!inputMessage.value) {
        inputMessage.setAttribute("placeholder", "Não quer me dizer nada mesmo?");
        messageResult.focus();
    }
});