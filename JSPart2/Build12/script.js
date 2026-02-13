let form = document.querySelector("form");
let radios = document.querySelectorAll("input");
let attemptedSpan = document.querySelector("#attempted");
let main = document.querySelector(".main");

let correctAnswers = ["a", "b", "b", "d", "c"]; // Array of correct answers

// Attempted question dynamic count.
let answered = {};
radios.forEach(radio => {
    radio.addEventListener("change", () => {
        answered[radio.name] = true;
        // console.log(answered);
        attemptedSpan.textContent = Object.keys(answered).length;
    });
});


// form submit and answer check logic.

let userAnswers = []; // Array of user answers.

form.addEventListener("submit", (e) => {
    e.preventDefault()
    radios.forEach(radio => {
        if (radio.checked) {
            userAnswers.push(radio.value);
        }
    });

    let trueAnswer = 0;
    let falseAnswer = 0;
    for (let i = 0; i < correctAnswers.length; i++) {
        if (userAnswers[i] === correctAnswers[i]) {
            trueAnswer++;
        }
        else {
            falseAnswer++;
        }
    }

    // removing form form the window on submit.

    // console.log(trueAnswer);
    // console.log(falseAnswer);

    main.removeChild(form);

    // Creating the result card 

    let resultCard = document.createElement("div");
    resultCard.classList.add("result-card");

    let h2 = document.createElement("h2");
    h2.textContent = "Quiz Result";

    let result = document.createElement("div");
    result.classList.add("result");

    let correctH3 = document.createElement("h3");
    let correctSpan = document.createElement("span");
    correctSpan.textContent = trueAnswer;
    correctH3.textContent = "Correct ✅ : ";

    let IncorrectH3 = document.createElement("h3");
    let IncorrectSpan = document.createElement("span");
    IncorrectSpan.textContent = falseAnswer;
    IncorrectH3.innerHTML = "Incorrect ❌ : ";

    let backBtn = document.createElement("button");
    backBtn.textContent = "Back to Quiz";


    // adding created elements to the page.

    IncorrectH3.appendChild(IncorrectSpan);
    correctH3.appendChild(correctSpan);

    result.appendChild(correctH3);
    result.appendChild(IncorrectH3);

    resultCard.appendChild(h2);
    resultCard.appendChild(result);
    resultCard.appendChild(backBtn);

    main.appendChild(resultCard);
    backBtn.addEventListener("click", () => {
        window.location.reload();
    });
});