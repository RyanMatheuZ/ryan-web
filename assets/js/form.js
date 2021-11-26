const btnSend = document.getElementById("footer-form-btn-send");

const inputName = document.getElementById("input-name");
const inputEmail = document.getElementById("input-email");
const inputMessage = document.getElementById("input-message");

const inputNameError = document.getElementById("input-name-error");
const inputEmailError = document.getElementById("input-email-error");
const inputMessageError = document.getElementById("input-message-error");

btnSend.addEventListener("click", () => {
	inputNameError.style.display = "none";
	inputEmailError.style.display = "none";
	inputMessageError.style.display = "none";

    if (!inputName.value) {
		inputNameError.style.display = "block";
        nameResult.focus();
		navigator.vibrate(200);
    } else if (!inputEmail.value) {
		inputEmailError.style.display = "block";
		emailResult.focus();
		navigator.vibrate(200);
    } else if (!inputMessage.value) {
		inputMessageError.style.display = "block";
        messageResult.focus();
		navigator.vibrate(200);
    }
});