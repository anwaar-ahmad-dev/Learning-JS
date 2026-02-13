let input = document.querySelector("input");
let form = document.querySelector("form");


form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(input.value);
  document.querySelector("#displayUsername").textContent = input.value;
  localStorage.setItem("userName", input.value);
});

let storedName = localStorage.getItem("userName");
if (storedName) {
  document.querySelector("#displayUsername").textContent = storedName;
  input.value = storedName;
}