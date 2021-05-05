function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();
        var name = document.getElementById("signinusername").value;
        var namelen = name.length;
        var pass = document.getElementById("pass").value;
        if (namelen == 10 && pass == "1234") {
            window.location.href = "TrainList.html";
        } else {
            setFormMessage(loginForm, "error", "Invalid username/password combination");
        }
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "Username must be at least 10 characters in length");
            }

            if (e.target.id === "newpass" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "Password must be at least 10 characters in length");
            }
            if (e.target.id == "mailid" && e.target.validity.typeMismatch) {
                setInputError(inputElement, "Please Enter a Valid Mail id ");
            }

            var password = document.querySelector(".newpass").value,
                confirmpassword = document.querySelector(".checknewpass").value;
            if (password != confirmpassword) {
                e.target.id = "checknewpass";
                setInputError(inputElement, "Password Didn't Match Entered Password");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});