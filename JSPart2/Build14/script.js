let preRegisterButton = document.querySelector(".preRegisterButton");
let preRegisterOverlay = document.querySelector(".preRegister-overlay");
let closeBtn = document.querySelector(".modal-close");
let form = document.querySelector("form");
let nm = document.querySelector("#name-input");
let email = document.querySelector("#email-input");
let number = document.querySelector("#number-input");

preRegisterButton.addEventListener("click", function () {
    preRegisterOverlay.style.display = "flex";
    document.querySelectorAll(".error").forEach((error) => {
        error.textContent = "";
    });
    document.querySelectorAll(".form-input").forEach((input) => {
        input.value = "";
    });
});

closeBtn.addEventListener("click", function () {
    preRegisterOverlay.style.display = "none";
});



form.addEventListener("submit", function (e) {
    e.preventDefault();
    let isValid = true;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let emailans = emailRegex.test(email.value);

    if (nm.value.length <= 2) {
        document.querySelector("#name-error").textContent = "Name should be 3 characters long";
        isValid = false;
    }

    if (!emailans) {
        document.querySelector("#email-error").textContent = "Invalid email format";
        isValid = false;
    }

    if (number.value.length <= 9) {
        document.querySelector("#number-error").textContent = "Number should be 10 digits long";
        isValid = false;
    }

    if (isValid) {
        preRegisterOverlay.style.display = "none";
        const popup = document.querySelector(".pop-up");

        popup.classList.add("show");

        setTimeout(() => {
            popup.classList.remove("show");
        }, 3000);
    }

});