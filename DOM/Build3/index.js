let form = document.querySelector("form");
let inputs = document.querySelectorAll(".input");
let container = document.querySelector(".container");


// function hideCard(){
//     let card = document.querySelector(".card")
//     card.style.display = "none";
// }
// let cancelButton = document.querySelector("#cancelButton");
// cancelButton.addEventListener("click", hideCard);



form.addEventListener("submit", (dets)=>{
    dets.preventDefault();

    let card = document.createElement("div");
    card.classList.add("card");

    let profileDiv = document.createElement("div");
    profileDiv.classList.add("profle-div");

    let profile = document.createElement("div");
    profile.classList.add("profile");

    let img = document.createElement("img");
    img.setAttribute("src", inputs[0].value);


    let h3 = document.createElement("h3");
    h3.textContent = inputs[1].value;

    let h5 = document.createElement("h5");    
    h5.textContent = inputs[2].value;
    
    let p = document.createElement("p");    
    p.textContent = inputs[3].value;

    profile.appendChild(img);
    profileDiv.appendChild(profile);

    card.appendChild(profileDiv);
    card.appendChild(h3);
    card.appendChild(h5);
    card.appendChild(p);

    container.appendChild(card);

    inputs.forEach(element => {
        if (element.type !== "submit"){
            element.value = "";
        }
    });
});