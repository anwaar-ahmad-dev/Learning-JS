let h1 = document.querySelector("h1");

window.addEventListener("keydown", function(dits) {
    dits.key === " "
    ? h1.textContent = "SPC"
    : h1.textContent = dits.key;
});