let device = document.querySelector("#selectDevice");
let deviceHeading = document.querySelector("#deviceHeading");

device.addEventListener("change", (dits)=>{
    deviceHeading.textContent = `Your choose ${dits.target.value}`;
});