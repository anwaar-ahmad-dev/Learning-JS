let nm = document.querySelector("#name");
let form = document.querySelector("form");
let hide = document.querySelector("#hide");
let textarea = document.querySelector("textarea");

form.addEventListener("submit", function(e){
    e.preventDefault();
    if(nm.value.length <= 2){
        hide.style.display = "block";
    }
    else{
        hide.style.display = "none";
    }
    if(textarea.value.trim() !== ""){
        console.log(textarea.value);
    }
    else{
        window.alert("write something in textarea.");
    }
});