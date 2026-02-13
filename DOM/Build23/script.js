
// ALL VARIABLES AND DOC SELECTIONS 

let addNote = document.querySelector("#add-note");
let formContainer = document.querySelector(".form-container");
let closeForm = document.querySelector(".closeForm");

const stack = document.querySelector(".stack");

const upBtn = document.querySelector("#upBtn");
const downBtn = document.querySelector("#downBtn");

// Form
const form = document.querySelector("form");

// Inputs
const imageUrlInput = document.querySelector('input[placeholder="https://example.com/photo.jpg"]');
const fullNameInput = document.querySelector('input[placeholder="Enter full name"]');
const homeTownInput = document.querySelector('input[placeholder="Enter home town"]');
const purposeInput = document.querySelector('input[placeholder="e.g., Quick appointment note"]');

// Category (radio buttons)
const categoryRadios = document.querySelectorAll('input[name="category"]');

// Submit button
const submitBtn = document.querySelector(".submit-btn");


// CODE STARTS FROM HERE.

addNote.addEventListener("click", function () {
    formContainer.style.display = "initial";
});

closeForm.addEventListener("click", function () {
    formContainer.style.display = "none";
});


// FORM SUBMIT WITH BASIC VALIDATION


function saveToLocalStorage(obj) {
    let tasks = localStorage.getItem("tasks");

    tasks = tasks ? JSON.parse(tasks) : [];

    tasks.push(obj);

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// FORM SUBMIT 
form.addEventListener("submit", function (e) {
    e.preventDefault()

    // FORM VALIDATION

    const imageUrl = imageUrlInput.value.trim();
    const fullName = fullNameInput.value.trim();
    const homeTown = homeTownInput.value.trim();
    const purpose = purposeInput.value.trim();
    const urlRegex = /^(https?:\/\/)([\w-]+\.)+[\w-]+(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/i;


    let selected = "";
    categoryRadios.forEach(function (cat) {
        if (cat.checked) {
            selected = cat.value;
        }
    });

    if (imageUrl === "") {
        alert("Please enter an Image URL.");
        return;
    }

    if (!urlRegex.test(imageUrl)) {
        alert("Please enter a valid URL (starting with http:// or https://)");
        return;
    }

    if (fullName === "") {
        alert("Please enter your Full Name.");
        return;
    }

    if (homeTown === "") {
        alert("Please enter your Home Town.");
        return;
    }

    if (purpose === "") {
        alert("Please enter the Purpose.");
        return;
    }

    if (!selected) {
        alert("Please select a category");
        return;
    }

    // SAVING THE VALUES TO LOCAL STORAGE IN FORM OF AN OBJECT

    saveToLocalStorage(
        {
            imageUrl,
            fullName,
            homeTown,
            purpose,
            selected,
        }
    );

    // RESETTING AND CLOSING THE FORM. 

    form.reset();
    formContainer.style.display = "none";
    showCards();
});


// FUNCTION TO SHOW CARDS
function showCards() {
    stack.innerHTML = "";
    let allTasks = JSON.parse(localStorage.getItem("tasks"));

    allTasks.forEach(task => {
        //  CREATE CARD CONTAINER 
        const card = document.createElement("div");
        card.classList.add("card");

        //AVATAR IMAGE
        const avatar = document.createElement("img");
        avatar.src = task.imageUrl;
        avatar.alt = "Profile";
        avatar.classList.add("avatar");
        card.appendChild(avatar);

        // NAME
        const name = document.createElement("h2");
        name.textContent = task.fullName;
        card.appendChild(name);

        //INFO: HOME TOWN

        const homeTownInfo = document.createElement("div");
        homeTownInfo.classList.add("info");

        const homeTownLabel = document.createElement("span");
        homeTownLabel.textContent = "Home Town";
        const homeTownValue = document.createElement("span");
        homeTownValue.textContent = task.homeTown;

        homeTownInfo.appendChild(homeTownLabel);
        homeTownInfo.appendChild(homeTownValue);
        card.appendChild(homeTownInfo);


        // INFO: BOOKINGS
        const bookingsInfo = document.createElement("div");
        bookingsInfo.classList.add("info");

        const bookingsLabel = document.createElement("span");
        bookingsLabel.textContent = "Purpose";
        const bookingsvalue = document.createElement("span");
        bookingsvalue.textContent = task.purpose;

        bookingsInfo.appendChild(bookingsLabel);
        bookingsInfo.appendChild(bookingsvalue);
        card.appendChild(bookingsInfo);

        // BUTTONS CONTAINER
        const buttonsDiv = document.createElement("div");
        buttonsDiv.classList.add("buttons");

        // CALL BUTTON
        const callBtn = document.createElement("button");
        callBtn.classList.add("call");
        callBtn.innerHTML = '<i class = "ri-phone-line"></i> Call';

        // MESSAGE BUTTON
        const msgBtn = document.createElement("button");
        msgBtn.classList.add("msg");
        msgBtn.textContent = "Message";

        // APPEND BUTTONS
        buttonsDiv.appendChild(callBtn);
        buttonsDiv.appendChild(msgBtn);

        // APPEND BUTTONSDIV TO CARD
        card.appendChild(buttonsDiv);

        // ADD THE CARD TO THE DOM
        document.querySelector(".stack").appendChild(card);
    });
}

showCards();


// TEMPORARY-- CSS HANDLES THE STACKING INDECES 
// function updateStack() {
//     const cards = document.querySelectorAll(".stack .card");

//     for (let i = 0; i < 3; i++) {
//         card.style.zIndex = 3 - i;
//         card.style.transform = `translateY(${i * 10}px) scale(${1 - i * 0.02})`;
//         card.style.opacity = `${1 - i * 0.02}`;
//     }
// }

upBtn.addEventListener("click", function () {
    let lastChild = stack.lastElementChild;
    if (lastChild) {
        stack.insertBefore(lastChild, stack.firstElementChild);
    }
});


downBtn.addEventListener("click", function () {
    let firstChild = stack.firstElementChild;
    if (firstChild) {
        stack.appendChild(firstChild);
    }
});