const passwordEl = document.querySelector(".pass");
const eyeButton = document.querySelector(".fa");
let isPass = true;
function togglePass() {
    if (isPass) {
        passwordEl.setAttribute("type", "text");
        eyeButton.classList.remove("fa-eye-slash");
        eyeButton.classList.add("fa-eye");
        isPass = false;
    } else {
        passwordEl.setAttribute("type", "password");
        eyeButton.classList.remove("fa-eye");
        eyeButton.classList.add("fa-eye-slash");
        isPass = true;
    }
}