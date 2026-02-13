let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault()

    document.querySelector("#emailError").textContent = "";
    document.querySelector("#passwordError").textContent = "";

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let isValid = true;

    let emailans = emailRegex.test(email.value);
    let passwordans = passwordRegex.test(password.value);
    if (!emailans) {
        document.querySelector("#emailError").textContent = "Invalid email format";
        isValid = false;
    }
    if (!passwordans) {
        document.querySelector("#passwordError").textContent = "Invalid password format";
        isValid = false;
    }

    if(isValid){
        document.querySelector(".resultMessage").textContent = "Email and Password format is valid."
    }

});