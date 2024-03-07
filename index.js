const validatePassword = () => {
    if (passwordInput.value.length > 0) {
        if (passwordInput.value === confirmPasswordInput.value) {
            errorText.style.display = "none";
            passwordInput.className = "";
            confirmPasswordInput.className = "";
        } else {
            errorText.style.display = "inline";
            passwordInput.className = "error";
            confirmPasswordInput.className = "error";
        }
    }
};

const passwordInput = document.querySelector("#password");
passwordInput.addEventListener("blur", validatePassword);

const confirmPasswordInput = document.querySelector("#confirm-password");
confirmPasswordInput.addEventListener("blur", validatePassword);

const errorText = document.querySelector(".error-text");

document.querySelector("form").addEventListener("submit", e => {
    if (passwordInput.value !== confirmPasswordInput.value) {
        e.preventDefault();
    }
});