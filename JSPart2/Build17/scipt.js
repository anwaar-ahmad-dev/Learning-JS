let alertBox = document.querySelector(".alert");
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
    alertBox.classList.add("active");
    setTimeout(() => {
        alertBox.classList.remove("active");
    }, 3000);
});

