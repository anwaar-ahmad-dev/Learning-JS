let btn = document.querySelector("#btn");
let fileInp = document.querySelector("#fileInp");

btn.addEventListener("click", ()=>{
    fileInp.click();
});

fileInp.addEventListener("change", (dits)=>{
    if(dits.target.files[0]){
        btn.textContent = dits.target.files[0].name;
    }
});